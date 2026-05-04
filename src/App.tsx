import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from './routeTree.gen'
// Create a new router instance
const router = createRouter({ routeTree })

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App;
