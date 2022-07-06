import React from 'react'
import UserRow from './UserRow'

function AllUsers({alldata}) {
  return (
    <div className='bg-blue-200 shadow-md rounded-md'>
            <div className='text-center font-bold text-2xl'>AllUsers</div>
            <div>{alldata && alldata.map(user =>
            (
                <div key={user.id}>
                    <UserRow
                        id={user.id}
                        username={user.username}
                        email={user.email}
                        morninghours={user.morninghours}
                        morningminutes={user.morningminutes}
                        eveninghours={user.eveninghours}
                        eveningminutes={user.eveningminutes}
                        morningsession={user.morningsession}
                        eveningsession={user.eveningsession}
                        day={user.day}
                        workspace={user.workspace}
                        team_id={user.team_id}
                    />
                </div>
            ))}</div>
        </div>
  )
}

export default AllUsers