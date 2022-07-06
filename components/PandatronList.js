import React from 'react'


function PandatronList({id,real_name,team_id,email,tz}) {
  return (
    <>
    <div className='bg-gray-200 rounded-sm shadow-md w-fit flex'>
    <div><span className='font-bold'>id: </span>{id} ,</div>
    <div><span className='font-bold'>real_name: </span>{real_name} ,</div>
    <div><span className='font-bold'>email: </span>{email} ,</div>
    <div><span className='font-bold'>team_id: </span>{team_id}</div>
    <div><span className='font-bold'>tz: </span>{tz} ,</div>
    </div>
    </>
  )
}


export default PandatronList