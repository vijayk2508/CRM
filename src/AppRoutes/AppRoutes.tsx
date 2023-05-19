import React, { lazy, LazyExoticComponent, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routeConstant";
import Layout from "../components/common/Layout";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => {
              let LazyComponent: LazyExoticComponent<React.FC> = lazy(
                () => import(`../components/${route.componentPath}.tsx`)
              );
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<LazyComponent />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
