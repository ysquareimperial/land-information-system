import React, { useEffect, useState } from 'react'
import { BsPlusLg, BsSearch } from 'react-icons/bs'
import { Button, Card, Col, Input, Row, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'

function LetterGrantTable() {
  const navigate = useNavigate()
    const [data,setData]=useState([])
  const getID =()=>{
    _fetchApi('/api/getGrant',
    (res)=>{
      setData(res.results)
    },(err)=>{
      console.log(err)
    }
    )
  }
  useEffect(
    ()=>{
      getID()
    },
    []
  )
  const [hello, setHello] = useState ('')
  
  const rows = []
  data[0]?.forEach((item,i) => {
    if (item.file_no
        .toString()
        .toLowerCase()
        .indexOf(hello.toLowerCase())=== -1 &&
        item.grant_number
        .toString()
        .toLowerCase()
        .indexOf(hello.toLowerCase())=== -1
      ) {
      return
    }
    rows.push(
      <tr key={i} className="p-0 m-0">
    <td>{item.file_no}</td>
                          <td>{item.grant_number}</td>
                          <td>{item.date_of_issue}</td>
                          {/* <td>{item.occupation_business}</td> */}
                          <td><button className='app_btn' onClick={()=>navigate(`/finance-form?application_id=${item.file_no}&type=grant`)}>Process Payment</button></td>
   
  </tr>
    )
  })
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        {/* {JSON.stringify(data[0])} */}
        <center>
          <h5 className="mb-3">Grant</h5>
        </center>
        <button
          className="mt-2 app_btn col-md-2"
          onClick={() => navigate('/finance-form')}
        >
          <BsPlusLg /> Add New
        </button>
            <Input type="text" className='mt-3' name="hello" value={hello}  
      placeholder="Search by Application Number or Applicant Name" 
      onChange={(e) =>setHello(e.target.value)} 
      />
    
    

        <Table striped >
                  <thead>
                    <tr>
                      <th>File No</th>
                      <th>Grant Number</th>
                      <th>Date Issue</th>
                      {/* <th>Bussiness Occupation</th> */}
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {rows}
                  </tbody>
                </Table>
      </Card>
    </div>
  )
}

export default LetterGrantTable
