import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function List_doc() {
  const [list, setList] = useState({
    // application_id: '',
    type_application: '',
    document_name: '',
    description: '',
  })
  const handleChange = ({ target: { name, value } }) => {
    setList((p) => ({ ...p, [name]: value }))
  }
  const [loading, setLoading] = useState(false)
  const [new_list,setNew_list]=useState([])
  const handleAdd = ()=>{
    setNew_list((p)=>([...p,list]))
    setList({
      // document_id: '',
      type_application: '',
      document_name: '',
      description: '',
    })
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    setLoading(true)
    _postApi('/api/list_doc?in_query_type=Insert', new_list, (res) => {
      console.log(res)
      if (res.succes) {
        setLoading(false)
       
        alert('success')
      }
    }),
      (err) => {
        setLoading(false)
        console.log(err)
      }
  }
  
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
      <button className="mt-2 app_btn col-md-2" onClick={()=>navigate(-1)}><BsArrowLeft />  Back</button>
        <center><h5 className="mb-3">List Documents</h5></center>
        {/* {JSON.stringify(new_list.length>0?'node':'')} */}
        <Row className="mb-1">
          {/* <Col md={6}>
            <label className="input_label">Document ID</label>
            <div>
              <input
                className="input_field"
                name="document_id"
                value={list.document_id}
                onChange={handleChange}
              />
            </div>
          </Col> */}
          <Col md={6}>
            <label className="input_label">Application Type</label>
            <div>
              <select
                className="input_field"
                name="type_application"
                value={list.type_application}
                onChange={handleChange}
              >
                <option>-----Select ------</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>
          </Col>
     
          <Col md={6}>
            <label className="input_label">Document Name</label>
            <div>
              <input
                className="input_field"
                name="document_name"
                value={list.document_name}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Description</label>
            <div>
              <input
                className="input_field"
                name="description"
                value={list.description}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <div>
          <button className="mt-3 app_btn" onClick={handleAdd}>
      Add
          </button>
        </div>
        {
          new_list.length > 0 ?<>
           <table className='mt-3'>
        <thead>
        <tr>
            <th style={{border:'1px solid #f1f1f1',height:'45%',textAlign:"center"}}>S/N</th>
            <th style={{border:'1px solid #f1f1f1',height:'45%',textAlign:"center"}}>Applicant Type</th>
            <th style={{border:'1px solid #f1f1f1',height:'45%',textAlign:"center"}}>Document Name</th>
            <th style={{border:'1px solid #f1f1f1',height:'45%',textAlign:"center"}}>Description</th>
          
        </tr>
    </thead>
      {
        new_list.map((item,index)=>(
          <tbody>
          <tr>
            <td style={{border:'1px solid #f1f1f1',height:'45%',textAlign:"center"}}>{index+1}</td>
            <td style={{border:'1px solid #f1f1f1',height:'45%',textAlign:"center"}}>{item.type_application}</td>
            <td style={{border:'1px solid #f1f1f1',height:'45%',textAlign:"center"}}>{item.document_name}</td>
            <td style={{border:'1px solid #f1f1f1',height:'45%',textAlign:"center"}}>{item.description}</td>
          </tr>
    </tbody>
        ))
      }
        </table>
        <center>
          <button className="mt-3 app_btn" onClick={handleSubmit}>
            {loading ? '...loading' : 'Submit'}
          </button>
        </center>
          </>:null
        }
       
      </Card>
    </div>
  )
}
