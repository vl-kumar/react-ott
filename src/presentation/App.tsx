import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { Theme, darkTheme } from "core/theme";
import { Provider } from "react-redux";
import { store } from "presentation/store/store";
import { ThemeContainer } from "./App.style";
const SearchScreen = React.lazy(() => import("./screens/SearchScreen"));
const NotFoundScreen = React.lazy(() => import("./screens/NotFoundScreen"));


const App = () => {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  /** To toggle the theme
   * const toggleTheme = () => {
   * setTheme(theme.name === "light" ? darkTheme : lightTheme);
   * };
   */

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ThemeContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SearchScreen />} />
              {/* To Handle Git Hub Page Default Navigation */}
              <Route path="/react-ott" element={<SearchScreen />} />
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </BrowserRouter>
        </ThemeContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
