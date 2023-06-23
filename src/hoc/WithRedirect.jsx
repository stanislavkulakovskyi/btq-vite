/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCurrentRoute } from "../hooks/useCurrentRoute";
import { ROOT } from "../utils/constants/routes";

export const WithRedirect = ({ children }) => {
  const currentRoute = useCurrentRoute();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentRoute) {
      navigate(ROOT, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoute]);

  return <>{children}</>;
};