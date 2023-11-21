import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { Theme, darkTheme } from "core/theme";
import { Provider } from "react-redux";
import { store } from "presentation/store/store";
import { ThemeContainer } from "./App.style";
const SearchScreen = React.lazy(() => import("./screens/SearchScreen"));

const App = () => {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  /** To toggle the theme
   * const toggleTheme = () => {
   * setTheme(theme.name === "light" ? darkTheme : lightTheme);
   * };
   */

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchScreen />,
    },
  ]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ThemeContainer>
          <RouterProvider router={router} />
        </ThemeContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
