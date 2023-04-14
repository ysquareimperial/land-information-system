import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'

export default function ExtensionForm() {
    const [form, setForm] = useState({
        app_fullName: '',
        res_address: '',
        Cor_address: '',
        nationality: '',
        occ: '',
        right_of_occ_no: '',
        existing_land_use: '',
        location: '',
        date: '',
        sign: '',
        app_fee: '',
        rcr_no: '',
        tc_no: '',
        acc_physical_plane: '',
        date_acc: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
      }

  return (
    <div>
          <Card className='app_primary_card m-2 shadow p-4'>
            <center><h5 className="mb-3">Application for Extension of Right of Occupancy</h5></center>
            <Row className="mb-1">
                <Col md={4}>
                    <label className="input_label">Applicant's Full Name</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.app_fullName}
                        name="app_fullName"
                        onChange={handleChange}
                    />
                    </div>
                    <label className="input_label">Nationality</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.nationality}
                        name="nationality"
                        onChange={handleChange}
                    />
                    </div>
                    <label className="input_label">Existing Land Use</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.existing_land_use}
                        name="existing_land_use"
                        onChange={handleChange}
                    />
                    </div>
                    <label className="input_label">Date</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.date}
                        name="date"
                        onChange={handleChange}
                        type='date'
                    />
                    </div>
                    <label className="input_label">T.C No.</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.tc_no}
                        name="tc_no"
                        onChange={handleChange}
                        type='number'
                    />
                    </div>
                </Col>
                <Col md={4}>
                    <label className="input_label">Residential Address</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.res_address}
                        name="res_address"
                        onChange={handleChange}
                    />
                    </div>
                    <label className="input_label">Occupation</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.occ}
                        name="occ"
                        onChange={handleChange}
                    />
                    </div>
                    <label className="input_label">Location</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.location}
                        name="location"
                        onChange={handleChange}
                    />
                    </div>
                    <label className="input_label">Application Fee of</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.app_fee}
                        name="app_fee"
                        onChange={handleChange}
                        type='number'
                    />
                    </div>
                    <label className="input_label">Account Min. of Land and Physical Planning</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.acc_physical_plane}
                        name="acc_physical_plane"
                        onChange={handleChange}
                        type='number'
                    />
                    </div>
                </Col>
                <Col md={4}>
                    <label className="input_label">Correspondence Address</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.Cor_address}
                        name="Cor_address"
                        onChange={handleChange}
                    />
                    </div>
                    <label className="input_label">Right of Occupancy No.</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.right_of_occ_no}
                        name="right_of_occ_no"
                        onChange={handleChange}
                        type='number'
                    />
                    </div>
                    <label className="input_label">Signature of the Applicant</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.sign}
                        name="sign"
                        onChange={handleChange}
                    />
                    </div>
                    <label className="input_label">R.C.R No.</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.rcr_no}
                        name="rcr_no"
                        onChange={handleChange}
                        type='number'
                    />
                    </div>
                    <label className="input_label">Date</label>
                    <div>
                    <input
                        className="input_field"
                        value={form.date_acc}
                        name="date_acc"
                        onChange={handleChange}
                        type='date'
                    />
                    </div>
                </Col>
            </Row>
            <div>
                <button className="mt-3 app_btn" >Submit
                    {/* {loading ? '...loading' : 'Submit'} */}
                </button>
            </div>
          </Card>
    </div>
  )
}
