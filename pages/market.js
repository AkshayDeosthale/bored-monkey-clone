import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useAddress, useDisconnect, useMarketplace } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
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

  const [list, setlist] = useState([]);

  const getListings = async () => {
    try {
      if (!address) return;

      const list = await marketplace.getActiveListings();

      setlist(list);

      setloading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getListings();
  }, []);

  return (
    <div className=" text-white h-auto" data-aos="fade-up">
      <Head>
        <title>BAYC Market</title>
        <link rel="icon" href="/titleIcon.ico" />
      </Head>
      <MarketHeader address={address} disconnect={disconnect} />
      {list.length === 0 ? (
        <p className="text-black text-center text-2xl mt-28">
          The contracts are loading , please wait...
        </p>
      ) : (
        <MarketBody list={list} />
      )}
    </div>
  );
};

export default Market;
