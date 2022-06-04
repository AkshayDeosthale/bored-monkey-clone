import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const welcom = () => {
  const metamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="flex h-full">
      <div className="flex flex-col h-full w-3/4  flex-wrap border-b-2 ">
        <p className="text-4xl font-bold italic p-4">
          Welcome to bored ape yatch club
        </p>
        <div className="px-2">
          {address ? (
            <button
              className="bg-yellow-300 w-full text-black py-4 rounded-md font-bold hover:bg-yellow-600 transition-all duration-500"
              onClick={disconnect}
            >
              DISCONNECT WALLET
            </button>
          ) : (
            <button
              className="bg-yellow-300 w-full text-black py-4 rounded-md font-bold hover:bg-yellow-600 transition-all duration-500"
              onClick={metamask}
            >
              CONNECT WALLET
            </button>
          )}
        </div>
      </div>
      <div className="w-1/4 h-full flex  justify-center items-center animate-pulse hover:bg-white hover:text-black transition-all duration-500">
        <p className="-rotate-90 flex space-x-2 items-center">
          <span>
            <AiOutlineArrowLeft />
          </span>
          {"  "}
          <span>Mint</span>
          <span>Your</span>
          <span>NFT</span>
        </p>
      </div>
    </div>
  );
};

export default welcom;
