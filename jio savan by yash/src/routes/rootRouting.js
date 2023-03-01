import { memo, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import DetailPage from "pages/detailPage";
import { HistoryPage } from "pages/historyPage";
const DashBoardLayout = lazy(() => import("../layouts/dashBoardLayout"));

const AppRoute = memo(() => {
  return (
    <main className="overflow-x-hidden">
      <Suspense fallback={"LOADING"}>
        <Routes>
          <Route
            path="/"
            element={
              <DashBoardLayout>
                <HomePage />
              </DashBoardLayout>
            }
          />
           <Route
            path="/details/:id"
            element={
              <DashBoardLayout>
                <DetailPage />
              </DashBoardLayout>
            }
          />
           <Route
            path="/history"
            element={
              <DashBoardLayout>
                <HistoryPage />
              </DashBoardLayout>
            }
          />
        </Routes>
      </Suspense>
    </main>
  );
});

export default AppRoute;
