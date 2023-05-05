import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { RecForGrOfStatRightOfOccup } from './RecForGrOfStatRightOfOccup'
export default function RecForGrOfStatRightOfOccupView({form={}}) {
  return (
    <div>
      {/* {JSON.stringify(form)} */}
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <RecForGrOfStatRightOfOccup form={form}/>
      </PDFViewer>
      <PDFDownloadLink
        document={<RecForGrOfStatRightOfOccup />}
        fileName="RecForGrOfStatRightOfOccup"
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
