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
    paddingLeft: 20,
    paddingRight: 20,
  },
})

// Create Document Component
export const CadastralFeesAreaPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={{ fontSize: 12 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '50%' }}>
            <Text>The Director Lands</Text>
            <Text>Kano State Bureau for Land Management</Text>
            <Text>Kano</Text>
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
              <Text>Re CAD</Text>
              <Text>Cadastral Department</Text>
              <Text>P.M.B 3.83, Kano</Text>
              <Text>Date:</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ textAlign: 'center', marginTop: 10, fontSize: 13 }}>
        <Text style={{ textDecoration: 'underline' }}>
          Right of Occupancy No
        </Text>
        <Text style={{ marginTop: 5 }}>Cadastral Fees and Areas</Text>
      </View>
      <View style={{display:'flex', flexDirection:'row', border:'1px solid black'}}>
        <View style={{width:'60%'}}></View>
        <View style={{width:'20%'}}></View>
        <View style={{width:'20%'}}></View>
      </View>
    </Page>
  </Document>
)
