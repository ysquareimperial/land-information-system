import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer'
import coat from '../../images/pngwing.com.png'
// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 30,
    color: '#008140',
    paddingLeft: 30,
    paddingRight: 30,
  },
})

// Create Document Component
export const RequestForSurveyReport = ({form={}}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ width: '33.3%' }}></View>
        <View style={{ width: '33.3%' }}>
          <View
            style={{
              width: '100%',
            }}
          >
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View>
                <Image src={coat} style={{ width: 100 }} />
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: '33.3%' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Text style={{ fontSize: 10, marginTop: 30 }}>CODE LAND 12</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Text style={{ fontSize: 10, marginTop: 30 }}>SERIAL NO: </Text>
          </View>
        </View>
      </View>
      <View style={{ textAlign: 'center' }}>
        <Text style={{}}>KANO STATE BUREAU FOR LAND MANAGEMENT</Text>
        <Text style={{}}>OFFICE OF THE EXECUTIVE GOVERNOR</Text>
        <Text style={{}}>P.M.B. 3083, KANO STATE.</Text>
      </View>
      <View style={{ fontSize: 14 }}>
        <Text style={{ textDecoration: 'underline', marginTop: 20 }}>
          DIRECTOR-CADASTRAL
        </Text>
        <Text
          style={{
            textAlign: 'center',
            textDecoration: 'underline',
            marginTop: 20,
          }}
        >
          REQUEST FOR SURVEY REPORT
        </Text>
      </View>
      <View style={{ marginTop: 20, fontSize: 12 }}>
        <Text>Please find enclosed herewith the following:</Text>
        <Text style={{ marginLeft: 15 }}>a) Completed application forms</Text>
        <Text style={{ marginLeft: 15 }}>b) Four Copies of Site-Plan and</Text>
        <Text style={{ marginLeft: 15 }}>c) Local Government Confirmation</Text>
        <Text>
          You are to record the application and prepare survey/cadastral report
          in due course
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          fontSize: 12,
          marginTop: 20,
        }}
      >
        <View style={{ width: '50%' }}>
          <Text>Date:{form&&form?.date}</Text>
        </View>
        <View style={{ width: '50%' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <View>
              <Text>Name:__________________________________</Text>
              <Text style={{ marginTop: 15 }}>
                Rank:___________________________________
              </Text>
              <Text style={{ marginTop: 15 }}>
                Sign:___________________________________
              </Text>
              <Text style={{ marginTop: 10 }}>For: Director Land</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ fontSize: 12, marginTop: 20 }}>
        <Text style={{ fontStyle: 'italic', textDecoration: 'underline' }}>
          PERMANENT SECRETARY
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 10 }}>
          The above application has been allocated Right of Occupancy No:
          {form&&form?.file_no}
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 25 }}>Item G. No.</Text>
        <Text style={{ marginTop: 10, marginLeft: 10 }}>
          1. The ground is open and application is completed satisfactory with
          regards to survey requirements.
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 10 }}>
          2. I have to report that:-
        </Text>
        <Text style={{ marginLeft: 30 }}>
          a. The correct description of the plot is: {form&&form?.plots_numbers} Based an approved
          {form&&form?.plots_numbers}/{form&&form?.plan_number} at {form&&form?.location} in Kumbotso
        </Text>
        <Text style={{ marginLeft: 30 }}>b. Survey will be necessary: Yes</Text>
        <Text style={{ marginLeft: 30 }}>
          c. The application is required to confirm/note that the plot is
          determined by the following property beacons number: {form&&form?.beacon_numbers}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          fontSize: 12,
          marginTop: 20,
        }}
      >
        <View style={{ width: '50%' }}>
          <Text style={{ marginTop: 15 }}>Date:</Text>
          <Text style={{ marginTop: 15 }}>Deleted as appropriate</Text>
          <Text style={{ marginTop: 30 }}>Date:</Text>
        </View>
        <View style={{ width: '50%' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <View>
              <Text>__________________________________</Text>
              <Text>For: Director Cadastral</Text>
              <Text style={{ marginTop: 15 }}>First/Amended/Final/Report</Text>
              <Text style={{ marginTop: 30 }}>
                __________________________________
              </Text>
              <Text>For: Executive Governor</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
