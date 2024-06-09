import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Authorization from "./pages/Authorization/Authorization";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Authorization />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
