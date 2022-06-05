import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  useAddress,
  useDisconnect,
  useMarketplace,
  useMetamask,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";

const Market = () => {
  const router = useRouter();
  const address = useAddress();
  const marketplace = useMarketplace(
    process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS
  );

  const [listings, setlistings] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (!address) {
      router.replace("/");
    }
  }, [address]);

  useEffect(() => {
    getListing();
  }, []);

  const getListing = async () => {
    try {
      if (!address) return;
      const list = await marketplace.getActiveListings();
      console.log(list);
      setlistings(list);
      setloading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="bg-black text-white h-auto" data-aos="fade-up">
          <Head>
            <title>BAYC Market</title>
            <link rel="icon" href="/titleIcon.ico" />
          </Head>
          This is market page
        </div>
      )}
    </>
  );
};

export default Market;
