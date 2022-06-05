import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { useNFTDrop, useEditionDrop } from "@thirdweb-dev/react";
import { useRouter } from "next/router";

const welcom = () => {
  const router = useRouter();
  const metamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  const nftDrop = useEditionDrop("0xBa66F405b0aC66c9f5E3c0Eb4086f01Fc40E86DB");

  const mint = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const handleMarket = () => {
    if (address) {
      router.push("/market");
    } else {
      alert("You need to login first");
    }
  };

  return (
    <div className="flex h-full ">
      <div className="flex flex-col h-full w-3/4  flex-wrap border-b-2 ">
        <p className="text-4xl font-bold italic p-4">
          Welcome to bored ape yatch club
        </p>
        <div className="px-2">
          {address ? (
            <div className="flex justify-around items-center">
              <button
                className="bg-red-500  text-white py-4 px-2 rounded-md font-bold hover:bg-red-600 transition-all duration-500 active:scale-95"
                onClick={disconnect}
              >
                DISCONNECT
              </button>
              <button
                onClick={mint}
                className="bg-green-500 py-4 px-2 text-white rounded-md hover:bg-green-600 transition-all duration-500 font-bold  active:scale-95"
              >
                MINT
              </button>
            </div>
          ) : (
            <>
              <button
                className="bg-yellow-300 w-full text-black py-4 rounded-md font-bold hover:bg-yellow-600 transition-all duration-500 active:scale-95"
                onClick={metamask}
              >
                CONNECT WALLET
              </button>
            </>
          )}
        </div>
      </div>
      <div
        onClick={handleMarket}
        className="active:scale-90 w-1/4 cursor-pointer h-full flex  justify-center items-center animate-pulse hover:bg-white hover:text-black transition-all duration-500"
      >
        <p className="-rotate-90 flex space-x-2 items-center">
          <span>
            <AiOutlineArrowLeft />
          </span>
          {"  "}
          <span>Visit</span>
          <span>Market</span>
        </p>
      </div>
    </div>
  );
};

export default welcom;
