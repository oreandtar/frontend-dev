import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: "rgb(239, 237, 237)",
    fontColor: "#000",
}

export const darkTheme = {
    body: "#000",
    fontColor: "#ffff",
}
export const GlobalStyles = createGlobalStyle`
body{ 
    background-color: ${(props) => props.theme.body} !important ;
    color:${(props) => props.theme.fontColor}
}

`