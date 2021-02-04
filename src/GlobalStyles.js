import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        padding: 0;
        margin: 0;
        h1,h2,h3,h4{
            font-family: 'Kanit', sans-serif;
            color: white;
        }
        p, li{
            font-size: 17px;
            font-family: 'Roboto Mono', monospace;
        }
    }
`

export default GlobalStyle
