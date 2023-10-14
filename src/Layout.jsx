import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
const Layout = () => {
	const pages = "Dashboard"
	return (
		<div className="LayoutContainer">
			<div className="LayoutContentContainer">
				<div className="leftCon">
					<Sidebar />
				</div>
				<div className="rightCon">
					<div className="rightContentCon">
						<Header page={pages}/>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
