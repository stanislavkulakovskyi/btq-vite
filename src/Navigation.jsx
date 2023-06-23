import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { PUBLIC_ROUTES, ROOT } from "./utils/constants/routes";

import { WithRedirect } from "./hoc/WithRedirect";

const Navigation = () => {
  return (
    <Router>
      <WithRedirect>
        <Routes>
          {PUBLIC_ROUTES.map((route) => {
            const { layout: Layout, page: Page, path } = route;
            
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

          <Route path="*" element={<Navigate to={ROOT} />} />
        </Routes>
      </WithRedirect>
    </Router>
  );
};

export default Navigation;
