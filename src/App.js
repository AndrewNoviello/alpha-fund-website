import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Recruitment from './components/Recruitment';
import Alumni from './components/Alumni';
import Team from './components/Team';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const Home = () => (
  <>
    <Hero />
    <About />
    <Contact />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/recruitment', element: <Recruitment /> },
      { path: '/alumni', element: <Alumni /> },
      { path: '/team', element: <Team /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;