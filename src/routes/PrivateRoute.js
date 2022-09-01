import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const LOGIN_ROUTE = "/login";

function PrivateRoute({ children }) {
  const { isLoggedIn } = useSelector((state) => state.users);
  return isLoggedIn ? <>{children}</> : <Navigate to={LOGIN_ROUTE} />;
}

export default PrivateRoute;
