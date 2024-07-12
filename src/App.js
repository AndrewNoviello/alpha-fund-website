import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Recruitment from './pages/Recruitment';
import Alumni from './pages/Alumni';
import Team from './pages/Team';
import TeamMemberPage from './pages/TeamMember';
import Home from './pages/Home';

const Layout = () => (
  <>
    <Header />
    <Outlet />
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
      { path: '/team/:id', element: <TeamMemberPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;