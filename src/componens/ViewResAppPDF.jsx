import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { ResAppPDF } from './ResAppPDF'
export default function ViewResAppPDF() {
  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <ResAppPDF />
      </PDFViewer>
      <PDFDownloadLink
        document={<ResAppPDF />}
        fileName="Residential_Application_PDF_Doc"
      >
        {({ loading }) =>
          loading ? (
            <button style={{ marginRight: 0 }} className="app_btn">
              Loading Document...
            </button>
          ) : (
            <button className='app_btn' style={{ marginRight: 0 }}>
              {' '}
              Download PDF
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  )
}
