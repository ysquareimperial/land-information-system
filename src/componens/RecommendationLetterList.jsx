import React, { useEffect, useState } from 'react'
import { Button, Card, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { _fetchApi, useQuery } from '../helpers/helper'
import RecForGrOfStatRightOfOccupView from './PDF/RecForGrOfStatRightOfOccupView'
export default function RecommendationLetterList() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getID = () => {
    _fetchApi(
      '/api/getBYID?status=file_no_generated',
      (res) => {
        setData(res.results)
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getID()
  }, [])
  const query = useQuery()
  const role = query.get('type')
  const [modal3, setModal3] = useState(false)
  const toggle3 = () => setModal3(!modal3)
  const [newForm,setNewForm]=useState([])
  const getRecBy = (num)=>{
    _fetchApi(`/api/getAppBYID?application_file_number=${num}`,
(res)=>{
  if(res.success){
    setNewForm(res.results[0])
  }
},(err)=>{
  console.log(err)
}
    )
  }
  return (
    <>
    
    <Modal isOpen={modal3} toggle={toggle3} size="lg">
        <ModalHeader>Continue With</ModalHeader>
        <ModalBody>
          {/* <Require_documents />
           */}
        <RecForGrOfStatRightOfOccupView form={newForm[0]}/>
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
    <Card className="app_primary_card m-2 shadow p-4">

      <h5 className="mb-4">Generate Recomendation Letters</h5>
      {/* {JSON.stringify(data[0])} */}
      <input type='search' placeholder='Search' className='input_field mb-3'/>
      <div>
      <Table striped>
    <thead>
        <tr>
            <th>Applicantion Number</th>
            <th>Applicant Full Name</th>
            <th >Business Location</th>
            <th >Applicant Nationality</th>
            <th >State Of Origin</th>
            <th >Occupation Business</th>
            {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</th> */}
            <th >Length Of Term Required</th>
            <th >Action</th>
            
        </tr>
    </thead>
    <tbody>
      {
        data[0]?.map((item)=>(
          <tr>
            <td >{item.application_id}</td>
          <td >{item.Applicant_full_name}</td>
          <td >{item.Business_location}</td>
          <td >{item.Applicant_nationality}</td>
          <td >{item.State_of_origin}</td>
          <td >{item.occupation_business}</td>
          <td >{item.length_of_term_required}</td>
         <td > 
          {/* {item.land_status==='generated'?'hello':'fuck yu'} */}
          {
            item.land_status===null?<button
            className="paid"
            onClick={() => navigate(`/recommendation-letter?file_no=${item.file_no}&role=${role}&name=${item.Applicant_full_name}&type=${item.type}`)}
          >
            process
          </button>:
          <button
          className="approved"
          onClick={() => {getRecBy(item.file_no);toggle3()}}
        >
          view
        </button>
          }
           {/* <button
                  className="paid"
                  onClick={() => navigate(`/recommendation-letter?file_no=${item.file_no}&role=${role}`)}
                >
                  process
                </button> */}
                </td>
        </tr>
        ))
      }
     
    </tbody>
        </Table>
      </div>
    </Card>
    </>
  )
}
