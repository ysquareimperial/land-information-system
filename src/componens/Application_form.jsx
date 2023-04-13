import React, { useState } from "react";
import { Button, Card, CardBody, Col, Input, Label, Row } from "reactstrap";

export default function Application_form() {
  const _form = {
    Applicant_full_name: "",
    registration_particulars: "",
    Business_location: "",
    correspondance_address: "",
    Annual_income: "",
    Allocated_before: "",
    Applicant_nationality: "",
    State_of_origin: "",
    occupation_business: "",
    nature_of_business: "",
    company_registered_under: "",
    when_where_occupancy_no: "",
    purpose_of_land_use: "",
    purpose_of_land_use: "",
    acitivity_intended_to_undertake: "",
    type_of_building_erected: "",
    estimated_amount_to_spenr: "",
    source_financing: "",
    length_of_term_required: "",
    do_you_have_biz_in_kano: "",
    address_of_local_rep: "",
    power_of_attorney_if_any: "",
    location_of_land_required: "",
    application_date: "",
    application_id: "",
    query_type: "",
  };
  const [form, setForm] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const handleSUbmit = () => {
    setForm = (_form);
    console.log(_form);
  };
  return (
    <div>
      <Card className="p-3">
        <h5>Application Form</h5>
        {/* {JSON.stringify(form)} */}
        <Row>
          <CardBody>
            <Row>
              <Col md={3}>
                <Label size="sm">Applicant Full Name</Label>
                <Input
                  type="text"
                  name="Applicant_full_name"
                  value={form.Applicant_full_name}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Registration Particulars</Label>
                <Input
                  type="text"
                  name="registration_particulars"
                  value={form.registration_particulars}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Business Location</Label>
                <Input
                  type="text"
                  name="Business_location"
                  value={form.Business_location}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Correspondance Address</Label>
                <Input
                  type="text"
                  name="correspondance_address"
                  value={form.correspondance_address}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Annual Income</Label>
                <Input
                  type="text"
                  name="Annual_income"
                  value={form.Annual_income}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Allocated Before</Label>
                <Input
                  type="text"
                  name="Allocated_before"
                  value={form.Allocated_before}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Applicant Nationality</Label>
                <Input
                  type="text"
                  name="Applicant_nationality"
                  value={form.Applicant_nationality}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">State Of Origin</Label>
                <Input
                  type="text"
                  name="State_of_origin"
                  value={form.State_of_origin}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Occupation Business</Label>
                <Input
                  type="text"
                  name="occupation_business"
                  value={form.occupation_business}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Nature Of Business</Label>
                <Input
                  type="text"
                  name="nature_of_business"
                  value={form.nature_of_business}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Company Registered Under</Label>
                <Input
                  type="text"
                  name="company_registered_under"
                  value={form.company_registered_under}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">When Where Occupancy N</Label>
                <Input
                  type="text"
                  name="when_where_occupancy_no"
                  value={form.when_where_occupancy_no}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Purpose Of Land Use</Label>
                <Input
                  type="text"
                  name="purpose_of_land_use"
                  value={form.purpose_of_land_use}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Purpose Of Land Use</Label>
                <Input
                  type="text"
                  name="purpose_of_land_use"
                  value={form.purpose_of_land_use}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Acitivity Intended To Undertake</Label>
                <Input
                  type="text"
                  name="acitivity_intended_to_undertake"
                  value={form.acitivity_intended_to_undertake}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Type Of Building Erected</Label>
                <Input
                  type="text"
                  name="type_of_building_erected"
                  value={form.type_of_building_erected}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Estimated Amount To Spenr</Label>
                <Input
                  type="text"
                  name="estimated_amount_to_spenr"
                  value={form.estimated_amount_to_spenr}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Source Financing </Label>
                <Input
                  type="text"
                  name="source_financing"
                  value={form.source_financing}
                  onChange={handleChange}
                />
              </Col>

              <Col md={3}>
                <Label size="sm">Length Of Term Required</Label>
                <Input
                  type="text"
                  name="length_of_term_required"
                  value={form.length_of_term_required}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Do You Have Biz In Kano</Label>
                <Input
                  type="text"
                  name="do_you_have_biz_in_kano"
                  value={form.do_you_have_biz_in_kano}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Address Of Local Rep</Label>
                <Input
                  type="text"
                  name="address_of_local_rep"
                  value={form.address_of_local_rep}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Power Of Attorney If Any</Label>
                <Input
                  type="text"
                  name="power_of_attorney_if_any"
                  value={form.power_of_attorney_if_any}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Location Of Land Required</Label>
                <Input
                  type="text"
                  name="location_of_land_required"
                  value={form.location_of_land_required}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <Label size="sm">Application Date</Label>
                <Input
                  type="date"
                  name="application_date"
                  value={form.application_date}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <center>
              <Button onClick={handleSUbmit} size="sm" className="mt-3">
                Submit
              </Button>
            </center>
          </CardBody>
        </Row>
      </Card>
    </div>
  );
}
