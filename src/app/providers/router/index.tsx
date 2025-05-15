import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import router from "@app/providers/router/state";

const Router: FC = () => <RouterProvider router={ router }/>

export default Router;
