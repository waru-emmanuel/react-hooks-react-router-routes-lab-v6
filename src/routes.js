
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./components/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "actors",
    element: <Actors />
  },
  {
    path: "directors",
    element: <Directors />
  },
  {
    path: "movie/:id",
    element: <Movie />
  }
]);

export default routes;


