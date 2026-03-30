import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { HomePage } from './pages/Home.page';
import { HomePageTest } from './pages/Home.pageTest';

const router = createBrowserRouter([
  {
    path: '/:section?/*',
    element: <HomePageTest/>,
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
