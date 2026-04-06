import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {ClientDashboard} from "./pages/ClientDashboard.tsx";
import {VetDashboard} from "./pages/VetDashboard.tsx";

const router = createBrowserRouter([
  {
    path: '/:section?/*',
    element: <ClientDashboard/>,
  },
  {
    path: 'vet/:section?/*',
    element: <VetDashboard/>
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
