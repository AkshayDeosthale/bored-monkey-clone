import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  useAddress,
  useDisconnect,
  useMarketplace,
  useMetamask,
  useNFTCollection,
} from "@thirdweb-dev/react";
import  {useRouter}  from "next/router";
import MarketHeader from "../components/MarketHeader";
import MarketBody from "../components/MarketBody";

const Market = () => {
  
  
  const router = useRouter();
  const address = useAddress();
  


  const marketplace = useMarketplace(
    process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS
  );



  useEffect(() => {
    if (!address) router.replace("/");
  }, [address]);

  

 
const disconnect = useDisconnect();
const [loading, setloading] = useState(false);



const getListings = async () => {
  try {
    if (!address) return;

    const list = await marketplace.getActiveListings();
    console.log(list);
    
    setloading(false);
  } catch (err) {
    console.error(err);

  }
};
  useEffect(() => {
    getListings();
  }, []);

  return (
    <>
      {loading ? (
        <div class=" h-screen flex items-center justify-center ">
          <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin shadow-md shadow-blue-500"></div>
        </div>
      ) : (
        <div className=" text-white h-auto" data-aos="fade-up">
          <Head>
            <title>BAYC Market</title>
            <link rel="icon" href="/titleIcon.ico" />
          </Head>
          <MarketHeader address={address} disconnect={disconnect} />
          <MarketBody />
        </div>
      )}
    </>
  );
};

export default Market;
