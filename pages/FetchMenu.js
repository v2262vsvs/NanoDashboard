import React,{useState} from 'react'
import { fetchBrainly } from '../lib/requests'
import BrainlyList from '../components/BrainlyList'
import MicrosoftList from '../components/MicrosoftList'
import PandatronList from '../components/PandatronList'
function FetchMenu({dataMicrosoft,dataShared,dataPandatron}) {
    const[show,setShow]= useState(false)
    const[show2,setShow2]= useState(false)
    const[show3,setShow3]= useState(false)
    const getDataFetch = (e) => {
      e.preventDefault()
      const data = null;
      (async ()=>{
        data = await fetchBrainly()
        console.log(data)
    })();
    }

  return (
    <div className='space-y-3 ml-3'>
        {show==false
                ?
                <button onClick={()=>setShow(true)} className=' cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400 '>
                    <div>Show All Brainly users data</div>
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
                <div className='space-y-2 '>{dataShared.data.map(user =>
                (
                    <div key={user.id}>
                        <BrainlyList
                            id={user.id}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            real_name={user.real_name}
                            is_stranger={user.is_stranger}
                            team_id={user.team_id}
                        />
                    </div>
                ))}</div>
                </>
            }

            {show2==false
                ?
                <button onClick={()=>setShow2(true)} className=' cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400 '>
                    <div>Show All Microsoft users data</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                :
                <>
                <button onClick={()=>setShow2(false)} className='cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400'>
                    <div>Close</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <div className='space-y-2 '>{dataMicrosoft.data.map(user =>
                (<>
                    <div key={user.id}>
                        <MicrosoftList
                            id={user.conv_id}
                            tenantId={user.conversation.tenantId}
                            real_name={user.user.name}                  
                        />
                    </div>
                </>
                ))}</div>
                </>
            }
            {show3==false
                ?
                <button onClick={()=>setShow3(true)} className=' cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400 '>
                    <div>Show All Pandatron users data</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                :
                <>
                <button onClick={()=>setShow3(false)} className='cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400'>
                    <div>Close</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <div className='space-y-2 '>{dataPandatron.data.map(user =>
                (<>
                    <div key={user.id}>
                        <PandatronList
                            id={user.id}
                            team_id={user.team_id}
                            real_name={user.real_name}
                            email={user.email}
                            tz={user.tz}                        
                        />
                    </div>
                </>
                ))}</div>
                </>
            }
            
       

    </div>
  )
}

export default FetchMenu

