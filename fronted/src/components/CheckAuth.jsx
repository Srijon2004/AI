// CheckAuth.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { userDataContext } from "../contextapi/UserContext";

function CheckAuth() {
  const { userData, loading } = useContext(userDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !userData) {
      navigate("/signin"); // redirect to your signin route
    }
  }, [loading, userData]);

  return null; // optionally show a loading spinner
}

export default CheckAuth;
