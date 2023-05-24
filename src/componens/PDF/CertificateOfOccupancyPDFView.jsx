import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { CertificateOfOccupancyPDF } from './CertificateOfOccupancyPDF'
export default function CertificateOfOccupancyPDFView() {
  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <CertificateOfOccupancyPDF />
      </PDFViewer>
      <PDFDownloadLink
        document={<CertificateOfOccupancyPDF />}
        fileName="CertificateOfOccupancyPDF"
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
