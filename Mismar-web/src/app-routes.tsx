import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutesObj } from "./app.paths";
import Navbar from "./containers/admin/navbar";

const HomePage = React.lazy(() => import("./pages/admin/home-page"));
const AllOrdersPage = React.lazy(
  () => import("./pages/admin/orders/allOrders-page")
);
const CommunicationOrdersPage = React.lazy(
  () => import("./pages/admin/orders/communicationOrders-page")
);
const ReturnOrdersPage = React.lazy(
  () => import("./pages/admin/orders/returnOrders-page")
);
const SparePartsOrdersPage = React.lazy(
  () => import("./pages/admin/orders/sparePartsOrders-page")
);
const NotificationsOrdersPage = React.lazy(
  () => import("./pages/admin/orders/notificationsOrders-Page")
);

const withSuspense = (WrappedComponent: JSX.Element) => {
  return (
    <Suspense
      fallback={<div className="text-primary-200 pt-10">Loading...</div>}
    >
      {WrappedComponent}
    </Suspense>
  );
};

export function AppRouting() {
  return (
    <Suspense
      fallback={<div className="text-primary-200 pt-10">Loading...</div>}
    >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            key="homepage"
            path={appRoutesObj.getBasePath()}
            element={withSuspense(<HomePage />)}
          />

          <Route
            key="allOrders"
            path={appRoutesObj.getAllOrdersPagePath()}
            element={withSuspense(<AllOrdersPage />)}
          />

          <Route
            key="CommunicationOrders"
            path={appRoutesObj.getCommunicationOrdersPagePath()}
            element={withSuspense(<CommunicationOrdersPage />)}
          />

          <Route
            key="ReturnOrders"
            path={appRoutesObj.getReturnOrdersPagePath()}
            element={withSuspense(<ReturnOrdersPage />)}
          />

          <Route
            key="SparePartsOrders"
            path={appRoutesObj.getSparePartsOrdersPagePath()}
            element={withSuspense(<SparePartsOrdersPage />)}
          />

          <Route
            key="NotificationsOrders"
            path={appRoutesObj.getNotificationsOrdersPagePath()}
            element={withSuspense(<NotificationsOrdersPage />)}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
