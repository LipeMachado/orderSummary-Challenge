import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: hsl(225, 100%, 94%);
        font-family: 'Red Hat Display', sans-serif;
        color: black;
    }
`;