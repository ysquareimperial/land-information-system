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
export const DescriptionOfRightOfOccPDF = () => (
  <Document>
    <Page size="" orientation="landscape" style={styles.page}>
      <View style={{ position: 'absolute', top: '50px', left: '250px' }}>
        <Image src={coat} style={{ width: 350, opacity: '0.3' }} />
      </View>
      <View style={{ textAlign: 'center' }}>
        <Text>KANO STATE BUREAU FOR LAND MANAGEMENT</Text>
        <Text style={{ fontSize: 10, marginTop: 5 }}>
          OFFICE OF THE EXECUTIVE GOVERNOR KANO STATE
        </Text>
        <Text style={{ fontSize: 15, marginTop: 5 }}>
          P.M.B. 3083, KANO STATE - NIGERIA
        </Text>
        <Text
          style={{ fontSize: 16, marginTop: 5, textDecoration: 'underline' }}
        >
          Description of Right of Occupancy<Text> No:</Text>
        </Text>
      </View>
      <View
        style={{ fontSize: 12, marginTop: 20, marginLeft: 40, marginRight: 40 }}
      >
        <Text>
          All that piece of land situated at: <Text>Dangwauro</Text> in the{' '}
          <Text></Text> district of the <Text>Kumbotso</Text> Administrative
          Area of Kano State consisting of <Text></Text> Hectares,
        </Text>
        <Text style={{ marginTop: 10 }}>
          the corners of which are marked in the ground by property Beacons No:{' '}
          <Text>KCF34,KCF434,KC4W4,KC43</Text> and the boundaries of which are
        </Text>
        <Text style={{ marginTop: 10 }}>
          delineated by a red verge line on the the attached copy of Drawing No:{' '}
          <Text></Text> Copied from plan. No: <Text></Text> Approved by an
          deposited in the office of 
          </Text>
        <Text style={{ marginTop: 10 }}>
          the Director Cadastral of Kano State and is
          more particularly described in the drawing as{' '}
          <Text>Plot 2214...</Text>
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          fontSize: 12,
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 40,
          marginRight: 40,
        }}
      >
        <View style={{ width: '50%' }}>
          <Text>Date:________________</Text>
          <Text style={{ marginLeft: 35, fontSize: 10 }}>Card 13</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '50%',
          }}
        >
          <View>
            <Text>Director Cadastral:________________</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
