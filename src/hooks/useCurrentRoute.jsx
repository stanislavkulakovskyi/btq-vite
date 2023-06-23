import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { PUBLIC_ROUTES } from "../utils/constants/routes";

export const useCurrentRoute = () => {
  const { pathname, hash } = useLocation();

  const currentRoute = useMemo(() => {
    if (hash) {
      return PUBLIC_ROUTES.find((route) => route.path === hash);
    }

    return PUBLIC_ROUTES.find((route) => route.path === pathname);
  }, [pathname, hash]);

  return currentRoute;
};
