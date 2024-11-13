import { Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth/auth_context";

export default function ProtectedRoutes() {
  const { cookies } = useAuth(); // Pulls cookies out of Auth Context
  return cookies.token ? <Outlet /> : <h1>You are not authorized to View</h1>;
}
