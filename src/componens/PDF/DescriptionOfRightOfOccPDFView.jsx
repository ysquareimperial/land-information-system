import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { DescriptionOfRightOfOccPDF } from './DescriptionOnRightOfOccPDF'
export default function DescriptionOfRightOfOccPDFView() {
  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <DescriptionOfRightOfOccPDF/>
      </PDFViewer>
      <PDFDownloadLink
        document={<DescriptionOfRightOfOccPDF/>}
        fileName="DescriptionOfRightOfOccPDF"
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
