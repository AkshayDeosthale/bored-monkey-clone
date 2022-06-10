import React from 'react'
import Attributes from './Attributes'

const NFTtile = ({name,desc,image,attributes,uri}) => {
    console.log('attributes',attributes);
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2 hover:shadow-lg hover:transition-all duration-300">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 hover:scale-105 hover:transition-all duration-300" src={image}/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
           
            <p className="mb-4">{desc}</p>
            <div className="inline-flex space-x-4 ">
             {
                attributes?.map((att,key)=> 
                    <Attributes key={key} value={att?.value} />
                )
             }
            </div>
          </div>
        </div>
      </div>
  )
}

export default NFTtile