import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer, Page, Text, View ,Document} from '@react-pdf/renderer'
import { ResAppPDF } from './ResAppPDF'
import moment from 'moment';
export default function ResAppPDFView({ form = {} }) {
  const styles = {
    page: {}, // Define your styles here
    middleHeader: {},
    topRightHeader: {},
    topLeftHeader: {},
    middleHeader1: {},
    body1: {},
    lineHead: {}
  };
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
      <PDFViewer height="1000" width="1000">
      <Document>
        {[form].map((item) => (
          <Page size="A4" style={styles.page} key={item.id}>
                 <View style={{ textAlign: "right" }}>
                <Text>TKS 131</Text>
              </View>

              <View style={styles.middleHeader}>
                <Text>OFFICE OF THE ACCOUNTANT GENERAL </Text>
                <Text style={{ marginTop: 5 }}> MINISTRY OF FINANCE</Text>
                <Text style={{ marginTop: 5 }}> KANO STATE</Text>
              </View>

              <View style={styles.topRightHeader}>
                <View></View>

                <View
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  <Text>{item.treasury_source_account}</Text>
                </View>
              </View>

              <View style={styles.topLeftHeader}>
                <View>
                  <Text
                    style={{
                      textDecoration: "underline",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {item.mda_name}
                  </Text>
                  <Text>____</Text>
                  <Text>____</Text>
                </View>

                <View>
                  <Text>Date: {moment(item.date).format("DD/MM/YYYY")}</Text>
                </View>
              </View>

              <View style={styles.middleHeader1}>
                <Text>CASH REMITTANCE SLIP </Text>
                <Text style={{ marginVertical: 10 }}>
                  Month of Account {moment(item.date).format("MMMM, YYYY")}
                </Text>
              </View>

              <View style={styles.body1}>
                <Text>
                  Please note that an instruction has been sent to your Bank
                  through {item.mda_bank_name} Lagos Street / Bank Road, Kano to
                  credit your Account No: {item.mda_account_no} with the sum of{" "}
                  {/* {`N${parseFloat(item.amount).toLocaleString("en")}`} */}
                </Text>
              </View>

              <View>
                {/* {mdaDetails
                  .filter((itf) => itf.mda_name === item.mda_name)
                  .map((itk, idx) => (
                    <>
                      <Text style={{ fontSize: 14 }}>
                        {idx + 1}.{itk.narration}
                        {`N${parseFloat(itk.amount).toLocaleString("en")}`}
                      </Text>
                      <Text style={styles.lineHead}>
                        Code: __
                      </Text>
                    </>
                  ))} */}
              </View>

              <View>
                <Text style={{ fontSize: 14, marginVertical: 15 }}>
                  Let us have your official reciept as early as possible
                </Text>
              </View>

              <Text>__</Text>

              <View style={{ display: "flex", justifyContent: "between" }}>
                <Text style={{ fontSize: 13, marginTop: 15 }}>
                  For Accountant General
                </Text>
                <Text style={{ fontSize: 13, marginTop: 10 }}>Kano State</Text>
              </View> 
          </Page>
        ))}
      </Document>
    </PDFViewer>
    </div>
  )
}
