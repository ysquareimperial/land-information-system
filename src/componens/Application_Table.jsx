import React from 'react'
import { Card, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { BsPlusLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function Application_Table() {
  const navigate = useNavigate()
  return (
    <div>
        <Card className='app_primary_card m-2 shadow p-4'>
        <h5 className="mb-3">List Of Application</h5>
        <button className="mt-2 app_btn col-md-2" onClick={()=>navigate('/application-form')}>
            <BsPlusLg /> New Application
          </button>
        <SearchBar />
        
        <table bordered>
    <thead>
        <tr>
            <th style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}>Applicant Full Name</th>
            <th style={{border:'1px solid #f1f1f1',width:'15%',height:"100px",textAlign:"center"}}>Business Location</th>
            <th style={{border:'1px solid #f1f1f1',width:'15%',height:"100%",textAlign:"center"}}>Applicant Nationality</th>
            <th style={{border:'1px solid #f1f1f1',width:'15%',height:"100%",textAlign:"center"}}>State Of Origin</th>
            <th style={{border:'1px solid #f1f1f1',width:'15%',height:"100%",textAlign:"center"}}>Occupation Business</th>
            {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</th> */}
            <th style={{border:'1px solid #f1f1f1',width:'20%',height:"100%",textAlign:"center"}}>Length Of Term Required</th>
            
        </tr>
    </thead>
        </table>
        </Card>
    </div>
  )
}
