import React, { useState } from 'react'
import { Button, Card, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { _postApi, useQuery } from '../helpers/helper'
import KanoStateCadDeptPDFView from './PDF/KanoStateCadDeptPDFView'

function YesOrNo() {
  const query = useQuery()
const file= query.get('application_file_number')
  const [radios,setRadio]=useState({
    order:[],
    file_no:file
})
const handleChanges = ({target:{name,value}})=>{
  setRadio((p)=>({...p, [name]:value}))
}
const handleSubmit = ()=>{
  _postApi('/api/report_on_application',radios,(res)=>{console.log(res)},(err)=>{console.log(err)})
}
const [modal3, setModal3] = useState(false)
const toggle3 = () => setModal3(!modal3)

  return (
    <div>
        <Modal isOpen={modal3} toggle={toggle3} size="lg">
        <ModalHeader>Continue With</ModalHeader>
        <ModalBody>
          <KanoStateCadDeptPDFView pdf={radios}/>
        </ModalBody>
        <ModalFooter>
          <Button

            color="danger"
            onClick={() => {
              toggle3()
              navigate(-1)
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
         <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">YES/NO Application</h5>
        {JSON.stringify(radios)}
        <Row>
            <Col md={6}>Right OF OCCUpancy No. LKN :</Col>
            <Col md={3}><b>{file}</b></Col>
            <Col md={3}></Col>

            <Col  md={6}>Government item No. GKN :</Col>
            <Col md={3}><input className='input_field mt-2' name='GKN_no' value={radios.GKN_no} onChange={handleChanges}  /></Col>
            <Col md={3} className='mt-3 mb-3'></Col>

            <Col md={6}>1.is the Applicant Plan sufficient to identify the plot:</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='applicant_plan_sufficient' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' name='applicant_plan_sufficient' value={'No'} type='radio' onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>2.is the ground open?        correctLY:</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='is_ground_open' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' name='is_ground_open' value={'yes'} type='radio' onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>If NO What Title of Application lie over the same land</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='applicant_plan_sufficient' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' type='radio' name='applicant_plan_sufficient' value={'No'}  onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>3.is the Plot completely beaconed        :</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='is_the_plot_completely_beaconed' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' type='radio' name='is_the_plot_completely_beaconed' value={'No'}  onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>4.IF YES : </Col>
            <Col md={3}></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>(a) Tracing No.:</Col>
            <Col md={3}><input className='input_field' name='tracing_number' value={radios.tracing_number} onChange={handleChanges}  /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>(b) Deposition Plan:</Col>
            <Col md={3}> <input className='input_field mt-2' name='deposition_no' value={radios.deposition_no} onChange={handleChanges}  /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>4.IF No :</Col>
            <Col md={3}></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>(a) It lies on unapproved Town plan No..:</Col>
            <Col md={3}></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>(b)It lies on Lay-out No.:</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='lay_on_layout_no' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' type='radio' name='lay_on_layout_no' value={'No'}  onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>(b)Separate Survey is Required.:</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='seperate_survey_required' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' type='radio' name='seperate_survey_required' value={'No'}  onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>5.Does  it lies on an area covered by a town Plan ?:</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='does_it_lies_area_town_plan' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' type='radio' name='does_it_lies_area_town_plan' value={'No'}  onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>IF YES :</Col>
            <Col md={3}></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>(a) Town plan No:</Col>
            <Col md={3}><input className='input_field mt-2' name='Town_plan_no' value={radios.Town_plan_no} onChange={handleChanges}  /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>(b)Does The Shape of The Plot agree with town Plan ?:</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='does_shape_agrees_with_town_plan' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' type='radio' name='does_shape_agrees_with_town_plan' value={'No'}  onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>(c) The Application Residential/Commercial/industrial/petrol plot:</Col>
            <Col md={3}></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>(d) The are shown on the Town Plan for the purpose applied:</Col>
            <Col md={3}></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>6.Has The Plot been previously hold or applied for under statutory title ?:</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='has_the_place_hold_titile_before' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' type='radio' name='has_the_place_hold_titile_before' value={'No'}  onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>
            <Col md={6}>IF YES Details:</Col>
            <Col md={3}></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>7.Does a railway/Sidind run alongside/through the plot ?:</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='does_railway_runs_through_the_plot' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' type='radio' name='does_railway_runs_through_the_plot' value={'No'}  onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>8.is the plot alongside a federal/state Truck Road?:</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='is_the_plot_along_side_federal_road' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' type='radio' name='is_the_plot_along_side_federal_road' value={'No'}  onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>

            <Col md={6}>9.Area applied for : (0.0162 hq acres) hectares?:</Col>
            <Col md={3}>YES:<Input className='p-2' type='radio' name='area_applied_for' value={'yes'}  onChange={handleChanges} /> NO:<Input className='p-2' type='radio' name='area_applied_for' value={'No'}  onChange={handleChanges} /></Col>
            <Col md={3} className='mb-3 mt-3'></Col>
        </Row>
<center><button className='app_btn mt-3' onClick={()=>{toggle3();handleSubmit}}>Submit</button></center>
        </Card>
    </div>
  )
}

export default YesOrNo