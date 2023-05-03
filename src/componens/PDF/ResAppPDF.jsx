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
    color: 'red',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

// Create Document Component
export const ResAppPDF = ({form={}}) => (
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
          MINISTRY OF LAND AND PHYSICAL PLANNING, KANO STATE
        </Text>
      </View>
      {/* ////////////////////////////////////////////// */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            border: '1px solid red',
            borderRadius: 5,
            padding: 5,
            fontSize: 9,
            width: 120,
          }}
        >
          <Text>Code: 'LAND 1'</Text>
          <Text>SERIAL No: 1212</Text>
        </View>
        <View
          style={{
            border: '1px solid red',
            borderRadius: 5,
            padding: 5,
            fontSize: 9,
            width: 120,
          }}
        >
          <Text>NO 2, Dr. Bala Mohd. Road</Text>
          <Text>P.M.B. 3083, Kano State</Text>
        </View>
      </View>
      {/* ////////////////////////////////////////////// */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 2,
        }}
      >
        <View
          style={{
            border: '1px solid red',
            borderRadius: 5,
            padding: '30px 5px',
            textAlign: 'center',
            fontSize: 9,
            width: 120,
          }}
        >
          <Text>Affix 3 recent</Text>
          <Text>Passport photographs</Text>
        </View>
      </View>
      {/* ////////////////////////////////////////////// */}
      <View>
        <Text style={{ fontSize: 15 }}>The Honourable Commissioner,</Text>
      </View>
      <View
        style={{
          border: '1px solid red',
          textAlign: 'center',
          padding: 10,
          marginTop: 5,
        }}
      >
        <Text style={{ fontSize: 15, margin: '0 60px' }}>
          APPLICATION FOR STATUTORY RIGHT OF OCCUPANCY RESIDENTIAL LAND
        </Text>
      </View>
      {/* ////////////////////////////////////////////// */}
      <View
        style={{
          border: '1px solid red',
          padding: 10,
          marginTop: 20,
          fontSize: 12,
        }}
      >
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
            <Text>Applicant's Full Name:{form.Applicant_full_name}</Text>
            <View
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
              }}
            >
              <Text>(a) Age:{form.age}</Text>
              <Text>(b) Sex:{form.sex}</Text>
              <Text>(c) Marital Status:{form.marital_stataus}</Text>
            </View>
            <Text style={{ marginTop: 10 }}>
              (d) If married woman, give name and address of your husband
            </Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>2. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Residential Address (P.O. Box must be given):{form.residential}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>3. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Correspondence Address:{form.correspondance_address}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>4. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Business Address if different from 3 above:</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>5. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Nationality (Indicate if naturalized):{form.Applicant_nationality}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>6. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Occupation:</Text>
            <Text style={{ marginTop: 20 }}>(a) Annual Income:{form.Annual_income}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>7. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Have you been allocated any Residential plot before:{form.Allocated_before}</Text>
            <View
              style={{ marginTop: 20, display: 'flex', flexDirection: 'row' }}
            >
              <View style={{ width: '30%' }}>
                <Text>If yes state: {form.State_of_origin}</Text>
              </View>
              <View style={{ width: '70%' }}>
                <View
                  style={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <View style={{ width: '10%' }}>
                    <Text>(1)</Text>
                  </View>
                  <View
                    style={{
                      width: '90%',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 20,
                    }}
                  >
                    <Text>a. Plot No:{form.plot_no} </Text>
                    <Text>b. Location:{form.location} </Text>
                    <Text>b. Cert. of Occupancy No:{form.cert_of_occupany_no} </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <View style={{ width: '10%' }}>
                    <Text>(2)</Text>
                  </View>
                  <View
                    style={{
                      width: '90%',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 20,
                    }}
                  >
                    <Text>a. Plot No: </Text>
                    <Text>b. Location: </Text>
                    <Text>b. Cert. of Occupancy No: </Text>
                  </View>
                </View>{' '}
                <View
                  style={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <View style={{ width: '10%' }}>
                    <Text>(3)</Text>
                  </View>
                  <View
                    style={{
                      width: '90%',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 20,
                    }}
                  >
                    <Text>a. Plot No: </Text>
                    <Text>b. Location: </Text>
                    <Text>b. Cert. of Occupancy No: </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          border: '1px solid red',
          padding: 10,
          marginTop: 20,
          fontSize: 12,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 5,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>8. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Propose value of buildings to be erected:{form.type_of_building_erected}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>9. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Application's source of financing the buildings:{form.source_financing}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>10. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              Type of plot/piece of land applied for: (a) Low density;
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>11. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Length of time required:{form.length_of_term_required}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>12. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Name and address of local representative:{form.address_of_local_rep}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>13. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Do you own a house?</Text>
            <Text>(a) Location:</Text>
            <Text>(b) Type of building:</Text>
          </View>
        </View>
      </View>
      {/* ////////////////////////////////////////////// */}
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ width: '5%' }}></View>
        <View style={{ width: '90%' }}>
          <View
            style={{
              border: '1px solid red',
              padding: 10,
              width: '100%',
              marginTop: 5,
              fontSize: 12,
            }}
          >
            <Text>NOTE:</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                marginTop: 20,
              }}
            >
              <View style={{ width: '5%' }}>
                <Text>1. </Text>
              </View>
              <View style={{ width: '95%' }}>
                <Text>
                  The application form is to be completed in triplicate and must
                  be accompanied with
                </Text>
                <Text style={{ marginTop: 10 }}>
                  (a) Application fee of 500.00
                </Text>
                <Text style={{ marginTop: 10 }}>
                  (b) Non-refundable application fee of
                </Text>
                <Text>5,000.00 - Low Density;</Text>
                <Text>3,000.00 - Medium Density;</Text>
                <Text>2,000.00 - High Density;</Text>
                <Text>1,000.00 - Ver High Density;</Text>
                <Text style={{ marginTop: 10 }}>
                  (c) Three copies of most recent passport photograph
                </Text>
                <Text style={{ marginTop: 10 }}>
                  (d) Copy of Birth Certificate or Declaration of Age
                </Text>
                <Text style={{ marginTop: 10 }}>
                  (e) Three years tax clearance
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                marginTop: 20,
              }}
            >
              <View style={{ width: '5%' }}>
                <Text>2. </Text>
              </View>
              <View style={{ width: '95%' }}>
                <Text>
                  Preferences will be given to applicants who have not been
                  allocated plots before.
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                marginTop: 20,
              }}
            >
              <View style={{ width: '5%' }}>
                <Text>3. </Text>
              </View>
              <View style={{ width: '95%' }}>
                <Text>
                  Any Application based on false information is liable to
                  rejection, and pass prosecution of the applicant.
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                marginTop: 20,
              }}
            >
              <View style={{ width: '5%' }}>
                <Text>4. </Text>
              </View>
              <View style={{ width: '95%' }}>
                <Text>The Applicant may be invited for interview.</Text>
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                marginTop: 30,
                flexDirection: 'row',
              }}
            >
              <View style={{ width: '50%' }}>
                <Text>Dated:{form.application_date}</Text>
              </View>
              <View style={{ width: '50%' }}>
                <Text>Signature of applicant:_______________</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: '5%' }}></View>
      </View>
    </Page>
  </Document>
)
