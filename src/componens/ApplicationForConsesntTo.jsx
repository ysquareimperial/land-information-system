import React, { useState } from "react";
import { Button, Card, CardBody, Col, input, Label, Row } from "reactstrap";
import { _postApi } from "../helpers/helper";
import { BsArrowLeft } from "react-icons/bs";

export default function ApplicationForConsesntTo() {
  const _form = {
    full_name_of_the_applicant: "",
    residential_address: "",
    correspondence_address: "",
    correspondance_address: "",
    purpose_of_right_of_occupancy: "",
    cert_of_occupany_no: "",
    name_of_original_holder: "",
    plot_no: "",
    location: "",
    marital_stataus: "",
    residential: "",
    postal_address: "",
    natinality_state_of_origin: "",
    stage_of_development: "",
    amount_of_consideration: "",
    Annual_income: "",
    Allocated_before: "",
    Applicant_nationality: "",
    State_of_origin: "",
    occupation_business: "",
    nature_of_business: "",
    company_registered_under: "",
    when_where_occupancy_no: "",
    purpose_of_land_use: "",
    purpose_for_application_required: "",
    acitivity_intended_to_undertake: "",
    type_of_building_erected: "",
    estimated_amount_to_spenr: 0,
    source_financing: "",
    length_of_term_required: "",
    do_you_have_biz_in_kano: "",
    address_of_local_rep: "",
    power_of_attorney_if_any: "",
    location_of_land_required: "",
    application_date: "",
    // query_type: "Insert",
  };
  const [form, setForm] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    _postApi("/api/Application_form", form, (res) => {
      setLoading(false);
      console.log(res);
      if (res.success) {
        alert("success");
        setForm(_form);
      }
    }),
      (err) => {
        setLoading(false);
        console.log(err);
      };
  };

  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
      <button className="mt-2 app_btn col-md-2" onClick={()=>navigate(-1)}><BsArrowLeft />  Back</button>
        <center><h5 className="mb-3">Application for Consent To Assign Statutory Right Of Occupancy</h5></center>
        {/* {JSON.stringify(form)} */}

        <Row>
          <Col md={3}>
            <label className="input_label">Full Name Of The Applicant</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="full_name_of_the_applicant"
                value={form.full_name_of_the_applicant}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Residential Address</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="residential_address"
                value={form.residential_address}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Correspondence Address</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="correspondence_address"
                value={form.correspondence_address}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={3}>
            <label className="input_label">Right Of Occupancy Number</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="right_of_occupancy_number"
                value={form.right_of_occupancy_number}
                onChange={handleChange}
              />
            </div>
          </Col>
          {/* CHANGESSSSSSSSSSS */}
          <Col md={3}>
            <label className="input_label">Purpose Of Right Of Occupancy</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="purpose_of_right_of_occupancy"
                value={form.purpose_of_right_of_occupancy}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Name Of Original Holder (If Different From The Applicant)</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="name_of_original_holder"
                value={form.name_of_original_holder}
                onChange={handleChange}
              />
        
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Full Name Of Assignee</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="full_name_of_assignee"
                value={form.full_name_of_assignee}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Residential Addreaa</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="residential_address"
                value={form.residential_address}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Postal Address</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="postal_address"
                value={form.postal_address}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Nationality State Of Origin</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="natinality_state_of_origin"
                value={form.natinality_state_of_origin}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">stage Of Development</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="stage_of_development"
                value={form.stage_of_development}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Amount Of Consideration</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="amount_of_consideration"
                value={form.amount_of_consideration}
                onChange={handleChange}
              />
            </div>
          </Col>
          {/* CHANGESSSSSSSSSSS */}
        </Row>
       
        <div>
          {loading ? (
            <button
              className="app_btn mt-3"
              disabled
              style={{ cursor: "not-allowed", backgroundColor: "#A9A9A9" }}
            >
              Loading...
            </button>
          ) : (
            <button className="app_btn mt-3" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </Card>
    </div>
  );
}
