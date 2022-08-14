import React from "react";
import Stat from "../components/Stat";
import Trophy from "../components/Trophy";
import Chart from "../components/Chart";
import ListItem22 from "../components/ListItem22";
import SocialLinks from "../components/SocialLinks";
import RecentReviews from "../components/RecentReviews";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import ListItemOrder from "../components/ListItemOrder";
import ListItemOrderTitle from "../components/ListItemOrderTitle";
import AboutMe from "../components/AboutMe"
import Pagination from "../components/Pagination";
import stat1 from "../assets/stat1.png"
import stat2 from "../assets/stat2.png"
import stat3 from "../assets/stat3.png"
import stat4 from "../assets/stat4.png"
import stat5 from "../assets/stat5.png"
import DropDownMenu from "../components/DropDownMenu";

const DashBoard = () => {
  const commonFlex = "flex align-middle justify-center p-3";
  return (
    <div className="p-3 px-8 flex flex-col justify-center align-middle gap-4 bg-[#2b2e36] ">
      <div className="mx-auto w-full grid md:grid-cols-5 justify-center align-middle gap-5 ">
        <div className={`md:col-span-2 w-full  ${commonFlex} bg-[#32363f] `}>
          <Trophy />
        </div>
        <div className=" md:col-span-3 w-full grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="col-span-2 md:col-span-3 text-left text-white italic">
            statistics
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className={`${commonFlex}  bg-[#32363f] `} >
              <Stat img={stat1} number={12345} color={"red"} text={"Views"}/>
            </div>
            <div className={`${commonFlex} bg-[#32363f] `}>
              <Stat img={stat2} number={12345} color={"green"} text={"Views"}/>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className={`${commonFlex} bg-[#32363f]  `}>
              <Stat img={stat3} number={12345} color={"indigo"} text={"Views"}/>
            </div>
            <div className={`${commonFlex}  bg-[#32363f] `}>
              <Stat img={stat4} number={12345} color={"green"} text={"Views"}/>
            </div>
          </div>
          <div className={`${commonFlex} col-span-2 md:col-span-1 rounded  bg-[#32363f] `}>
            <Stat img={stat5} number={12345} color={"red"} text={"Views"}/>
          </div>
        </div>
      </div>
      <div className="mx-auto grid md:grid-cols-5 place-content-stretch  gap-2 w-full  ">
        <div className="w-full md:col-span-3 justify-between align-center flex flex-col gap-2">
          <div className="w-full bg-[#32363f] ">
            <Chart />
          </div>
          <div className="w-full mt-4" >
            <RecentReviews />
          </div>
          <div className="w-full   grid md:grid-cols-3 gap-3  text-white">
            <div className=" bg-[#32363f] ">
              <SocialLinks
                icon={<FaFacebookF />}
                social="facebook"
                color="bg-blue-700"
                likes="40000"
              />
            </div>
            <div className=" bg-[#32363f] " >
              <SocialLinks
                icon={<FaTwitter />}
                social="linkedin"
                color=" bg-cyan-500"
                likes="10000"
              />
            </div>
            <div className="bg-[#32363f] ">
              <SocialLinks
                icon={<FaGooglePlusG />}
                social="Google"
                color="bg-red-500"
                likes="40000"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:col-span-2 justify-center align-middle flex flex-col gap-3 ">
          <div className="w-full h-full bg-[#32363f] text-white  p-4">
            <div className="grid grid-cols-2 px-3 ">
              <div className="text-left font-extrabold">Top manu list</div>
              <div className="text-right text-red-700">View more</div>
            </div>
            {[...Array(7)].map((e) => (
              <ListItem22 />
            ))}
          </div>
          <div className="bg-[#32363f]" >
            <AboutMe />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row justify-between text-white" >
        <div>Recent order list</div>
          <div className="px-6 rounded">
            <DropDownMenu />
          </div>
        </div>
        <div className="w-full text-white">
          <ListItemOrderTitle />
        {
          [...Array(5)].map((e, index)=><ListItemOrder key={index} id={index+1}/>)
        }
        </div>
      </div>
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default DashBoard;
