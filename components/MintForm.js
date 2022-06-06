import React, { useState } from 'react'
import { Formik } from 'formik';


const MintForm = () => {
    const [minting, setminting] = useState(false)
    const [mintComplete, setmintComplete] = useState(false)
  return (
    <>
    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle text-black">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Enter details below to MINT a NFT!</h3>
    <Formik
    initialValues={{ name: '', description: '' ,amount:0 ,image:{} }}
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
        <form className='flex flex-col space-y-3 p-2' >
<input type="text" className='p-2 border focus:outline-none rounded-md' placeholder='Enter NFT name' />
<input type="text"  className='p-2 border focus:outline-none rounded-md' placeholder='Enter NFT description'/>
<input type="file" />
<div className="modal-action">
    {!mintComplete &&  <label  className="btn bg-green-500 hover:bg-green-600 text-white">{minting ? 'Minting...' :'Submit'}</label>}
      <label for="my-modal-6" className="btn bg-red-500 hover:bg-red-600 text-white">{ mintComplete ? 'Completed' : 'Cancel'}</label>
    </div>
        </form>
    </Formik>
    
  </div>
</div>
    </>
  )
}

export default MintForm