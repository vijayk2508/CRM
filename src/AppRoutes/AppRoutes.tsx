import React, { Suspense, useEffect, useMemo, useCallback } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { generateLazyComponent, routes } from "./routeConstant";
import { IRouteConfig } from "../interfaces/IRouteConfig";

const defaultTheme = createTheme();

const AppRoutes: React.FC = () => {
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const shouldRedirect = !userId && window.location.pathname !== "/";

    if (shouldRedirect) {
      window.location.href = "/";
    }
  }, []);

  const renderRoutes = useCallback((objRoute: IRouteConfig[]) => {
    return objRoute.map((r1) => {
      const { path, childrens } = r1;
      const LazyComponent = generateLazyComponent(r1);
      return (
        <Route key={path} path={path} element={<LazyComponent />}>
          {childrens && renderRoutes(childrens)}
        </Route>
      );
    });
  }, []);

  const curRoute = useMemo(
    () => routes[localStorage.getItem("userId") ? 1 : 0],
    []
  );

  console.log(curRoute);

  const LayoutComponent = generateLazyComponent(curRoute);

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              element={
                <LayoutComponent>
                  <Outlet />
                </LayoutComponent>
              }
            >
              {renderRoutes(curRoute.childrens || [])}
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;
