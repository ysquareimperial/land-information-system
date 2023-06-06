import React, { useEffect, useState } from 'react'
import { BsPlusLg, BsSearch } from 'react-icons/bs'
import { Button, Card, Col, Input, Row, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { _fetchApi, useQuery } from '../helpers/helper'

function Shedule_table() {
  const navigate = useNavigate()
    const [data,setData]=useState([])
    const query = useQuery()
    const type = query.get('type')
  const getID =()=>{
    _fetchApi('/api/getBYID?status=file_no_generated',
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
                          <td className='d-flex'><button className='app_btn p-0' onClick={()=>navigate(`/${role}/?file_no=${item.file_no}&name=${item.Applicant_full_name}&address=${item.correspondance_address}`)}>{type==='letter'?'process':'Schedule Payment'}</button>{type === 'letter'?'':<button className='app_btn m-2 p-1' onClick={()=>navigate(`/${role}/?file_no=${item.file_no}&name=${item.Applicant_full_name}&type=lol`)}>processing fee</button>}</td>
   
  </tr>
    )
  })
  const role = type === 'letter'?'application-letter':'schedule-payment'
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        {/* {JSON.stringify(role)} */}
        <center>
          <h5 className="mb-3">{type==='letter'?'Application Letter':'Schedule Table'}</h5>
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

export default Shedule_table
