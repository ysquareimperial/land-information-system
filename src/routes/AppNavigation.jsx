import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import Neww from '../componens/Neww'
import Bbb from '../componens/Bbb'
import Landing from '../componens/Landing'
import Dashboard from '../componens/Dashboard'
import RecommendationLetter from '../componens/RecommendationLetter'
import Require_documents from '../componens/Require_documents'
import List_doc from '../componens/List_doc'
import Application_form from '../componens/Application_form'
import Application_Table from '../componens/Application_Table'

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
            path:"/required-docs",
            element:<Require_documents />
          },
          {
            path:'/list-docs',
            element:<List_doc />
          },
        {
          path: '/recommendation-letter',
          element: <RecommendationLetter />,
        },
        {
          path: '/application-form',
          element: <Application_form />,
        },
        {
          path: '/bbb',
          element: <Bbb />,
        },
        {
          path:"/application-table",
          element:<Application_Table />
        }
      ],
    },
  ])
  return element
}
export default AppNavigation
