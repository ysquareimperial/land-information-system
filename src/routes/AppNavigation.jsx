import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import Neww from "../componens/Neww";
import Bbb from "../componens/Bbb";
import Landing from "../componens/Landing";
import Dashboard from "../componens/Dashboard";
import RecommendationLetter from "../componens/RecommendationLetter";
import Require_documents from "../componens/Require_documents";
import List_doc from "../componens/List_doc";
import Application_form from "../componens/Application_form";
import LetterOfGrant from "../componens/LetterOfGrant";
import Extension from "../componens/Extension";
import ReGrant from "../componens/ReGrant";
import Conversion from "../componens/Conversion";
import Application_Table from "../componens/Application_Table";
import FinanceTable from "../componens/FinanceTable";
import FinanceForm from "../componens/FinanceFOrm";
import LayoutPolicies from "../componens/LayoutPolicies";
import ApplicationForConseent from "../componens/ApplicationForConseent";
import ApplicationForConseentTable from "../componens/ApplicationForConseentTable";
//
import LayoutPoliciesTable from "../componens/LayoutPoliciesTable";
import ExtensionForm from "../componens/ExtensionForm";

import ReGrantForm from "../componens/ReGrantForm";
import ConversionForm from "../componens/ConversionForm";
import RecommendationLetterList from "../componens/RecommendationLetterList";
import ListTable from "../componens/ListTable";
// import ExtensionForm from '../componens/ExtensionForm'

import Apps from '../componens/Apps'
import GeneratFile from '../componens/GenerateFile'
import ViewFile from '../componens/ViewFile'
import CadestralRecom from '../componens/CadestralRecom'
import GrantTable from '../componens/GrantTable'
import LetterGrantTable from '../componens/LetterGrantTable'
import SurveyReport from '../componens/SurveyReport'
import YesOrNo from '../componens/YesOrNo'
import Reschedule from '../componens/Reschedule'
import Shedule_table from '../componens/ScheduleTable'
import PaymentTable from '../componens/PaymentTab'
import ApplicationLetter from '../componens/ApplicationLetter'
import ValuationReport from '../componens/ValuationReport'
import ForInformation from "../componens/ForInformation";
import ForInformationTable from "../componens/ForInformationTable";
import RequestForSurveyReport from "../componens/RequestForSurveyReport";
import CertificateOfOccupancyRentTable from "../componens/CertificateOfOccupancyRentTable";
import CertificateOfOccupancyRent from "../componens/CertificateOfOccupancyRent";
import ApplicationForConsesntTo from "../componens/ApplicationForConsesntTo";


function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <AppIndex /> },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/required-docs",
          element: <Require_documents />,
        },
        {
          path: "/list-docs",
          element: <List_doc />,
        },
        {
          path: "/recommendation-letter",
          element: <RecommendationLetter />,
        },
        {
          path: "/letter-of-grant",
          element: <LetterOfGrant />,
        },
        {
          path: "/application-form",
          element: <Application_form />,
        },
        {
          path: "/extension",
          element: <Extension />,
        },
        {
          path: "/extension-form",
          element: <ExtensionForm />,
        },
        {
          path: "/conversion",
          element: <Conversion />,
        },

        {
          path: "/re-grant-list",
          element: <ReGrant />,
        },
        {
          path: "/re-grant-form",
          element: <ReGrantForm />,
        },
        {
          path: "/application-table",
          element: <Application_Table />,
        },
        {
          path: "/finance",
          element: <FinanceTable />,
        },
        {
          path: "/finance-form",
          element: <FinanceForm />,
        },
        {
          path: "/layoutl-policies",
          element: <LayoutPolicies />,
        },
        {
          path: "/executive-govermor",
          element: <ApplicationForConseent />,
        },
        {
          path: "/executive-govermor-table",
          element: <ApplicationForConseentTable />,
        },
        {
          path: "/conversion-form",
          element: <ConversionForm />,
        },
        {
          path: "/recommendation-letter-list",
          element: <RecommendationLetterList />,
        },
        {
          path: "/list-table",
          element: <ListTable />,
        },

        {
          path: "/list-table",
          element: <ListTable />,
        },
      {
        path:'/generate',
        element:<GeneratFile />
      },{
        path:'/view-generate',
        element:<ViewFile />
      },{
        path:'/cadestral-recom',
        element:<CadestralRecom />
      },{
        path:'/grant-table',
        element:<GrantTable />
      },{
        path:'/finaces-grant',
        element:<LetterGrantTable />
      },
      {
        path:'/SurveyReport',
        element:<SurveyReport />
      },
      {
        path:'/survey-table',
        element:<GrantTable />
      },
      {
        path:'/yes',
        element:<YesOrNo />

      },{
        path:'/schedule-payment',
        element:<Reschedule />
      },{
        path:'/shedule-table',
        element:<Shedule_table />
      },
      {
        path:'/payment-table',
        element:<PaymentTable />
      },
      {
        path:'/application-letter',
        element:<ApplicationLetter />
      },{
        path:'/ValuationReport',
        element:<ValuationReport />
      },  {
          path: "/application-step",
          element: <Apps />,
        },
        {
          path: "/generate",
          element: <GeneratFile />,
        },
        {
          path: "/view-generate",
          element: <ViewFile />,
        },
        {
          path: "/cadestral-recom",
          element: <CadestralRecom />,
        },
        {
          path: "/grant-table",
          element: <GrantTable />,
        },
        {
          path: "/for-information",
          element: <ForInformation />,
        },
        {
          path: "/for-information-table",
          element: <ForInformationTable />,
        },
        {
          path: "/request-for-survey-report",
          element: <RequestForSurveyReport />,
        },
        {
          path: "/certificate-of-occupancy-rent-table",
          element: <CertificateOfOccupancyRentTable />,
        },
        {
          path: "/certificate-of-occupancy-rent",
          element: <CertificateOfOccupancyRent />,
        },
        {
          path: "/application-for-consesnt-to",
          element: <ApplicationForConsesntTo />,
        },
      ],
    },
  ]);
  return element;
}
export default AppNavigation;
