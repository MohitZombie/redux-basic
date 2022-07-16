import React from 'react'
import { useSelector } from 'react-redux/es/exports'

const Navbar = () => {
  const amount = useSelector(state=>state.amount)
  return (
    <div>
      <button>your Balane :{amount}</button>
    </div>
  )
}

export default Navbar
