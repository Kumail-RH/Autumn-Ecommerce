// import React,{useState, useContext} from 'react'
import React, { useContext } from 'react';
// import Link
import { Link } from 'react-router-dom';
//import icons
import { BsArrowRight } from 'react-icons/bs'
import { FaRegTrashCan } from "react-icons/fa6";
// import components
import CartItem from '../components/CartItem';
// imort Sidebar Context
import { SidebarContext } from '../contexts/SidebarContext';
// import Cart Context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  // console.log(useContext(CartContext));

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vx] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold '>Shopping Bag <span className='text-red-600'>{itemAmount}</span></div>
        {/* icons */}
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <BsArrowRight className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[350px] max-sm:h-[350px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span> $ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div onClick={() => clearCart()} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FaRegTrashCan />
          </div>
        </div>
        <Link to='/' className='bg-gray-200 flex p-4 justify-center items-center text-black w-full font-medium'>View cart</Link>
        <Link to='/' className='bg-gray-600 flex p-4 justify-center items-center text-white w-full font-medium'>Checkout</Link>
      </div>
    </div>
  )
}

export default Sidebar
