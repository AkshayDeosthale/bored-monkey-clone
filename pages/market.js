import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  useAddress,
  useDisconnect,
  useMarketplace,
  useMetamask,
  useNFTCollection,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import MarketHeader from "../components/MarketHeader";
import MarketBody from "../components/MarketBody";

const Market = () => {
  const router = useRouter();
  const address = useAddress();
  const marketplace = useMarketplace(
    process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS
  );
  // const marketplace = useMarketplace("0x2C89805B6E1183d96d294E63C6e97cF3b08f6638")
  const nftCollection = useNFTCollection(
    "0x75eEfE860803B1481E2415Bacc88ff23d5ec55a6"
  );
  const disconnect = useDisconnect();

  const [listings, setlistings] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (!address) {
      router.replace("/");
    }
  }, [address]);

  const getListing = async () => {
    try {
      if (!address) return;
      console.log("about to fetch list");
      const list = await marketplace.getActiveListings();
      console.log(list);
      setlistings(list);
      setloading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getListing();
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
