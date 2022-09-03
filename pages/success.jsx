import { useEffect, useState } from 'react'
import Link from 'next/link'

import { useStateContext } from '../context/StateContext'
import { runConfetti } from '../Lib/utils'

import { BsBagCheckFill } from 'react-icons/bs'

export default function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    runConfetti()
  }, [])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email for the receipt.</p>
        <p className='description'>
          If you have any questions, please email
          <a className='email' href='mailto:orders@example.com'>
            orders@example.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}
