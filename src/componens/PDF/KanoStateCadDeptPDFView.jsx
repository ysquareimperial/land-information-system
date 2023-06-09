import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { ResAppPDF } from './ResAppPDF'
import { KanoStateCadDeptPDF } from './KanoStateCadDeptPDF'
export default function KanoStateCadDeptPDFView({pdf={}}) {
  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <KanoStateCadDeptPDF pdf={pdf} />
      </PDFViewer>
      <PDFDownloadLink
        document={<KanoStateCadDeptPDF />}
        fileName="KanoStateCadDeptPDF"
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
