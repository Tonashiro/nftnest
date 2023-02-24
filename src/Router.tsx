import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home/HomePage").then((module) => {
  return { default: module.HomePage };
}));

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export { Router };
