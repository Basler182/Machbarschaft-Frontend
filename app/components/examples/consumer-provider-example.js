import React from 'react'
import ThemeContext from "../../contexts/examples/theme";
import {Typography, Button} from 'antd';

const {Title, Text, Paragraph} = Typography;

export default function ConsumerProviderExample({toggleTheme}) {
    /* The ThemeContext (defined in contexts/examples/theme) is used. This context is also inserted into the component tree by a provider. */
    const theme = React.useContext(ThemeContext)

    return(
        <React.Fragment>
            <Title level={3}>Consumer / Provider</Title>
            <Paragraph>
                <Text>Aktueller Stil: {theme}</Text>
            </Paragraph>
            {/* ToggleTheme is defined on a higher level (in examples.js) and passed to this component. */}
            <Button
                type={"primary"}
                onClick={toggleTheme}
            >Toggle</Button>
        </React.Fragment>
    )
}