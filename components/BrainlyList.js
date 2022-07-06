import React from 'react'

function BrainlyList({id,first_name,  last_name,real_name,is_stranger,team_id}) {
  return (
    <>
    <div className='bg-gray-200 rounded-sm shadow-md w-fit flex'>
    <div><span className='font-bold'>id: </span>{id} ,</div>
    <div><span className='font-bold'>first_name: </span>{first_name} ,</div>
    <div><span className='font-bold'>last_name: </span>{last_name} ,</div>
    <div><span className='font-bold'>real_name: </span>{real_name} ,</div>
    <div><span className='font-bold'>is_stranger: </span>{is_stranger} ,</div>
    <div><span className='font-bold'>team_id: </span>{team_id}</div>
    </div>
    </>
  )
}

export default BrainlyList