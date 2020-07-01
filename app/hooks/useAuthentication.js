import React from 'react'
import {postAuthenticate, putLogin, putLogout} from "../utils/api/authenticationAPI";

// ToDo: Welche Daten wollen wir für den lokalen Nutzer speichern?
const initialAuthenticationState = {
    // User Data
    uid: null,
    email: null,
    phoneNumber: null,

    // Profile
    profile: {
        forename: "Max",
        surname: "Schmidt",
        address: {
            street: "",
            houseNumber: "",
            zipCode: "",
            country: ""
        }
    },

    // Process Information
    isInitialLoading: true,
    isAuthenticating: false,
    authenticationErrors: null,
}

function authenticationReducer(state, action) {
    switch (action.type) {
        case "loginInit":
            return {
                ...initialAuthenticationState,
                isAuthenticating: true,
                isInitialLoading: false,
            }
        case "loginFailure":
            return {
                ...initialAuthenticationState,
                isAuthenticating: false,
                isInitialLoading: false,
                authenticationErrors: action.data.errors
            }
        case "authenticationSuccess":
            return {
                ...state,
                isAuthenticating: false,
                isInitialLoading: false,
                uid: action.data["uid"],
                email: action.data["email"],
                phoneNumber: "0123", // Todo: Change
                profile: {
                    forename: "Max",
                    surname: "Schmidt",
                    address: {
                        street: "",
                        houseNumber: "",
                        zipCode: "",
                        country: ""
                    }
                },
            }
        case "authenticationFailure":
            return {
                ...initialAuthenticationState,
                isAuthenticating: false,
                isInitialLoading: false
            }
        case "invalidateSuccess":
            return {
                ...initialAuthenticationState,
                isInitialLoading: false
            }
        default:
            throw new Error("Unsupported Type")
    }
}

/**
 * The custom hook useAuthentication holds the current authentication data. It provides information about the authenticated user (if any)
 * as well as methods to login (verify), check and invalidate the authentication.
 * Information is available to the render tree via AuthenticationContext. Components that need to access any of these data, can just use 'React.useContext(AuthenticationContext)'.
 *
 * @returns {[{uid: null, email: null}, {invalidateAuthentication: (function(): boolean), checkAuthentication: checkAuthentication}]}
 */
export default function useAuthentication() {
    const [authenticationState, dispatch] = React.useReducer(
        authenticationReducer,
        initialAuthenticationState
    )

    const isAuthenticated = () => {
        return authenticationState.uid !== null;
    }

    /* Check for authentication on first build */
    React.useEffect(() => {
        checkAuthentication();

    }, [])

    /**
     * Makes a request to the backend in order to authenticate a user and modifies state accordingly
     * @param email the email of the user to be authenticated
     * @param password the password of the user to be authenticated
     */
    const performAuthentication = async (email, password) => {
        dispatch({
            type: "loginInit"
        });

        try {
            let loginResult = await putLogin(email, password);
            if (loginResult.status === 200) {
                await checkAuthentication();
            } else {
                dispatch({
                    type: "loginFailure",
                    data: {
                        errors: "Zu dieser Kombination konnten wir keinen Benutzer finden."
                    }
                })
            }
        } catch (error) {
            // ToDo: Dieser Case ist eig. Server Offline. Wie gehen wir damit um?
            dispatch({
                type: "loginFailure",
                data: {
                    errors: "TBD"
                }
            })
        }
    }

    /**
     * Makes a request to the backend in order to get information about the authenticated user (if any) and modifies state accordingly
     */
    const checkAuthentication = async () => {
        try {
            let authenticateResult = await postAuthenticate();
            if (authenticateResult.status === 200) {
                authenticateResult = await authenticateResult.json();
                dispatch({
                    type: "authenticationSuccess",
                    data: {
                        uid: authenticateResult["uid"],
                        email: authenticateResult["email"]
                    }
                })
            } else {
                dispatch({
                    type: "authenticationFailure",
                    data: {
                        errors: "E-Mail Adresse oder Passwort ist nicht korrekt."
                    }
                })
            }
        } catch (error) {
            dispatch({
                type: "authenticationFailure"
            })
        }
    }

    /**
     * Makes a request to the backend in order to invalidate (logout) a user, i.e. clearing his cookie and modifies state accordingly
     */
    const invalidateAuthentication = async () => {
        try {
            let logoutResult = await putLogout();
            if (logoutResult.status === 200) {
                dispatch({
                    type: "invalidateSuccess"
                })
            } else {
                dispatch({
                    type: "invalidateFailure"
                })
            }
        } catch (error) {
            dispatch({
                type: "authenticationFailure"
            })
        }
    }

    return [authenticationState, {
        performAuthentication,
        checkAuthentication,
        invalidateAuthentication,
        isAuthenticated
    }]
}