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
    color: 'blue',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

// Create Document Component
export const KanoStateCadDeptPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
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
      {/* ////////////////////////////////////////////// */}
      <View>
        <Text style={{ textAlign: 'center', marginLeft: 60, marginRight: 60 }}>
          KANO STATE CADASTRAL DEPARTMENT
        </Text>
        <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 12 }}>
          Report on Application for:
        </Text>
      </View>
      <View style={{ fontSize: 12 }}>
        <Text style={{ marginTop: 10 }}>Right of Occupancy No. LKN: </Text>
        <Text style={{ marginTop: 10 }}>Government item No. GKN: SIT/</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '80%' }}>
            <Text style={{ marginTop: 10 }}>
              1. Is the Applicant Plan sufficient to identify the plot.
            </Text>
          </View>
          <View style={{ width: '20%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>YES</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>NO</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '80%' }}>
            <Text style={{ marginTop: 10 }}>
              2. Is the ground open? CORRECTLY:
            </Text>
          </View>
          <View style={{ width: '20%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>YES</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>NO</Text>
              </View>
            </View>
          </View>
        </View>
        <Text>If No what title of application lie of the same land?</Text>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '80%' }}>
            <Text style={{ marginTop: 10 }}>
              3. Is the plot COMPLETELY beaconed?:
            </Text>
          </View>
          <View style={{ width: '20%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>YES</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>NO</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '80%' }}>
            <Text style={{ marginTop: 10 }}>4. If YES see</Text>
          </View>
          <View style={{ width: '20%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>YES</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>NO</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={{ marginLeft: 20 }}>(a) Tracking No:</Text>
        <Text style={{ marginLeft: 20 }}>(b) Deposition Pan No:</Text>
        <Text style={{ marginTop: 10 }}>IF NO:</Text>
        <Text style={{ marginLeft: 20 }}>
          (a) It lies on unapproved town plan No.
        </Text>
        <Text style={{ marginLeft: 20 }}>(b) It lies on Lay-out No.</Text>
        <Text style={{ marginLeft: 20 }}>(c) Separate survey is required</Text>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '80%' }}>
            <Text style={{ marginTop: 10 }}>
              5. Does it lies on an area covered by town plan
            </Text>
          </View>
          <View style={{ width: '20%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>YES</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>NO</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={{ marginTop: 10 }}>IF YES:</Text>
        <Text style={{ marginLeft: 20 }}>(a) Town plan No:</Text>
        <Text style={{ marginLeft: 20 }}>
          (b) Does the shape of the plot agree with the Town plan?
        </Text>
        <Text style={{ marginLeft: 20 }}>
          (c) The Application is for a Residential Plot
        </Text>
        <Text style={{ marginLeft: 20 }}>
          (d) They are shown on the Town plan for the purpose applied
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '80%' }}>
            <Text style={{ marginTop: 10 }}>
              6. Has the plot been previously hold or applied for under
              statutory title?
            </Text>
          </View>
          <View style={{ width: '20%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>YES</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>NO</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={{ marginTop: 10 }}>IF YES, details:</Text>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '80%' }}>
            <Text style={{ marginTop: 10 }}>
              7. Does a Railway/Sidind run alongside/through the plot?
            </Text>
          </View>
          <View style={{ width: '20%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>YES</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>NO</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '80%' }}>
            <Text style={{ marginTop: 10 }}>
              8. Is the plot alongside a Federal/State Truck Road?
            </Text>
          </View>
          <View style={{ width: '20%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>YES</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>NO</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '80%' }}>
            <Text style={{ marginTop: 10 }}>
              9. Area applied for: (0.0162hq acres) hectares (1 Hectares = 2.47
              Acres)
            </Text>
          </View>
          <View style={{ width: '20%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>YES</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <View style={{ border: '1px solid blue', padding: 5 }}></View>
              <View>
                <Text>NO</Text>
              </View>
            </View>
          </View>
        </View>
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
              <Text style={{ marginTop: 20 }}>
                __________________________________
              </Text>
              <Text style={{marginLeft:60}}>For: Director Cadastral</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
