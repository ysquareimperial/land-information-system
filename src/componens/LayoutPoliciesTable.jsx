import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { Card } from 'reactstrap'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'

function LayoutPoliciesTable() {
  const navigate = useNavigate()
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <center>
          <h5 className="mb-3">Layout Policies Table</h5>
        </center>
        <button
          className="mt-2 app_btn col-md-2"
          onClick={() => navigate('/layoutl-policies-form')}
        >
          <BsPlusLg /> Add New
        </button>
        <SearchBar />

        <table bordered>
          <thead>
            <tr>
              <th
                style={{
                  border: '1px solid #f1f1f1',
                  width: '15%',
                  textAlign: 'center',
                }}
              >
                Layout Number
              </th>
              <th
                style={{
                  border: '1px solid #f1f1f1',
                  width: '15%',
                  height: '100px',
                  textAlign: 'center',
                }}
              >
                Policy Item ID
              </th>
              <th
                style={{
                  border: '1px solid #f1f1f1',
                  width: '15%',
                  height: '100%',
                  textAlign: 'center',
                }}
              >
                Policy Name
              </th>
              <th
                style={{
                  border: '1px solid #f1f1f1',
                  width: '15%',
                  height: '100%',
                  textAlign: 'center',
                }}
              >
                Item Description
              </th>
              <th
                style={{
                  border: '1px solid #f1f1f1',
                  width: '15%',
                  height: '100%',
                  textAlign: 'center',
                }}
              >
                Item Value
              </th>
              <th
                style={{
                  border: '1px solid #f1f1f1',
                  width: '15%',
                  height: '100%',
                  textAlign: 'center',
                }}
              >
                Action
              </th>
              {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</th> */}
              {/* <th style={{border:'1px solid #f1f1f1',width:'20%',height:"100%",textAlign:"center"}}>Length Of Term Required</th> */}
            </tr>
          </thead>
        </table>
      </Card>
    </div>
  )
}

export default LayoutPoliciesTable

