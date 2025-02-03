import { ThemeProvider } from "@emotion/react";
import Header1 from "./Components/Header/Header1";
import Header2 from "./Components/Header/Header2";
import Header3 from "./Components/Header/Header3";
import { Box, CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theam";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/mainContent/Main";
import Footer from "./Components/footer/Footer";
import ScrollToTop from "./Components/scroll/ScrollToTop";




function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>

<ThemeProvider theme={theme}>

<CssBaseline />






      <Header1 />
      <Header2 />
      <Header3 />

      <Box
      bgcolor={theme.palette.bg.main}
      >
      <Hero />


     <Main />

      </Box>

      
      
    <Footer /> 

    <ScrollToTop />
      






</ThemeProvider>
    </ColorModeContext.Provider>
      
    
  );
}

export default App;
