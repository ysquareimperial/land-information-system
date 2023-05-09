import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { ResAppPDF } from './ResAppPDF'
export default function ResAppPDFView({ form = {} }) {
  return (
    <div>
      {/* {JSON.stringify(form.type)} */}
      <PDFDownloadLink
        style={{ float: 'left' }}
        document={<ResAppPDF />}
        fileName="Residential_Application_PDF_Doc"
      >
        {({ loading }) =>
          loading ? (
            <button style={{ marginRight: 0 }} className="app_btn mb-2">
              Loading Document...
            </button>
          ) : (
            <button className="app_btn mb-2" style={{ marginRight: 0 }}>
              {' '}
              Download PDF
            </button>
          )
        }
      </PDFDownloadLink>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <ResAppPDF form={form} />
      </PDFViewer>
    </div>
  )
}
