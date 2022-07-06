import React, { useRef,useState } from 'react'
import DayDropdown from "./DayDropdown"
import WorkspaceDropdown from "./WorkspaceDropdown"
import { useRecoilState } from "recoil"
import { dayState, workspaceState } from "../atoms/userAtom"
import { addUser, addUserWeekDays } from '../lib/requests'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

// const [Day,setDay] = useRecoilState(dayState)
function Dashboard() {
    const notifySuccess = () => toast.success('User added!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const [Day, setDay] = useRecoilState(dayState)
    const [Worksapce, setWorkspace] = useRecoilState(workspaceState)

    const idRef = useRef(null);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const morninghoursRef = useRef(null);
    const morningminutesRef = useRef(null);
    const eveninghoursRef = useRef(null);
    const eveningminutesRef = useRef(null);
    const morningsessionRef = useRef('');
    const eveningsessionRef = useRef('');
    const team_idRef = useRef('');

    const submit =  e => {
        e.preventDefault();
        idRef.current.value
        if (Day === 'Weekdays'){
            addUserWeekDays(e,idRef.current.value, Day, nameRef.current.value,emailRef.current.value,Worksapce,morninghoursRef.current.value,morningminutesRef.current.value,eveninghoursRef.current.value,eveningminutesRef.current.value,morningsessionRef.current.value,eveningsessionRef.current.value,team_idRef.current.value)
            notifySuccess();
        }else{
            const res =  addUser(e,idRef.current.value, Day, nameRef.current.value,emailRef.current.value,Worksapce,morninghoursRef.current.value,morningminutesRef.current.value,eveninghoursRef.current.value,eveningminutesRef.current.value,morningsessionRef.current.value,eveningsessionRef.current.value,team_idRef.current.value)
            //if (res.ok){ notifySuccess();}
            notifySuccess()
        }
        
    }
    return (
        <>
            <div className='flex  rounded-md bg-yellow-200 shadow-lg'>
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
                <div className='m-2 p-2 space-y-2 grow  border-r-2 '>
                    <div className='flex  space-x-2 max-w-7xl'>
                        <input ref={idRef} placeholder="User id:" className='outline-none p-1 bg-neutral-200 rounded-md ' />
                        <input ref={nameRef} placeholder="Name:" className='outline-none p-1 bg-neutral-200 rounded-md ' />
                        <input ref={emailRef} placeholder="Email:" className='outline-none p-1 bg-neutral-200 rounded-md ' />
                        <input ref={team_idRef} placeholder="Team_id:" className='outline-none p-1 bg-neutral-200 rounded-md ' />
                        <div><DayDropdown /></div>
                        <div><WorkspaceDropdown /></div>
                    </div>
                    <div className='flex-col-2 justify-between  space-y-2 grow max-w-7xl'>
                        <div className='space-x-2'>
                            <input ref={morninghoursRef} placeholder="Morning hours:" className='outline-none p-1 bg-neutral-200 rounded-md ' />
                            <input ref={morningminutesRef} placeholder="Morning minutes:" className='outline-none p-1 bg-neutral-200 rounded-md ' />
                            <input ref={morningsessionRef} placeholder="Morning session:" className='outline-none p-1 bg-neutral-200 rounded-md ' />
                        </div>
                        <div className='space-x-2'>
                            <input ref={eveninghoursRef} placeholder="Evening hours:" className='outline-none p-1 bg-gray-300 rounded-md ' />
                            <input ref={eveningminutesRef} placeholder="Evening minutes:" className='outline-none p-1 bg-gray-300 rounded-md ' />
                            <input ref={eveningsessionRef} placeholder="Evening session:" className='outline-none p-1 bg-gray-300 rounded-md ' />
                        </div>
                    </div>
                </div>
                <div className='flex m-2 p-2 space-y-2'>
                    <button type="submit" onClick={(e)=>submit(e)}  className='place-self-center bg-green-300 rounded-md p-2 hover:scale-105 hover:bg-green-400'>Add User</button>
                </div>
            </div>
        </>
    )
}

export default Dashboard