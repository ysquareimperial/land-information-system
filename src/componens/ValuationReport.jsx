import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'

export default function ValuationReport() {
  const [form,setForm]=useState({
    date_of_inspection:'',
    purpose_of_inspection:'',
    owner_name:'',
    owner_address:'',
    property_no:'',
    street_name:'',
    quarters:'',

  })

  const handleChange = ({target:{name,value}})=>{
    setForm((p)=>({}))
  }
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">Valuation Report</h5>
        <Row>
          <Col md={6}>
            <label>Date Of inspection</label>
            <input type="date" className="input_field" />
          </Col>
          <Col md={6}>
            <label>purpose Of Inspection</label>
            <input className="input_field" />
          </Col>
        </Row>
        <div className="text-center mt-2 ">
          <p className="label_">Owner</p>
        </div>
        <Row>
          <Col md={4}>
            <label>Name</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Address</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Property No.</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Street Name</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Quarters</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Neighborhood Characteristics</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Town</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Lga</label>
            <input className="input_field" />
          </Col>
        </Row>

        <div className="text-center mt-2">
          <p className="label_">Property</p>
        </div>
        <Row>
          <Col md={4}>
            <label>Type</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Number Of Block</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Story Height</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Number per block</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Number of bedroom unit</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Ancillary Accomodation</label>
            <input className="input_field" />
          </Col>
        </Row>

        <Col md={4}>
          <label>Use</label>
          <select className="input_field">
            <option>Residential</option>
            <option>commercial</option>
            <option>industrial</option>
          </select>
        </Col>

        <div className="text-center mt-2">
          <p className="label_">Foundation</p>
        </div>
        <Row>
          <Col md={6}>
            <label>Type</label>
            <input className="input_field" />
          </Col>
          <Col md={6}>
            <label>Stage</label>
            <input className="input_field" />
          </Col>
        </Row>

        <div className="text-center mt-2">
          <p className="label_">FLoor</p>
        </div>
        <Row>
          <Col md={6}>
            <label>Type</label>
            <input className="input_field" />
          </Col>
          <Col md={6}>
            <label>Finishing</label>
            <input className="input_field" />
          </Col>
        </Row>

        <div className="text-center mt-2">
          <p className="label_">Main Walls</p>
        </div>
        <Row>
          <Col md={4}>
            <label>Type</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>stage</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Finishing</label>
            <input className="input_field" />
          </Col>
        </Row>

        <div className="text-center mt-2">
          <p className="label_">Boundary Walls</p>
        </div>
        <Row>
          <Col md={4}>
            <label>Type</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>height</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Finishing</label>
            <input className="input_field" />
          </Col>
        </Row>

        <div className="text-center mt-2">
          <p className="label_">Roof</p>
        </div>
        <Row>
          <Col md={6}>
            <label>Type</label>
            <input className="input_field" />
          </Col>
          <Col md={6}>
            <label>Materials</label>
            <input className="input_field" />
          </Col>
        </Row>
        <Col md={6}>
          <label>Celling</label>
          <input className="input_field" />
        </Col>

        <div className="text-center mt-2">
          <p className="label_">Doors</p>
        </div>
        <Row>
          <Col md={4}>
            <label>Gate</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>External</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Internal</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Proof</label>
            <input className="input_field" />
          </Col>
        </Row>

        <div className="text-center mt-2">
          <p className="label_">Windows</p>
        </div>
        <Row>
          <Col md={6}>
            <label>Type</label>
            <input className="input_field" />
          </Col>
          <Col md={6}>
            <label>Proof</label>
            <input className="input_field" />
          </Col>
        </Row>
        <Col md={6}>
          <label>Toilet: Bathroom Facility</label>
          <input className="input_field" />
        </Col>

        <div className="text-center mt-2">
          <p className="label_">Pipe Born Water</p>
        </div>
        <Row>
          <Col md={4}>
            <label>Gate</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Available</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Not Available</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Supplement</label>
            <input className="input_field" />
          </Col>
        </Row>

        <div className="text-center mt-2">
          <p className="label_">Electricity</p>
        </div>
        <Row>
          <Col md={4}>
            <label>Gate</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Available</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Not Available</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Supplement</label>
            <input className="input_field" />
          </Col>
        </Row>
        <Col md={4}>
          <label>Drainage</label>
          <input className="input_field" />
        </Col>

        <div className="text-center mt-2">
          <p className="label_">Fitting & Fixture</p>
        </div>
        <Row>
          <Col md={4}>
            <label>Sitting</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Dining</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Bed</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Toilet</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Bath</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Kitchen</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>Store</label>
            <input className="input_field" />
          </Col>
          <Col md={4}>
            <label>B/Q</label>
            <input className="input_field" />
          </Col>
        </Row>
        <Col md={12}>
          <label>Other Related Information</label>
          <textarea className="input_field" />
        </Col>
        <Col md={6}>
          <label>Basis Of Valuation</label>
          <input className="input_field" />
        </Col>

        <div className="text-center mt-2">
          <p className="label_">Opinion/Recommendation</p>
        </div>
        <Row>
          <Col md={6}>
            <label>Amount In Words</label>
            <input className="input_field" />
          </Col>
          <Col md={6}>
            <label>N</label>
            <input className="input_field" />
          </Col>
        </Row>

        <div className="text-center mt-2">
          <p className="label_">Surveyor</p>
        </div>
        <Row>
          <Col md={6}>
            <label>Name</label>
            <input className="input_field" />
          </Col>
          <Col md={6}>
            <label>Rank</label>
            <input className="input_field" />
          </Col>
        </Row>
        <center>
          <button className="app_btn mt-2">Submit</button>
        </center>
      </Card>
    </div>
  )
}
