import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const router = useRouter();
  const NFT = useSelector((state) => state.uri);

  useEffect(() => {
    if (Object.keys(NFT).length === 0) {
      router.push("/market");
    }
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <button
        className=" hidden md:inline-block p-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md m-3"
        onClick={() => router.push("/market")}
      >
        BACK
      </button>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={NFT.uri?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              NFT NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {NFT.uri?.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600 ml-3">
                  {NFT.uri?.nftInfo?.buyoutCurrencyValuePerToken?.displayValue}
                </span>
                <span className="text-gray-600 ml-3">
                  {NFT.uri?.nftInfo?.buyoutCurrencyValuePerToken?.symbol}
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{NFT.uri?.desc}</p>

            <div className="flex">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
