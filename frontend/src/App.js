import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";
// components
import Home from "../src/home/Home";
import Register from "../src/auth/Register";
import Login from "../src/auth/Login";
import Dashboard from "./user/Dashboard";
import DashboardSeller from "./user/DashboardSeller"
import NewProduct from "./products/NewProduct";
import StripeCallback from "./stripe/StripeCallback";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dashboard/seller" component={DashboardSeller} />
        <PrivateRoute exact path="/products/newproduct" component={NewProduct} />
        <PrivateRoute exact path="/stripe/callback" component={StripeCallback} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
