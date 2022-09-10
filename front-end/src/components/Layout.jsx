import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import loadable from "@loadable/component";
import { toggleBanner } from "../store/actions/layout-action";
import PageLoader from "./PageLoader";

const Banner = loadable(() => import("../partials/Banner"));
const Header = loadable(() => import("../partials/Header"));
const Sidebar = loadable(() => import("../partials/Sidebar"));

const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { showBanner } = useSelector((state) => state.layout);
  const { isLogin, user } = useSelector((state) => state.authReducer);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(toggleBanner(true));
  }, [location]);

  if (!isLogin && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <Suspense fallback={<PageLoader />}>
        <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Content */}
                <Outlet layoutData="tes" />
            </div>
            </main>

            {showBanner && <Banner />}
        </div>
        </div>
    </Suspense>
  );
};

export default Layout;
