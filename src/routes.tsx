import {
    createBrowserRouter,
  } from "react-router-dom";

  import App from './App.tsx'
import ErrorPage from "./error-page.tsx";

  
 export const router = createBrowserRouter([
        {
            path:'/',
            element: <App/>,
            errorElement: <ErrorPage/>
        }
  ]);