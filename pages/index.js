import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import MainPart from "../components/MainPart";
import Footer from "../components/Footer";
import {useEffect} from 'react'

const Home = () => {

  return (
    <div className="w-screen  bg-black text-white border-b-[15px] border-yellow-500">
      <Head>
        <title>BAYC</title>
        <link rel="icon" href="/titleIcon.ico" />
      </Head>

      <Header />
      <MainPart />
      <Footer />
    </div>
  );
};

export default Home;
