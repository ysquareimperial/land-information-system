import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import {RequestForSurveyReport} from './RequestForSurveyReport'
export default function RequestForSurveyReportView({form={}}) {
  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <RequestForSurveyReport form={form} />
      </PDFViewer>
      <PDFDownloadLink
        document={<RequestForSurveyReport />}
        fileName="RequestForSurveyReport"
      >
        {({ loading }) =>
          loading ? (
            <button style={{ marginRight: 0 }} className="app_btn">
              Loading Document...
            </button>
          ) : (
            <button className="app_btn" style={{ marginRight: 0 }}>
              {' '}
              Download PDF
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  )
}
