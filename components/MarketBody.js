import React, { useEffect, useState } from "react";
import NFTtile from "./NFTtile";

const MarketBody = ({ list }) => {
  return (
    <>
      <section className="text-gray-600 body-font  ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              NFT Marketplace
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="flex flex-wrap -m-4 hover:transition-all duration-300">
            {list?.map((li, key) => (
              <NFTtile
                nftInfo={li}
                key={key}
                name={li.asset?.name}
                desc={li.asset?.description}
                image={li.asset?.image}
                attributes={li.asset?.attributes || []}
                uri={li.asset?.uri}
                address={li?.assetContractAddress}
              />
            ))}

            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketBody;
