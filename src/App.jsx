import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Transactions from "./pages/transactions";
import Schedules from "./pages/schedules";
import Users from "./pages/users";
import Settings from "./pages/settings";
import Protectedelement from "./components/protect";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Login from "./pages/login";
import Register from "./pages/register";
import { ClerkProvider } from "@clerk/clerk-react";
import Layout from "./Layout";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.css";
import Chart from "chart.js/auto";
import { CategoryScale, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, ArcElement, Tooltip, Legend);

const App = () => {
	const CLERK_PUBLISHABLE_KEY =
		"pk_test_Z3JlYXQtZ3JvdXNlLTI3LmNsZXJrLmFjY291bnRzLmRldiQ";
	const navigate = useNavigate();
	return (
		<ClerkProvider
			publishableKey={CLERK_PUBLISHABLE_KEY}
			navigate={(to) => navigate(to)}
		>
			<Routes>
				<Route
					path="/"
					element={
						<Protectedelement>
							<Layout>
							</Layout>
						</Protectedelement>
					}
				>
					<Route path="/" element={<Home />} />
					<Route path="/transactions" element={<Transactions />} />
					<Route path="/schedules" element={<Schedules />} />
					<Route path="/users" element={<Users />} />
					<Route path="/settings" element={<Settings />} /> 
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</ClerkProvider>
	);
};

export default App;
