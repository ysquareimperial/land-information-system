import React, { useEffect, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { Button, Card } from 'reactstrap'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'

export default function ListTable() {
    const navigate = useNavigate()
    const [data,setData]=useState([])
    const getList =()=>{

        _fetchApi('/api/getList',
        (res)=>{
            console.log(res)
            setData(res.results)
        },
        (err)=>{
            console.log(err)
        }
        )
    }
    useEffect(
        ()=>{
            getList()  
        },
        []
    )
  return (
    <div>
         <Card className="app_primary_card m-2 shadow p-4">
            {/* {JSON.stringify(data)} */}
        <h5 className="mb-3">List Documents</h5>
        <button className="mt-2 app_btn col-md-2" onClick={()=>navigate('/list-docs')}>
            <BsPlusLg /> New List
          </button>
        <SearchBar />
        <table bordered>
    <thead>
        <tr>
            <th style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}>S/N</th>
            <th style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}>Applicant Type</th>
            <th style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}>Document Name</th>
            <th style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}>Description</th>
            <th style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}>Action</th>
            </tr>
    </thead>
    {
        data[0]?.map((i,index)=>(
    <tbody>
<tr>
    <td style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}>{index+1}</td>
<td style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}>{i.type_application}</td>
    <td style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}>{i.document_name}</td>
    <td style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}>{i.description}</td>
    <td style={{border:'1px solid #f1f1f1',width:'15%',textAlign:"center"}}><Button color='danger' size='sm'>Delete</Button></td>
</tr>
    </tbody>
        )
        )
    }
        </table>
        </Card>
    </div>
  )
}
