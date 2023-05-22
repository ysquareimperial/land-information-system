import React, { useEffect, useState } from 'react'
import { Button, Card, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { _fetchApi, useQuery } from '../helpers/helper'
import RecForGrOfStatRightOfOccupView from './PDF/RecForGrOfStatRightOfOccupView'
export default function CadestralRecom() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const query = useQuery()
  const type = query.get('type')
  const getList = () => {
    _fetchApi(
      '/api/getBYID?status=file_no_generated',
      (res) => {
        setData(res.results[0])
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getList()
  }, [])
  const [modal3, setModal3] = useState(false)
  const toggle3 = () => setModal3(!modal3)
  const [newForm,setNewForm]=useState([])
  const getRecBy = (num,name)=>{
    let names = {name:name}
    // alert(JSON.stringify(name))
    _fetchApi(`/api/getAppBYID?application_file_number=${num}`,
(res)=>{
  if(res.success){
    setNewForm((p)=>({...p,...res.results[0][0],name:name}))
  }
},(err)=>{
  console.log(err)
}
    )
  }
  const rout = type === 'perm-sec'?'generate-recommendation-perm-sec':type==='comm-gov'?'generate-recommendation-comm-gov':type === 'dir-land'?'generate-recommendation-dir-land':''
  return (
    <Card className="app_primary_card m-2 shadow p-4">
        <Modal isOpen={modal3} toggle={toggle3} size="lg">
        <ModalHeader>Continue With</ModalHeader>
        <ModalBody>
          {/* <Require_documents />
           */}
        <RecForGrOfStatRightOfOccupView form={newForm}/>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              toggle3()
              // navigate(-1)
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <h5 className="mb-4">
        
        {type === 'director-cadestral' ? 'Generate Recomendation Letter' : ''}
      </h5>
      {/* {JSON.stringify(data)} */}
      <input type="search" placeholder="Search" className="input_field mb-3" />
      <div>
        <Table striped borderless size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>S/N</td>
              <td style={{ fontWeight: 'bold' }}>Application Number</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Full Name</td>
              <td style={{ fontWeight: 'bold' }}>Business Location</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Nationality</td>
              <td style={{ fontWeight: 'bold' }}>State Of Origin</td>
              <td style={{ fontWeight: 'bold' }}>Occupation Business</td>
              {/* <td style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</td> */}
              <td style={{ fontWeight: 'bold' }}>Length Of Term Required</td>
              <td style={{ fontWeight: 'bold' }}>Action</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item,index)=>(
                <tr>
              <td scope="row">{index+1}</td>
              <td>{item.application_id}</td>
          <td>{item.Applicant_full_name}</td>
          <td>{item.Business_location}</td>
          <td>{item.Applicant_nationality}</td>
          <td>{item.State_of_origin}</td>
          <td>{item.occupation_business}</td>
          <td>{item.length_of_term_required}</td>
              <td>
                {type==='dir-land'? 
                  item.land_status===null?
                  <button
                  className="paid"
                  onClick={() => navigate(`/${rout}?application_file_number=${item.file_no}&role=${type}`)}
                >
                  process
                </button>: <button
                  className="approved"
                  onClick={() => {toggle3(),getRecBy(item.file_no,item.Applicant_full_name)}}
                >
                  View
                </button> 
               
                :''}

{type==='perm-sec'? 
                  item.permsec_status===null?
                  <button
                  className="paid"
                  onClick={() => navigate(`/${rout}?application_file_number=${item.file_no}&role=${type}`)}
                >
                  process
                </button>: <button
                  className="approved"
                  onClick={() => {toggle3(),getRecBy(item.file_no,item.Applicant_full_name)}}
                >
                  View
                </button> 
               
                :''}

                {type==='comm-gov'? 
                  item.gov_status===null?
                  <button
                  className="paid"
                  onClick={() => navigate(`/${rout}?application_file_number=${item.file_no}&role=${type}`)}
                >
                  process
                </button>: <button
                  className="approved"
                  onClick={() => {toggle3(),getRecBy(item.file_no,item.Applicant_full_name)}}
                >
                  View
                </button> 
               
                :''}
               
               
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  )
}
