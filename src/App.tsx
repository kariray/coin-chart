import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ThemeToggle from "./components/themeToggle";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilState } from "recoil";
import { themeMode } from "./states/themeMode";
import { darkTheme, lightTheme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  line-height: 1.2;
}
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
`;

function App() {
  const queryClient = new QueryClient();
  const [mode] = useRecoilState(themeMode);

  return (
    <>
      <ThemeProvider theme={mode ? lightTheme : darkTheme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <BrowserRouter>
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
