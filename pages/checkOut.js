import React from 'react'
import Link from 'next/link'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Checkout = ({cart, subTotal, addToCart, removeFromCart}) => {
  return (
    <div className='container m-auto mx-10 mt-2'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>

      <div className='mx-auto flex'>
      <div className="relative mb-4 w-1/2 mx-2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className="relative mb-4 w-1/2 mx-2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>

      <div className="relative mb-4 mx-2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className='mx-auto flex'>
      <div className="relative mb-4 w-1/2 mx-2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Phone Number</label>
        <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className="relative mb-4 w-1/2 mx-2">
        <label htmlFor="pin" className="leading-7 text-sm text-gray-600">Pin Code</label>
        <input type="number" id="pin" name="pin" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>

      <h2 className='font-semibold text-xl'>2. Review Cart Items</h2>
      <div className="sidecart px-8 py-1 rounded border border-orange-500">         
            
            <ol className='list-decimal font-semibold'>
              {Object.keys(cart).length==0 && <div className='my-4'>Cart is empty!</div>}
             {Object.keys(cart).map((k)=>{return <li key={k}>
                  <div className="item flex my-5">
                    <div className='w-2/3'>{cart[k].name}</div>
                    <div className='flex items-center justify-center text-lg'><AiOutlineMinusSquare onClick={()=>{removeFromCart(k, 1 ,cart[k].price, cart[k].name, cart[k].size, cart[k].varient)}} className='cursor-pointer' /><span className='mx-2 text-base'>{cart[k].qty}</span><AiOutlinePlusSquare onClick={()=>{addToCart(k, 1 ,cart[k].price, cart[k].name, cart[k].size, cart[k].varient)}} className='cursor-pointer' /></div>
                  </div>
                </li>})}
            </ol>
            <div className='total font-bold text-xl'>Subtotal : ₹{subTotal}</div>                        
          </div>
          <button className="flex font-medium mt-2 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-base"><BsFillBagCheckFill className='m-1' />Pay ₹{subTotal}</button>
    </div>

  )
}

export default Checkout