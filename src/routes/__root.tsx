import { Header } from '../components/header';
import '../index.css';

import { createRootRoute, Outlet } from '@tanstack/react-router'

// eslint-disable-next-line react-refresh/only-export-components
const RootLayout = () => (
  <main className='max-w-7xl m-auto p-4'>
    <Header />
    <Outlet />
  </main>
);

export const Route = createRootRoute({ component: RootLayout })