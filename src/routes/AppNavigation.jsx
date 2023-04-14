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
import LetterOfGrant from '../componens/LetterOfGrant'
import Extension from '../componens/Extension'
import ReGrant from '../componens/ReGrant'
import Conversion from '../componens/Conversion'
import Application_Table from '../componens/Application_Table'
import FinanceTable from '../componens/FinanceTable'
import FinanceForm from '../componens/FinanceFOrm'
import LayoutPolicies from '../componens/LayoutPolicies'
import ApplicationForConseent from '../componens/ApplicationForConseent'
import ReGrantForm from '../componens/ReGrantForm'
import ConversionForm from '../componens/ConversionForm'
import RecommendationLetterList from '../componens/RecommendationLetterList'
import ListTable from '../componens/ListTable'
import ExtensionForm from '../componens/ExtensionForm'
import Apps from '../componens/Apps'

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
          path: '/required-docs',
          element: <Require_documents />,
        },
        {
          path: '/list-docs',
          element: <List_doc />,
        },
        {
          path: '/recommendation-letter',
          element: <RecommendationLetter />,
        },
        {
          path: '/letter-of-grant',
          element: <LetterOfGrant />,
        },
        {
          path: '/application-form',
          element: <Application_form />,
        },
        {
          path: '/extension',
          element: <Extension />,
        },
        {
          path: '/extension-form',
          element: <ExtensionForm />,
        },
        {
          path: '/conversion',
          element: <Conversion />,
        },

        {
          path: '/re-grant-list',
          element: <ReGrant />,
        },
        {
          path: '/re-grant-form',
          element: <ReGrantForm />,
        },
        {
          path: '/application-table',
          element: <Application_Table />,
        },
        {
          path: '/finance',
          element: <FinanceTable />,
        },
        {
          path: '/finance-form',
          element: <FinanceForm />,
        },
        {
          path: '/layoutl-policies',
          element: <LayoutPolicies />,
        },
        {
          path: '/executive-govermor',
          element: <ApplicationForConseent />,
        },
        {
          path: '/conversion-form',
          element: <ConversionForm />,
        },
        {
          path: '/recommendation-letter-list',
          element: <RecommendationLetterList />,
        },
        {
          path: '/list-table',
          element: <ListTable />,
        },
        {
          path:'/application-step',
          element:<Apps />
        }
      ],
    },
  ])
  return element
}
export default AppNavigation
