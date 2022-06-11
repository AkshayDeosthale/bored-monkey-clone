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
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
