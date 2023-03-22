import React from 'react'
import Link from 'next/link'
import { useRef } from 'react';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
const toggleCart = ()=>{
  if(ref.current.classList.contains('translate-x-full')){
   ref.current.classList.remove('translate-x-full') 
   ref.current.classList.add('translate-x-0')
  }
  else if(!ref.current.classList.contains('translate-x-full')){
    ref.current.classList.remove('translate-x-0') 
    ref.current.classList.add('translate-x-full')
   }
}
const ref = useRef()

  return (
    <div>

      <div className="text-gray-600 body-font shadow-md bg-orange-50 w-screen sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          
            <Link href={"/"} className="w-28  flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"><img src="/adhikarylogo.png" alt="" /></Link>
          
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={"/tshirt"} className="mr-5 hover:text-gray-900">Tshirts</Link>
            <Link href={"/hoodies"} className="mr-5 hover:text-gray-900">Hoodies</Link>
            <Link href={"/sticker"} className="mr-5 hover:text-gray-900">Stickers</Link>
            <Link href={"/mugs"} className="mr-5 hover:text-gray-900">Mugs</Link>
          </nav>
          <div className="account absolute right-10 top-2 mx-10 text-3xl cursor-pointer"><Link href={"/login"}><MdAccountCircle/></Link></div>

          <div onClick={toggleCart} className="cart absolute right-0 top-2 mx-10 text-3xl cursor-pointer"><AiOutlineShoppingCart />
          </div>

          <div ref={ref} className="sidecart w-72 absolute top-0 right-0 bg-orange-100 px-8 py-10 transform transition-transform translate-x-full">
            <h2 className='font-bold text-xl text-center'>Shoping Cart</h2>
            <span onClick={toggleCart} className="absolute top-5 right-7 cursor-pointer text-2xl"><AiFillCloseCircle /></span>
            <ol className='list-decimal font-semibold'>
              {Object.keys(cart).length==0 && <div className='my-4'>Cart is empty!</div>}
             {Object.keys(cart).map((k)=>{return <li key={k}>
                  <div className="item flex my-5">
                    <div className='w-2/3'>{cart[k].name}</div>
                    <div className='flex items-center justify-center w-1/3  text-lg'><AiOutlineMinusSquare onClick={()=>{removeFromCart(k, 1 ,cart[k].price, cart[k].name, cart[k].size, cart[k].varient)}} className='cursor-pointer' /><span className='mx-2 text-base'>{cart[k].qty}</span><AiOutlinePlusSquare onClick={()=>{addToCart(k, 1 ,cart[k].price, cart[k].name, cart[k].size, cart[k].varient)}} className='cursor-pointer' /></div>
                  </div>
                </li>})}
            </ol>
            <div className="flex">
              <Link href={'/checkOut'}><button className="flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-base"><BsFillBagCheckFill className='m-1' />Checkout</button></Link>
              <button onClick={clearCart} className="flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded text-base">Clear Cart</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar