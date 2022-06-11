import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { setUri } from "../store/uriSlice";
import Attributes from "./Attributes";

const NFTtile = ({ name, desc, image, attributes, uri, address }) => {
  const dispatch = useDispatch();

  console.log("uri", uri);

  return (
    <Link href={`/dynamic/${address}`}>
      <div
        className="p-4 lg:w-1/4 md:w-1/2 hover:shadow-lg hover:transition-all duration-300"
        onClick={() => dispatch(setUri(uri))}
      >
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 hover:scale-105 hover:transition-all duration-300"
            src={image}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {name}
            </h2>

            <p className="mb-4">{desc}</p>
            <div className="inline-flex space-x-4 ">
              {attributes?.map((att, key) => (
                <Attributes key={key} value={att?.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTtile;
