import React from 'react'
import {AiOutlineCopy} from 'react-icons/ai'
import MintForm from './MintForm'

const MarketHeader = ({address,disconnect}) => {
  return (
  <>
{/* modal */}
<MintForm/>

  {/* body */}
    <header className=" body-font bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     
    <div className="dropdown px-4 rounded-md hover:backdrop-invert transition-all duration-300">
<div tabIndex="0" className='cursor-pointer flex items-center'>
<img  src="/bayc-footer.webp" alt="profile picture" className='m-1 h-14 w-14' />
  <label className='cursor-pointer'>Hello</label>
</div>
 
  <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto text-black">
    <li className='hidden md:inline-flex'  onClick={() => {navigator.clipboard.writeText(address)}}><a>Your address : {address} <AiOutlineCopy /></a></li>
    <li className='hover:bg-red-500 hover:text-white hover:transition-all duration-100 ' onClick={disconnect}><a>Log out</a></li>
  </ul>
</div>

      <nav className="md:ml-auto  flex flex-wrap items-center text-base justify-center">
        <a className="mr-5  hover:text-gray-900 transition-all duration-300 cursor-pointer" ><label for="my-modal-6" className='cursor-pointer'>Mint your own NFT</label></a>
        <a className="mr-5 hover:text-gray-900 transition-all duration-300 cursor-pointer">Your owned NFTs</a>
      </nav>
      
    </div>
  </header>
  </>
  )
}

export default MarketHeader



