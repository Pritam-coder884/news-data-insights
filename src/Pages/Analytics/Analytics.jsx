import React,{useState} from 'react'
import Modal from '../../Components/Common/Modal'

const Analytics = () => {
  const [opens,setOpen]=useState(false)
  return (
    <div>
      <h1 onClick={()=>setOpen(true)}>Analytics</h1> 
      <Modal open={opens} closeModal={()=>setOpen(false)}>
        <div>
        <button>click</button>
        </div>
      </Modal>
    </div>
  )
}

export default Analytics