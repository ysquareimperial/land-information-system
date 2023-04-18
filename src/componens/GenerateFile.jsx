import React, { useEffect, useState } from 'react'
import { BsPlusLg, BsSearch } from 'react-icons/bs'
import { Button, Card, Col, Input, Row, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'

function GeneratFile() {
  const navigate = useNavigate()
    const [data,setData]=useState([])
  const getID =()=>{
    _fetchApi('/api/getBYID?status=application-fee-paid',
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
    if (item.application_id
        .toString()
        .toLowerCase()
        .indexOf(hello.toLowerCase())=== -1 &&
        item.Applicant_full_name
        .toString()
        .toLowerCase()
        .indexOf(hello.toLowerCase())=== -1
      ) {
      return
    }
    rows.push(
      <tr key={i} className="p-0 m-0">
    <td>{item.Applicant_full_name}</td>
                          <td>{item.application_id}</td>
                          <td>{item.State_of_origin}</td>
                          <td>{item.occupation_business}</td>
                          <td><button className='app_btn' onClick={()=>navigate(`/view-generate?application_id=${item.application_id}`)}>Generate File Number</button></td>
   
  </tr>
    )
  })
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        {/* {JSON.stringify(data[0])} */}
        <center>
          <h5 className="mb-3">Generate FIle Number</h5>
        </center>
      
            <Input type="text" className='mt-3' name="hello" value={hello}  
      placeholder="Search by Application Number or Applicant Name" 
      onChange={(e) =>setHello(e.target.value)} 
      />
    
    

        <Table striped >
                  <thead>
                    <tr>
                      <th>Applicant Name</th>
                      <th>Applicantion Number</th>
                      <th>State of origin</th>
                      <th>Bussiness Occupation</th>
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

export default GeneratFile
