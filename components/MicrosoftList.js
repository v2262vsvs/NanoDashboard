import React from 'react'

function MicrosoftList({id,tenantId,real_name}) {
  return (
    <div>
    <div className='bg-gray-200 rounded-sm shadow-md w-fit '>
    <div><span className='font-bold'>id: </span>{id} ,</div>
    <div className='flex'>
    <div><span className='font-bold'>name: </span>{real_name} ,</div>
    <div><span className='font-bold'>tenantId: </span>{tenantId} ,</div>
    </div>
    </div>
    </div>
  )
}

export default MicrosoftList