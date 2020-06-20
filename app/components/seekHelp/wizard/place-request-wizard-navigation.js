import React from "react"
import {Button, Divider, Space, Form} from "antd";
import PlaceRequestWizardValidationError from "./place-request-wizard-validation-error";

export default function PlaceRequestWizardNavigation({handlePreviousPage, wizardState}) {
    return (
        <>
            <Divider/>
            <Space>
                <Form.Item>
                    {wizardState.currentStep !== 0 && <Button size={"large"} onClick={handlePreviousPage} htmlType={"button"}>Zum vorherigen Schritt</Button>}
                </Form.Item>
                <Form.Item>
                    {wizardState.hasError && <PlaceRequestWizardValidationError wizardState={wizardState}/>}

                    {wizardState.currentStep !== 6 && <Button type={"primary"} size={"large"} htmlType={"submit"}>Zum nächsten Schritt</Button>}
                </Form.Item>
            </Space>
        </>
    );
}