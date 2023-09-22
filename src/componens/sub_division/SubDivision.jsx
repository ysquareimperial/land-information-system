import React, { useEffect, useState } from 'react'
import { Card, Col, Modal, Row, Table } from 'reactstrap'
import SearchBar from '../SearchBar'
import { BsPlusLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../../helpers/helper'
import ResAppPDFView from '../PDF/ResAppPDFView'

export default function SubDivision() {
    const navigate = useNavigate()
    const [data,setData]=useState([])
    const getData = ()=>{
      _fetchApi('/api/getSubD',(data)=>{
        setData(data.results[0])
      },(err)=>{
        console.log(err)
      })
    }

    useEffect(
      ()=>{
        getData()
      },[]
    )
    const [newData, setNewData] = useState({})
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
      setModal(!modal)
    }
  return (
    <div>
        <Card className='app_primary_card m-2 shadow p-1'>
        <Row>
          <Col md={6}>
            {' '}
            <h5 className="mb-3">List of Sub-division</h5>
          </Col>
          {/* {JSON.stringify(data)} */}
          <Col md={6}>
            <button
              className="app_btn"
              style={{ float: 'right' }}
              onClick={() => navigate('/sub-division-form')}
            >
              <BsPlusLg /> New Application
            </button>
          </Col>
        </Row>
            <SearchBar />
            <Table striped borderless  size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>S/N</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Full Name</td>
              <td style={{ fontWeight: 'bold' }}>Business Location</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Nationality</td>
              <td style={{ fontWeight: 'bold' }}>State Of Origin</td>
              <td style={{ fontWeight: 'bold' }}>Occupation Business</td>
              {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</th> */}
              {/* <td style={{ fontWeight: 'bold' }}>Length Of Term Required</td> */}
              <td style={{ fontWeight: 'bold' }}>Type</td>
          
              <td style={{ fontWeight: 'bold' }}>
                <div style={{ textAlign: 'right' }}>Action</div>
              </td>
            </tr>
          </thead>
          <tbody>
          {data&&data.map((item,index)=>(
 <tr>
 <td>{index + 1}</td>
 <td>{item.Applicant_full_name}</td>
 <td>{item.Business_location}</td>
 <td>{item.Applicant_nationality}</td>
 <td>{item.State_of_origin}</td>
 <td>{item.occupation_business}</td>
 {/* <td>{item.length_of_term_required}</td> */}
 <td>{item.app_status}</td>

 <td>
   <div style={{ textAlign: 'right' }}>
    <button
      className="paid"
      onClick={() => {
        setNewData(item)
        toggleModal()
      }}
    >
      view
    </button>
  
    
   </div>
 </td>
</tr>
          ))}</tbody>
        
          <tbody>

          </tbody>
          </Table>
          <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <div className="p-2">
          {/* {JSON.stringify(newData)} */}
          <ResAppPDFView form={newData} />
        </div>
      </Modal>
        </Card>
    </div>
  )
}
