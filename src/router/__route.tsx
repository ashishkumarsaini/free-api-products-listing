import { createRootRoute, Outlet } from '@tanstack/react-router'
// import Header from '../components/header';
import '../index.css';

// eslint-disable-next-line react-refresh/only-export-components
const RootLayout = () => (
  <>
    {/* <Header /> */}
    <main className="mx-auto min-h-[calc(100vh-77px)] max-w-6xl px-6 py-14">
      <Outlet />
    </main>
  </>
)

export const Route = createRootRoute({ component: RootLayout })