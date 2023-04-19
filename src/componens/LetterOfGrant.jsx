import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { _fetchApi, _postApi, useQuery } from '../helpers/helper'

export default function LetterOfGrant() {
  const _form = {
    letter_id: '',
    file_no: '',
    date_of_issue: '',
    serial_no: '',
    permsec_signature: '',
    signature_date: '',
  }
  const [letterOfGrantForm, setLetterOfGrantForm] = useState(_form)
  const [loading, setLoading] = useState(false)
  const handleChange = ({ target: { name, value } }) => {
    setLetterOfGrantForm((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = () => {
    setLoading(true)
    _postApi('/api/create-letter-of-grant', letterOfGrantForm, (res) => {
      setLoading(false)
      console.log(res)
      if (res.success) {
        alert('success')
        setLetterOfGrantForm(_form)
      }
    }),
      (err) => {
        setLoading(false)
        console.log(err)
      }
  }
  const query = useQuery();
  const application_file_number = query.get('application_file_number')
  const [recs,setRecs]=useState([])
  const getRecommendation =()=>{
    _fetchApi(`/api/getAppBYID?application_file_number=${application_file_number}`,
    (res)=>{
      setRecs(res.results[0])
    },(err)=>{
      console.log(err)
    }
    )
  }
  const [app,setApp]=useState([])
  const getAppBYID = ()=>{
    _fetchApi(`/api/getreByIDs?file_no=${application_file_number}`,
    (res)=>{
      setApp(res.results[0])
    },
    (err)=>{
      console.log(err)
    }
    )
  }
  useEffect(
    ()=>{
      getAppBYID()
      getRecommendation();
    },[]
  )

  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">Letter of Grant</h5>
        {/* {JSON.stringify(recs)} */}
       <Row>
        <Col md={6}>
        <Card>
        <CardHeader><center> Applicant Details</center></CardHeader>
        <CardBody>
        <Row>
<Col md={4}><span><b>Applicant Name :</b> {app[0]?.Applicant_full_name}</span></Col>
<Col md={4}><span><b>Address :</b>{app[0]?.correspondance_address}</span></Col>
  <Col md={4}><span><b>State Of origin :</b> {app[0]?.State_of_origin}</span></Col>
</Row>
        </CardBody>
       </Card>
        </Col>
        <Col md={6}>
        <Card >
        <CardHeader><center> Land Details</center></CardHeader>
        <CardBody>
        <Row>
<Col md={3}><span><b>R OF O No :</b> </span></Col>
<Col md={3}><span><b>Plot/PLAN:</b> {recs[0]?.plot_no}/{recs[0]?.plan_no}</span></Col>
  <Col md={3}><span><b>Location:</b> </span></Col>
  <Col md={3}><span><b>Date Of Issue:</b> {recs[0]?.persec_sign_date}</span></Col>
</Row>
        </CardBody>
       </Card>
        </Col>
       </Row>
         
       <Card className='mt-3'>
        <CardHeader><center> Terms OF OFFER OF GRANT/CONVEYANCE OF APPROVAL</center></CardHeader>
        <CardBody>
        <Row>
        <Col md={4}><span><b>Serial No:</b> </span></Col>
        <Col md={4}><span><b>Situated At :</b> </span></Col>
<Col md={4}><span><b>No :</b> </span></Col>
  <Col md={4}><span><b>Ground rent N :</b>{recs[0]?.annual_ground_rent} </span></Col>
  <Col md={4}><span><b>Development Charges N :</b> </span></Col>
  <Col md={4}><span><b>survey fee :</b> {recs[0]?.survey_charges}</span></Col>
  <Col md={4}><span><b>Term:</b> {recs[0]?.term}</span></Col>
  <Col md={4}><span><b>Purpose:</b> {app[0]?.purpose_of_land_use}</span></Col>
  <Col md={4}><span><b>Date:</b> {app[0]?.application_date}</span></Col>
 
         
</Row>

        </CardBody>
       </Card>
       <center>
          <button className="app_btn mt-3" onClick={handleSubmit}>
            Approve
          </button>
        </center>
       
        {/* <Row>
          <Col md={3}>
            <label className="input_label">Letter ID</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="letter_id"
                value={letterOfGrantForm.letter_id}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">File No</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="file_no"
                value={letterOfGrantForm.file_no}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Date of Issue</label>
            <div>
              <input
                className="input_field"
                type="date"
                name="date_of_issue"
                value={letterOfGrantForm.date_of_issue}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={3}>
            <label className="input_label">Serial No</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="serial_no"
                value={letterOfGrantForm.serial_no}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <label className="input_label">Perm Sec Signature</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="permsec_signature"
                value={letterOfGrantForm.permsec_signature}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Signature Date</label>
            <div>
              <input
                className="input_field"
                type="date"
                name="signature_date"
                value={letterOfGrantForm.signature_date}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row> */}
        {/* <div>
          <button className="app_btn mt-3" onClick={handleSubmit}>
            Submit
          </button>
        </div> */}
      </Card>
    </div>
  )
}
