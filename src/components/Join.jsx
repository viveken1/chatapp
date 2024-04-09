import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Join() {

  const navigate = useNavigate()
  const [userName,setUserName] = useState("")
  console.log(userName);


  const goToChat = () =>{
    if(userName){
      navigate('/chat',{state:userName})
    }
    else{
      toast.warning("Enter Your Username")
    }
  }

  return (
    <>
        <div style={{width:"600px",height:'650px',backgroundColor:"black",marginLeft:"400px"}} className='d-flex mt-4 justify-content-center align-items-center'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img style={{height:"400px"}} width={'500px'} className='img-fluid' src="https://static.vecteezy.com/system/resources/previews/006/876/021/original/chat-messages-smartphone-sms-on-mobile-phone-screen-man-woman-couple-chatting-messaging-using-chat-app-or-social-network-two-persons-cellphone-conversation-sending-messages-vector.jpg" alt="" />
                <h1 className='hh1'>CHATIKO</h1>
                <div>
                    <input type="text" onChange={(e)=>setUserName(e.target.value)} className='form-control' placeholder='Enter your Username'/>
                    <button onClick={goToChat} className="btn btn-success mt-2 w-100">Start your Chat</button>
                </div>
            </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Join