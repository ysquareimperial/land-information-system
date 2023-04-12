import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import Neww from '../componens/Neww'
import Bbb from '../componens/Bbb'
import Landing from '../componens/Landing'
import Dashboard from '../componens/Dashboard'

function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <Landing />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <AppIndex /> },
        {
            path: '/dashboard',
            element: <Dashboard />,
          },
        {
          path: '/new',
          element: <Neww />,
        },
        {
          path: '/bbb',
          element: <Bbb />,
        },
      ],
    },
  ])
  return element
}
export default AppNavigation
