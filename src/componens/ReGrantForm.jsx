import React from "react";
import { Card, Col, Row } from "reactstrap";
import ForOfficialUseForm from "./ForOfficialUseForm";

export default function ReGrantForm() {
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">
          Application for The Re-Grant of A Statutory Right of Occupancy
        </h5>
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">Applicant's Full Name</label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="term"
                // value={recLetteForm.term}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Residential Address</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Correspondence Address</label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="time_of_completion"
                // value={recLetteForm.time_of_completion}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Business Address</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="annual_ground_rent"
                // value={recLetteForm.annual_ground_rent}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">Nationality</label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="term"
                // value={recLetteForm.term}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">State of Origin</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Local Government</label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="time_of_completion"
                // value={recLetteForm.time_of_completion}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Occupation</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="annual_ground_rent"
                // value={recLetteForm.annual_ground_rent}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">
              Purpose for Which The Land was Granted
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="term"
                // value={recLetteForm.term}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Purpose for Which Re-Grant is Required
            </label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Sufficient Description of the Land
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="time_of_completion"
                // value={recLetteForm.time_of_completion}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Orig. Guarantee Name/Adrs (if diff from app.)
            </label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="annual_ground_rent"
                // value={recLetteForm.annual_ground_rent}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">
              Value of Improvement Already Erected
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="term"
                // value={recLetteForm.term}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Name/Address of Current Holder
            </label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              How the Current Holder Got The Title
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="time_of_completion"
                // value={recLetteForm.time_of_completion}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Length of term required for The Re-Grant
            </label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="annual_ground_rent"
                // value={recLetteForm.annual_ground_rent}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">Date</label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="time_of_completion"
                // value={recLetteForm.time_of_completion}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Signature of Applicant</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="annual_ground_rent"
                // value={recLetteForm.annual_ground_rent}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <ForOfficialUseForm
          label={"Accntnt, Ministry of Land & Physical Planning"}
        />
        <div>
          <button className="app_btn mt-3" onClick={""}>
            Submit
          </button>
        </div>
      </Card>
    </div>
  );
}
