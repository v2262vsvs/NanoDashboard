import React from 'react'

function CulturedBrainList({id,first_name,  last_name,real_name,email,team_id}) {
  return (
    <div className='bg-gray-200 rounded-sm shadow-md w-fit flex'>
    <div><span className='font-bold'>id: </span>{id} ,</div>
    <div><span className='font-bold'>first_name: </span>{first_name} ,</div>
    <div><span className='font-bold'>last_name: </span>{last_name} ,</div>
    <div><span className='font-bold'>real_name: </span>{real_name} ,</div>
    <div><span className='font-bold'>email: </span>{email} ,</div>
    <div><span className='font-bold'>team_id: </span>{team_id}</div>
    </div>
  )
}

export default CulturedBrainList
