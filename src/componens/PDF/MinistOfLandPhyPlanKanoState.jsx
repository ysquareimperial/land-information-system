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
    backgroundColor: 'gold',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  page2: {
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

// Create Document Component
export const MinistOfLandPhyPlanKanoState = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={{ position: 'absolute', top: '250px', left: '120px' }}>
        <Image src={coat} style={{ width: 350, opacity: '0.3' }} />
      </View>
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
            <Text style={{ fontSize: 10, marginTop: 30 }}>LAND 14</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'gold',
          border: '2px solid black',
          padding: 5,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            backgroundColor: 'black',
            borderRadius: 10,
            color: 'gold',
            padding: 10,
            textAlign: 'center',
          }}
        >
          <Text>MINISTRY OF LAND AND PHYSICAL PLANNING</Text>
          <Text>KANO STATE</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <View
          style={{
            border: '1px solid black',
            borderRadius: 5,
            padding: 5,
            fontSize: 10,
            width: 250,
          }}
        >
          <Text>NO 2, Dr. Bala Mohammed Road,</Text>
          <Text>P.M.B. 3083, </Text>
          <Text>Kano - Nigeria</Text>
          <Text>064-632151, 634202</Text>
        </View>
        <View>
          <Text style={{ fontSize: 10 }}>SERIAL: NO 0034683</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}
      >
        <View
          style={{
            border: '1px solid black',
            borderRadius: 5,
            padding: 5,
            fontSize: 10,
            width: 250,
          }}
        >
          <Text>To: Hajiya Umma Aliyu Dorayi Quarters, Kano</Text>
        </View>
        <View
          style={{
            border: '1px solid black',
            borderRadius: 5,
            padding: 5,
            fontSize: 10,
            width: 250,
          }}
        >
          <Text>R OF O NO: RES/2008/5617</Text>
          <Text style={{ marginTop: 5 }}>PLOT/PLAN NO:2214 TP/KNUPDA/307</Text>
          <Text style={{ marginTop: 5 }}>LOCATION: Dangwauro</Text>
          <Text style={{ marginTop: 5 }}>DATE OF ISSUE: 25th May, 2008</Text>
        </View>
      </View>
      <View
        style={{
          border: '1px solid black',
          borderRadius: 5,
          padding: 5,
          fontSize: 12,
          marginTop: 5,
          // width: 250,
        }}
      >
        <Text style={{ textAlign: 'center' }}>
          TERMS OF OFFER OF GRANT CONVEYANCE OF APPROVAL
        </Text>
        <Text style={{ fontSize: 11, marginTop: 10 }}>
          With references to your application dated 12/12/2020 I am directed to
          Inform you that the Governor of Kano state has approved the grant of a
          Right of Occupancy to you over piece of land/plot No. 2214 situated at
          Dangwauro as per plan No. TP/KNUPDA/307 on the following conditions.
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            fontSize: 11,
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>1. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>Payment of:</Text>
            <View
              style={{
                marginTop: 5,
              }}
            >
              <Text style={{ marginTop: 5 }}>
                (a) Ground Rent: 7,000.0 p.h.p.a (Revisable every 5 years)
              </Text>
              <Text style={{ marginTop: 5 }}>
                (b) Development Charges: To Follow (Payable only once)
              </Text>
              <Text style={{ marginTop: 5 }}>
                Survey and Processing Fees/Deposit: 1,500.0
              </Text>
            </View>
            <Text style={{ marginTop: 5 }}>
              (d) If married woman, give name and address of your husband
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            fontSize: 11,
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>2. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>(a) Terms: 99 years</Text>

            <Text style={{ marginTop: 5 }}>(b) Purpose: Residential</Text>
            <Text style={{ marginTop: 5 }}>
              Value of improvements N33323 within Two years.
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            fontSize: 11,
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>3. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              Not to alienate the Right of Occupation is part or whole without
              the written consent of Governor
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            fontSize: 11,
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>4. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              To be responsible for the development and maintenance of the
              drainage, landscaping and the general beautification of the
              frontage of the subject property
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            fontSize: 11,
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>5. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              Not to erect or permit to be erect on the subject land any
              building or development except in accordance with plans and
              specification approved by the state Planning Authority in the case
              of urban areas or this Ministry in the case or rural areas.
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            fontSize: 11,
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>6. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>To complete developments on the land within: Two years</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            fontSize: 11,
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>7. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              In the case of Petrol Filling station, 33 percent of the annual
              rental is payable to the government.
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            fontSize: 11,
            marginTop: 10,
          }}
        >
          <View style={{ width: '5%' }}>
            <Text>8. </Text>
          </View>
          <View style={{ width: '95%' }}>
            <Text>
              This letter of Grant must be returned within three months from the
              above date, duly completed with the required fees; otherwise the
              offer lapses.
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
          <View
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <View>
              <Text>____________________</Text>
              <Text
                style={{ fontSize: 10, textAlign: 'center', marginLeft: 15 }}
              >
                Hon. COMMISSIONER
              </Text>
            </View>
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
              <Text>____________________</Text>
              <Text style={{ fontSize: 10, marginLeft: 55 }}>DATE</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page size="A4" style={styles.page2}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <View
          style={{
            border: '1px solid black',
            borderRadius: 5,
            padding: 5,
            fontSize: 10,
            width: 180,
          }}
        >
          <Text>The Honorable Commissioner,</Text>
          <Text>Ministry of Land and Physical Planning,</Text>
          <Text>Kano State.</Text>
        </View>
        <View
          style={{
            border: '1px solid black',
            borderRadius: 5,
            padding: 5,
            fontSize: 10,
            width: 180,
          }}
        >
          <Text>Hajiya Umma Aliyu Dorayi Quarters</Text>
          <Text style={{ marginTop: 10 }}>Date:</Text>
          <Text style={{ marginTop: 10, textAlign: 'center' }}>
            Applicant's Address
          </Text>
        </View>
      </View>
      <View
        style={{
          border: '1px solid black',
          marginTop: 20,
          fontSize: 10,
        }}
      >
        <View
          style={{
            textAlign: 'center',
            padding: 10,
            borderBottom: '1px solid black',
          }}
        >
          <Text>ACCEPTANCE LETTER</Text>
        </View>
        <View style={{ marginTop: 10, padding: 10 }}>
          <Text>
            With reference to the Offer of Grant, I hereby accept the terms and
            conditions of the grant of the Right of Occupancy as conveyed to me
            by our overleaf quoted letter.
          </Text>
          <Text style={{ marginTop: 10 }}>
            I will submit my building plans to you for approval before I
            commence any improvement on the site, and on completion of the
            improvement, I will get your completion certificate before
            occupation on the building. I forward herewith:
          </Text>

          <View
            style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
          >
            <View style={{ width: '10%' }}></View>
            <View style={{ width: '80%' }}>
              <View
                style={{
                  border: '1px solid black',
                  marginTop: 20,
                  fontSize: 10,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                  }}
                >
                  <View
                    style={{
                      width: '33.3%',
                      borderRight: '1px solid black',
                    }}
                  >
                    <View style={{ padding: '10px' }}>
                      <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                        Land Use
                      </Text>
                      <Text style={{ marginTop: 5 }}>a. Agriculture</Text>
                      <Text style={{ marginTop: 5 }}>b. Residential</Text>
                      <Text style={{ marginLeft: 10 }}>
                        I. Very High Density
                      </Text>
                      <Text style={{ marginLeft: 10 }}>II. High Density</Text>
                      <Text style={{ marginLeft: 10 }}>
                        III. Medium Density
                      </Text>
                      <Text style={{ marginLeft: 10 }}>IV. Low Density</Text>
                      <Text style={{ marginTop: 5 }}>c. Commercial</Text>
                      <Text style={{ marginTop: 5 }}>d. Industrial</Text>
                      <Text style={{ marginTop: 15, textAlign: 'center' }}>
                        One Year Ground Rent
                      </Text>
                    </View>

                    <View
                      style={{ borderTop: '1px solid black', marginTop: 15 }}
                    >
                      <Text style={{ marginTop: 10, textAlign: 'center' }}>
                        TOTAL
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '33.3%',
                      borderRight: '1px solid black',
                    }}
                  >
                    <View style={{ padding: '10px' }}>
                      <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                        Survey Processing Fees
                      </Text>
                      <Text style={{ marginTop: 5 }}>- N2,000.00</Text>F{' '}
                      <Text style={{ marginTop: 5 }}></Text>
                      <Text style={{ marginTop: 5 }}>- N1,000.00</Text>
                      <Text style={{ marginTop: 5 }}>- N1,000.00</Text>
                      <Text style={{ marginTop: 5 }}>- N1,500.00</Text>
                      <Text style={{ marginTop: 5 }}>- N5,000.00</Text>
                      <Text style={{ marginTop: 5 }}>- N10,000.00</Text>
                      <Text style={{ marginTop: 5 }}>- N15,000.00</Text>
                      <Text style={{ marginTop: 16, textAlign: 'center' }}>
                        N________________
                      </Text>
                    </View>

                    <View
                      style={{ borderTop: '1px solid black', marginTop: 5 }}
                    >
                      <Text style={{ marginTop: 5, textAlign: 'center' }}>
                        N________________
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: '33.3%' }}>
                    <View style={{ padding: '10px' }}>
                      <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                        Dev. Charge
                      </Text>
                      <Text style={{ marginTop: 5 }}>- N2,000.00</Text>F{' '}
                      <Text style={{ marginTop: 5 }}></Text>
                      <Text style={{ marginTop: 5 }}>- N5,000.00</Text>
                      <Text style={{ marginTop: 5 }}>- N5,000.00</Text>
                      <Text style={{ marginTop: 5 }}>- N20,500.00</Text>
                      <Text style={{ marginTop: 5 }}>- N35,000.00</Text>
                      <Text style={{ marginTop: 5 }}>- N50,000.00</Text>
                      <Text style={{ marginTop: 5 }}>- N50,000.00</Text>
                      <Text style={{ marginTop: 16, textAlign: 'center' }}>
                        N________________
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <View
                  style={{ display: 'flex', flexDirection: 'row', gap: 10 }}
                >
                  <View
                    style={{ border: '1px solid black', padding: 5 }}
                  ></View>
                  <View>
                    <Text>
                      I require the Director Survey to carry the land survey for
                      me
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    marginTop: 5,
                  }}
                >
                  <View
                    style={{ border: '1px solid black', padding: 5 }}
                  ></View>
                  <View>
                    <Text>
                      I require a licensed surveyor to carryout the land survey
                      for me
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ width: '10%' }}></View>
          </View>
        </View>
      </View>
      <View
        style={{
          border: '1px solid black',
          marginTop: 10,
          fontSize: 10,
          display: 'flex',
          flexDirection: 'row',
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: '65%',
            borderRight: '1px solid right',
            padding: '10',
          }}
        >
          <Text>*NOTE:</Text>
          <Text style={{ marginLeft: 30 }}>
            APPLICANT TO RETAIN ORIGINAL AND RETURN 2 COPIES
          </Text>
          <Text style={{ marginLeft: 30 }}>
            AFTER SIGNING HIS/HER ACCEPTANCE OF THE GRANT.
          </Text>
        </View>
        <View style={{ width: '35%', padding: '10' }}>
          <Text>_________________</Text>
          <Text>APPLICANT'S SIGNATURE</Text>
          <Text style={{marginTop:20}}>Date:___________________</Text>
        </View>
      </View>
    </Page>
  </Document>
)
