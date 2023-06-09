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
export const RecForGrOfStatRightOfOccup = ({ form = {} }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* /////////////////////////////////////////////// */}
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
            <Text style={{ fontSize: 10, marginTop: 30 }}>CODE LAND II</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Text style={{ fontSize: 10, marginTop: 30 }}>SERIAL: </Text>
          </View>
        </View>
      </View>
      {/* ////////////////////////////////////////// */}
      <View
        style={{
          backgroundColor: 'black',
          padding: '10px',
          color: 'white',
          borderRadius: 15,
          fontWeight: 700,
          //   margin:'0 50px',
          width: '100%',
        }}
      >
        <Text style={{ textAlign: 'center', margin: '0 50px' }}>
          RECOMMENDATION FOR GRANT OF STATUTORY RIGHT OF OCCUPANCY
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 5 }}>
          CONDITIONS FOR APPLICATION
        </Text>
      </View>
      <View style={{ marginTop: 10, fontSize: 12 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>1. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              Name of Applicant:
              <Text style={{ textDecoration: 'underline' }}>{form?.name}</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>2. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <Text>
                (a) File Ref. No:{' '}
                <Text style={{ textDecoration: 'underline' }}>
                  {form?.application_file_number}
                </Text>
              </Text>
              <Text>
                (b) Purpose of Clause:{' '}
                <Text style={{ textDecoration: 'underline' }}>
                  {form?.type}
                </Text>
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                marginTop: 5,
              }}
            >
              <Text>
                (c) Location:{' '}
                <Text style={{ textDecoration: 'underline' }}>
                  {form?.location}
                </Text>
              </Text>
              <Text>
                (d) Plot No:{' '}
                <Text style={{ textDecoration: 'underline' }}>
                  {form?.plot_no}
                </Text>
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                marginTop: 5,
              }}
            >
              <Text>
                (e) Layout Plan No:{' '}
                <Text style={{ textDecoration: 'underline' }}>
                  {form?.plan_no}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>3. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              Term:{' '}
              <Text style={{ textDecoration: 'underline' }}>{form?.term}</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>4. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              Value of Purposed Development N:
              <Text style={{ textDecoration: 'underline' }}>
                {form?.value_of_proposed_development}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>5. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              Time for Competition of Proposed Development: within{' '}
              <Text style={{ textDecoration: 'underline' }}>
                {form?.time_of_completion}
              </Text>{' '}
              years
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>6. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              Annual Ground Rent:{' '}
              <Text style={{ textDecoration: 'underline' }}>
                {form?.annual_ground_rent}
              </Text>{' '}
              p.h.p.a
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>7. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              Development Charge (If any):{' '}
              <Text>
                {form?.development_charges === ''
                  ? 'To Follow'
                  : form?.development_charges}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>8. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              Survey and Processing Charges:{' '}
              <Text style={{ textDecoration: 'underline' }}>
                {form?.survey_charges}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>9. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              The Director of Land recommends/does not recommend the application
              for the following reasons:{' '}
              <Text style={{ textDecoration: 'underline' }}>
                {form?.recommendation_dland}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            marginTop: 30,
            flexDirection: 'row',
          }}
        >
          <View style={{ width: '90%' }}>
            <Text>Sign:___________________________________</Text>
            <Text style={{ marginLeft: 100 }}>Director Land</Text>
          </View>
          <View style={{ width: '30%' }}>
            <Text>
              Date:
              <Text style={{ textDecoration: 'underline' }}>
                {form?.dland_sign_date}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 30,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>10. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              {' '}
              I recommend/do not recommend the application for Grant over Plot
              No:{' '}
              <Text style={{ textDecoration: 'underline' }}>
                {form?.plot_no}
              </Text>{' '}
              Plan No:{' '}
              <Text style={{ textDecoration: 'underline' }}>
                {form?.plan_no}
              </Text>{' '}
              Location:{' '}
              <Text style={{ textDecoration: 'underline' }}>
                {form?.location}
              </Text>
            </Text>
            <Text style={{ marginTop: 10 }}>
              <Text style={{ textDecoration: 'underline' }}>
                {form?.recommendation_permsec}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            marginTop: 20,
            flexDirection: 'row',
          }}
        >
          <View style={{ width: '90%' }}>
            <Text>Sign:___________________________________</Text>
            <Text style={{ marginLeft: 100 }}>Permanent Secretary</Text>
          </View>
          <View style={{ width: '30%' }}>
            <Text>
              Date:
              <Text style={{ textDecoration: 'underline' }}>
                {form?.persec_sign_date}
              </Text>
            </Text>
          </View>
        </View>
        <Text style={{ marginTop: 20 }}>
          -----------------------------------------------------------------------------------------------------------------------------------------
        </Text>
        <View
          style={{
            display: 'flex',
            marginTop: 20,
            flexDirection: 'row',
          }}
        >
          <View style={{ width: '90%' }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <View style={{ width: '10%' }}>
                <Text>11. </Text>
              </View>
              <View style={{ width: '90%' }}>
                <Text>APPROVAL BY HON. COMMISSIONER</Text>
                <Text style={{ marginTop: 10 }}>
                  The Grant of Occupancy is hereby
                </Text>
                <Text style={{ marginTop: 10 }}>APPROVED</Text>
              </View>
            </View>
          </View>
          <View style={{ width: '30%' }}>
            <Text>____________________</Text>
            <Text style={{ fontSize: 10, textAlign: 'center' }}>
              Hon. Commissioner
            </Text>
            <Text style={{ marginTop: 30 }}>
              Date:
              <Text style={{ textDecoration: 'underline' }}>
                {form?.comm_gov_signature_date}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
