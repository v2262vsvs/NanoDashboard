import React,{useState} from 'react'
import UserRow from './UserRow'
import {useRecoilValue,useRecoilState} from "recoil"
   // const [Users,setUsers] = useRecoilState(usersState)
   import { ToastContainer, toast } from 'react-toastify';
   import 'react-toastify/dist/ReactToastify.css';
function Friday({ data5 }) {
    //const Users = useRecoilValue(usersState);
    //const users = Users.json()
    const[show,setShow]= useState(false)
    return (
        <div className='bg-pink-300 shadow-md rounded-md pb-4'>
            <ToastContainer
            position="top-left"
            autoClose={1000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            />
            <div className='text-center font-bold text-2xl'>Friday</div>
            {show==false
                ?
                <button onClick={()=>setShow(true)} className=' cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400'>
                    <div>Show</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                :
                <>
                <button onClick={()=>setShow(false)} className='cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400'>
                    <div>Close</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <div>{data5.map(user =>
                (
                    <div key={user.id}>
                        <UserRow
                            id={user.id}
                            day={user.day}
                            username={user.username}
                            email={user.email}
                            morninghours={user.morninghours}
                            morningminutes={user.morningminutes}
                            eveninghours={user.eveninghours}
                            eveningminutes={user.eveningminutes}
                            morningsession={user.morningsession}
                            eveningsession={user.eveningsession}
                            workspace={user.workspace}
                            team_id={user.team_id}
                        />
                    </div>
                
                ))}</div>
                </>
            }
        </div>
            
    )
}

export default Friday

