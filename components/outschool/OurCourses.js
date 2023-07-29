"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import Rectangle_1085 from "../../public/uor_curses/Rectangle_1085.jpg"
import Rectangle_1086 from "../../public/uor_curses/Rectangle_1086.jpg"
import Rectangle_1087 from "../../public/uor_curses/Rectangle_1087.jpg"
import Rectangle_1088 from "../../public/uor_curses/Rectangle_1088.jpg"
import Rectangle_1089 from "../../public/uor_curses/Rectangle_1089.jpg"
import Rectangle_1090 from "../../public/uor_curses/Rectangle_1090.jpg"
import Rectangle_1091 from "../../public/uor_curses/Rectangle_1091.jpg"
import starSharp from "../../public/star-sharp.svg"
//


export default function OurCourses() {
  const classActive =
    "text-[#787878]flex text-lbase active:border-b active:border-b-bluviolet active:pb-1 active:text-bluviolet"
  const [tabsContent, setTabsContent] = useState("Top Rated")
  return (
    <section className="px-5 pb-10 pt-10 sm:pb-20">
      {/* <section className="py-20 sm:py-10"> */}
      {/* <section className="pb-20 pt-10 sm:pb-10 lg:px-5"> */}
      <div className="max-x-[1163.px] mx-auto lg:px-10">
        {/* section-title */}
        <h2 className="text-3xl font-semibold leading-normal tracking-[-0.088px] md:text-4xl lg:text-[44px]">
          Our Courses
        </h2>
        {/* Tabs */}
        <div>
          {/* Tabs Header  flex-wrap-перенос в слід рядок */}
          {/* <div className="mt-[30px] flex gap-10 md:flex-wrap md:gap-5 sm:justify-center "> */}
          <div className="mt-[30px] flex flex-wrap justify-start gap-5 md:gap-10">
            <button onClick={(e) => setTabsContent("Top Rated")} className={classActive}>
              Top Rated
            </button>
            <button onClick={(e) => setTabsContent("Development")} className={classActive}>
              Development
            </button>
            <button onClick={(e) => setTabsContent("Design")} className={classActive}>
              Design
            </button>
            <button onClick={(e) => setTabsContent("Music")} className={classActive}>
              Music
            </button>
            <button onClick={(e) => setTabsContent("Marketing")} className={classActive}>
              Marketing
            </button>
            <button onClick={(e) => setTabsContent("Business")} className={classActive}>
              Business
            </button>
            <button onClick={(e) => setTabsContent("Photography")} className={classActive}>
              Photography
            </button>
          </div>

          {/* Tabs Contents 1 */}
          {tabsContent === "Top Rated" && (
            //   <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-4">
              {/* Tab item 1*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1085} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 2*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1085} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 3*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1085} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 4*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1085} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          )}
          {/* Tabs Contents 2 */}
          {tabsContent === "Development" && (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Tab item 1*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1087} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 2*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1090} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 3*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1091} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 4*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1086} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          )}
          {/* Tabs Contents 3 */}
          {tabsContent === "Design" && (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Tab item 1*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1086} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 2*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1086} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 3*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1086} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 4*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1086} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          )}
          {/* Tabs Contents 4 */}
          {tabsContent === "Music" && (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Tab item 1*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1085} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 2*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1087} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 3*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1087} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 4*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1087} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          )}
          {/* Tabs Contents 5 */}
          {tabsContent === "Marketing" && (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Tab item 1*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 2*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 3*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 4*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          )}
          {/* Tabs Contents 5 */}
          {tabsContent === "Business" && (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Tab item 1*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 2*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 3*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 4*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          )}
          {/* Tabs Contents 6 */}
          {tabsContent === "Photography" && (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* <h3>Photography</h3> */}
              {/* Tab item 1*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 2*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 3*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Tab item 4*/}
              <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,151,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image className="h-auto w-full max-w-full" src={Rectangle_1088} alt={"img"} />
                </div>
                <div className="p-4">
                  <span className="rounded-md bg-[#EAEAEA] px-4 py-2 text-lighgrey">Artificial Intelligence</span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-[22px] tracking-[-0.036px]">
                    Modern Artificial Intelligence with zero coding
                  </h3>
                  <span className="mt-1 text-xs font-normal leading-[-0.029px] ">Jhon David</span>
                  <div className="mt-1 flex justify-start gap-2 ">
                    <span className="flex justify-start gap-0">
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                      <Image src={starSharp} width={16} height={16} alt={"img"} />
                    </span>
                    <span className="text-xs font-semibold leading-normal tracking-[-0.029px] text-black">4.9</span>
                  </div>
                  {/* <span className="my-2 block">5555</span> */}
                  <div className="mt-1 flex justify-between">
                    <span className="tracking-[-0.048px]leading-normal font-bold uppercase text-bluviolet">
                      $ 49.99
                    </span>
                    <Link
                      href="#"
                      className=" rounded-md border border-solid border-bluviolet px-[18px] py-[6px] text-xs font-semibold text-bluviolet transition-colors hover:bg-bluviolet hover:text-white"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
