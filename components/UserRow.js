import React, { useRef, useState } from 'react'

//import {useState} from "react"
import { onDelete, getUsers, getUser,updateUser } from '../lib/requests'
import { useRecoilState } from "recoil"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserRow({ id,day, username, email, morningminutes, morninghours, eveninghours, eveningminutes, morningsession, eveningsession, workspace,team_id }) {
    const notifyDelete = () => toast.success('User deleted!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    
    const notifyUpdate = () => toast.success('User updated!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });


    // const [User,setUser] = useState(null)
    //const [Users, setUsers] = useRecoilState(usersState)
    const [User, setUser] = useState(null)
    
    const morninghoursRef = useRef(morninghours);
    const morningminutesRef = useRef(morningminutes);
    const eveninghoursRef = useRef(eveninghours);
    const eveningminutesRef = useRef(eveningminutes);
    const morningsessionRef = useRef(morningsession);
    const eveningsessionRef = useRef(eveningsession);
    const dayRef = useRef(day)

    const [morningh, setMorningh] = useState(morninghours);
    const [morningm, setMorningm] = useState(morningminutes);
    const [eveningh, setEveningh] = useState(eveninghours);
    const [eveningm, setEveningm] = useState(eveningminutes);
    const [mornings, setMornings] = useState(morningsession);
    const [evenings, setEvenings] = useState(eveningsession);






    const deleteUser = async (e) => {
        e.preventDefault()
        const res = await onDelete(e, id, day)
       
        if (res===null){ notifyDelete()}

        //setUsers(getUsers(e, day))
        setUser(getUser(e, id, day))
    }
    const update = async (e) => {
        e.preventDefault();
        const res = await updateUser(e,id,day,username,email,workspace,morningh,morningm,eveningh,eveningm,mornings,evenings,team_id)
        //if (res.ok){notifyUpdate();}
        notifyUpdate()
        //setUser(getUser(e, id,dayRef.current.value))
    }

    return (
        <div className='bg-gray-50 rounded-2xl shadow-lg outline-none m-2 p-2'>
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

            {User ?
                (
                    <>

                    </>
                )
                : (
                    <>
                        <div className='flex p-1'>
                            <div className='bg-gray-200 rounded-md '>User id: </div>
                            <div>{id}</div>
                        </div>
                        <div className='columns-3'>
                            <div><span className='bg-gray-200 rounded-md px-1'>Name:</span>{username}</div>
                            <div><span className='bg-gray-200 rounded-md px-1'>Email:</span>{email}</div>
                            
                            <div><span className='bg-gray-200 rounded-md px-1'>Team:</span>{workspace}</div>
                            <div><span className='bg-gray-200 rounded-md px-1'>Team_id:</span>{team_id}</div>
                            
                            <div className='flex '>
                                <div className='bg-gray-200 rounded-l-md px-1 border-r-2'>Morning hours:</div>
                                <input value={morningh} onChange={event => setMorningh(event.target.value)}   placeholder={morninghours} className='w-1/12 outline-none px-1 bg-gray-200 rounded-r-md hover:scale-105'/>
                            </div>
                            <div className='flex'>
                                <div className='bg-gray-200 rounded-l-md px-1 border-r-2'>Morning minutes:</div>
                                <input value={morningm} onChange={event => setMorningm(event.target.value)}   placeholder={morningminutes} className='w-1/12  outline-none px-1 bg-gray-200 rounded-r-md hover:scale-105'/>
                            </div>
                            <div className='flex'>
                                <div className='bg-gray-200 rounded-l-md px-1 border-r-2'>Evening hours:</div>
                                <input value={eveningh} onChange={event => setEveningh(event.target.value)}    placeholder={eveninghours} className='w-1/12 outline-none px-1 bg-gray-200 rounded-r-md hover:scale-105'/>
                            </div>
                            <div className='flex'>
                                <div className='bg-gray-200 rounded-l-md px-1 border-r-2'>Evening minutes:</div>
                                <input value={eveningm} onChange={event => setEveningm(event.target.value)}  placeholder={eveningminutes} className='w-1/12 outline-none px-1 bg-gray-200 rounded-r-md hover:scale-105'/>
                            </div>
                            <div className='flex'>
                                <div className='bg-gray-200 rounded-l-md px-1 border-r-2'>Morning session :</div>
                                <input value={mornings} onChange={event => setMornings(event.target.value)}  placeholder={morningsession} className='outline-none px-1 bg-gray-200 rounded-r-md hover:scale-105'/>
                            </div>
                            <div className='flex '>
                                <div className='bg-gray-200 rounded-l-md px-1 border-r-2'>Evening session:</div>
                                <input value={evenings} onChange={event => setEvenings(event.target.value)}  placeholder={eveningsession} className='outline-none px-1 bg-gray-200 rounded-r-md hover:scale-105'/>
                            </div>
                            <div><span className='bg-gray-200 rounded-md px-1'>Day:</span>{day}</div>


                        </div>
                        <button onClick={(e) => deleteUser(e)} className='bg-red-400 rounded-md p-1 outline-none hover:scale-105'>delete</button>
                        <button type="submit" onClick={(e)=>update(e)} className='ml-1 place-self-center bg-yellow-300 rounded-md p-1 hover:scale-105 hover:bg-yellow-400'>update</button>

                    </>
                )}

        </div >
    )
}

export default UserRow