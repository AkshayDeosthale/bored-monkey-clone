import React, { useEffect, useState } from 'react'
import NFTtile from './NFTtile'

const MarketBody = ({list}) => {
  const [loading, setloading] = useState(true);


useEffect(() => {
  if (list) {
    setloading(false)
  }
}, [])

//console.log(list);


  return (
    <>
    {loading ? <div class=" h-screen flex items-center justify-center ">
          <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin shadow-md shadow-blue-500"></div>
        </div> : 
        <section className="text-gray-600 body-font  ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20"  >
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">NFT Marketplace</h1>
      <p  className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4 hover:transition-all duration-300">
      {console.log('list',list)}
      {
        list?.map((li ,key)=>  <NFTtile key={key} name={li.asset?.name} desc={li.asset?.description} image={li.asset?.image} attributes={li.asset?.attributes || []} uri={li.asset?.uri}  />)
      }
      
      <div>
     
      </div>
    </div>
  </div>
</section> }
    </>
   
  )
}

export default MarketBody