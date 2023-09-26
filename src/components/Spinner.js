import React from 'react'
import loading from "./loading.gif";
export default function Spinner() {
  return (
    <div className='text-center'>
        <img className='my-3' src={loading} width={100} height= {100} alt="loading"  />
    </div>
  )
}
