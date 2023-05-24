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
    fontSize: 11,
    paddingBottom: 30,
    paddingLeft: 20,
    backgroundColor: '#9BC7EC',
    color: 'blue',
    paddingRight: 20,
  },
})

// Create Document Component
export const CertificateOfOccupancyPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={{ fontSize: 11 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '50%' }}>
            <Text style={{ marginTop: 80 }}>To: </Text>
            <Text style={{ marginTop: 10 }}>Sir/Gentleman/Madam</Text>
          </View>
          <View
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <View>
              <Text>Ref No LKN. FAS/FF/22</Text>
              <Text style={{ marginTop: 5 }}>
                Kano State Bureau of Land Management
              </Text>
              <Text style={{ marginTop: 5 }}>
                Office of the Executive Governor
              </Text>
              <Text style={{ marginTop: 5 }}>P.M.B 3083, Kano</Text>
              <Text style={{ marginTop: 5 }}>Date:</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ textAlign: 'center', marginTop: 20, fontSize: 13 }}>
        <Text style={{ textDecoration: 'underline' }}>
          CERTIFICATE OF OCCUPANCY RENT
        </Text>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>Number</Text>
        <Text style={{ marginTop: 5 }}>Date of Issue</Text>
        <Text style={{ marginTop: 5 }}>Date of Expiry</Text>
        <Text style={{ marginTop: 5 }}>Rent Per Annum</Text>
        <Text style={{ marginTop: 5 }}>Location/Station</Text>
        <Text style={{ marginTop: 5 }}>District</Text>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>
          The rent and fees payable are made as follows:-
        </Text>
        <Text style={{ marginTop: 5 }}>
          Rent from: <Text>22 Aug 2022</Text> To <Text>22 Aug 2030</Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          N: <Text>10000</Text> Per Annum N <Text>32323 </Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          Registration Fees: <Text>10000</Text> N<Text>32323 </Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          Survey Fees: <Text>10000</Text> N<Text>32323 </Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          Preparation Fees: <Text>10000</Text> N<Text>32323 </Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          Compensation Fees: <Text>10000</Text> N<Text>32323 </Text>
        </Text>
        <Text style={{ marginTop: 5 }}>
          Development Charges: <Text>10000</Text> N<Text>32323 </Text>
        </Text>
      </View>
    </Page>
  </Document>
)
