import React from 'react'

function Apps() {
  return (
    <div>
        <FormWrapper
        steps={["Create Reservation Details", "Hotel Bokking Details","Transport Reservation"]}
        handleSubmit={handleSubmit}
      ></FormWrapper>
    </div>
  )
}

export default Apps