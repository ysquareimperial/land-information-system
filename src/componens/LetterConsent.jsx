import React, { useEffect, useState } from 'react'
import { Card, Table } from 'reactstrap'
import { _fetchApi } from '../helpers/helper'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'

export default function LetterConsent() {
    const [data,setData]=useState([])
    const getApproved =()=>{
        _fetchApi('/api/get-approved',
        (res)=>{
            if(res.success){
                setData(res.results[0])
            }
        },(err)=>{
            console.log(err)
        })
    }
    useEffect(
        ()=>{
            getApproved()
        },[]
    )
    const navigate = useNavigate()
  return (
    <div>
        <Card className='app_primary_card m-2 shadow p-4'>
{/* {JSON.stringify(data)} */}
<SearchBar />
<Table striped borderless size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>S/N</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Full Name</td>
              <td style={{ fontWeight: 'bold' }}>Business Location</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Nationality</td>
              <td style={{ fontWeight: 'bold' }}>State Of Origin</td>
              <td style={{ fontWeight: 'bold' }}>Occupation Business</td>
              {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</th> */}
              <td style={{ fontWeight: 'bold' }}>Length Of Term Required</td>
          
              <td style={{ fontWeight: 'bold' }}>
                <div style={{ textAlign: 'right' }}>Action</div>
              </td>
            </tr>
          </thead>
          {data&&data.map((item,index)=>(
 <tr>
 <td>{index + 1}</td>
 <td>{item.Applicant_full_name}</td>
 <td>{item.Business_location}</td>
 <td>{item.Applicant_nationality}</td>
 <td>{item.State_of_origin}</td>
 <td>{item.occupation_business}</td>
 <td>{item.length_of_term_required}</td>

 <td>
   <div style={{ textAlign: 'right' }}>
    {
        item.app_status === 'assignment'?   <button
        className="approved"
    //    onClick={()=>{navigate(`/letter-consent-form?file_no=${item.file_no}`)}}
      >Assigned</button>: <button
      className="paid"
     onClick={()=>{navigate(`/letter-consent-form?file_no=${item.file_no}`)}}
    >
      Process
    </button>
    }
    
   </div>
 </td>
</tr>
          ))}
        
          <tbody>

          </tbody>
          </Table>

        </Card>
    </div>
  )
}
