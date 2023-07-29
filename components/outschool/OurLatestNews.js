import Image from "next/image"
import Link from "next/link"
import bg_ping_sec7 from "../../public/Section7/bg_ping_sec7.jpg"
import Sect7i1 from "../../public/Section7/Sect7i1.jpg"
import Sect7i2 from "../../public/Section7/Sect7i2.jpg"
import Sect7i3 from "../../public/Section7/Sect7i3.jpg"
import grid from "../../public/Section7/grid.svg"
import calendar_alt from "../../public/Section7/calendar_alt.svg"
import arrow_right from "../../public/Section7/arrow_right.svg"

export default function OurLatestNews() {
  return (
    <section className="relative pb-10 pt-10 md:pb-20">
      {/* .inset-0 {top: 0;right: 0;bottom: 0;left: 0;} */}
      {/* <div className="absolute inset-0"> */}
      <div className="absolute left-0 top-0 h-[375px] w-full">
        <Image className="h-auto w-full max-w-full" src={bg_ping_sec7} fill alt="bg_ping_sec7" />
      </div>
      {/* Card */}
      <div className=" relative">
        <div className="relative z-10 flex w-full flex-col items-center justify-center">
          <h3 className=" relative  w-full max-w-[365px] pt-3 text-center text-3xl font-semibold leading-normal tracking-[-0.088px] md:text-4xl lg:text-[44px]">
            Our Latest news & Article
          </h3>
        </div>
        {/*  */}
        <div className="relative z-10 w-full flex-col items-center justify-center lg:flex">
          <div className=" relative mt-10 grid grid-cols-1 gap-5 lg:max-w-[989px] lg:grid-cols-3 lg:justify-center ">
            {/* Grid item1 */}
            {/* <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,153,0.30)]"> */}
            <div className="tab-content rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,153,0.30)]">
              <div className="overflow-hidden rounded-xl">
                <Image className="h-auto w-full max-w-full" src={Sect7i1} alt="img" />
              </div>
              <div className="px-5 py-4">
                <div className=" flex place-items-center gap-1">
                  <Image src={grid} width={20} height={20} alt="icon" />
                  <span className="text-sm font-medium text-[#787878]">Web Development</span>
                </div>
                <h4 className="mt-4 font-montserrat font-semibold tracking-[-0.032px]">
                  Lorem ipsum dolor sit amet consectetur. sit amet{" "}
                </h4>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Image src={calendar_alt} width={20} height={20} alt="icon" />
                    <span className="font-montserrat font-medium leading-4 tracking-[-0.028px] text-[#888]">
                      20-12-2022
                    </span>
                  </div>
                  {/* group-для hover - при наведенні на (group) буде змінюватись   */}
                  <Link href="#" className="group flex items-center gap-1">
                    <span className="font-montserrat font-medium leading-4 tracking-[-0.028px] text-bluviolet">
                      Read more
                    </span>
                    <Image
                      className="transition-transform group-hover:translate-x-2"
                      src={arrow_right}
                      width={20}
                      height={20}
                      alt="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* Grid item2 */}
            <div className="rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,153,0.30)] ">
              <div className="overflow-hidden rounded-xl">
                <Image className="h-auto w-full max-w-full" src={Sect7i2} alt="img" />
              </div>
              <div className="px-5 py-4">
                <div className=" flex place-items-center gap-1">
                  <Image src={grid} width={20} height={20} alt="icon" />
                  <span className="text-sm font-medium text-[#787878]">Web Development</span>
                </div>
                <h4 className="mt-4 font-montserrat font-semibold tracking-[-0.032px]">
                  Lorem ipsum dolor sit amet consectetur. sit amet{" "}
                </h4>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Image src={calendar_alt} width={20} height={20} alt="icon" />
                    <span className="font-montserrat font-medium leading-4 tracking-[-0.028px] text-[#888]">
                      20-12-2022
                    </span>
                  </div>
                  {/* group-для hover - при наведенні на (group) буде змінюватись   */}
                  <Link href="#" className="group flex items-center gap-1">
                    <span className="font-montserrat font-medium leading-4 tracking-[-0.028px] text-bluviolet">
                      Read more
                    </span>
                    <Image
                      className="transition-transform group-hover:translate-x-2"
                      src={arrow_right}
                      width={20}
                      height={20}
                      alt="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* Grid item3 */}
            {/* col-span-2 - ширина самого елемента на 2-і комірки */}
            <div className=" relative rounded-xl shadow-[0px_0px_9px_0px_rgba(153,153,153,0.30)] ">
              <div className="overflow-hidden rounded-xl">
                <Image className="h-auto w-full max-w-full" src={Sect7i3} alt="img" />
              </div>
              <div className="px-5 py-4">
                <div className=" flex place-items-center gap-1">
                  <Image src={grid} width={20} height={20} alt="icon" />
                  <span className="text-sm font-medium text-[#787878]">Web Development</span>
                </div>
                <h4 className="mt-4 font-montserrat font-semibold tracking-[-0.032px]">
                  Lorem ipsum dolor sit amet consectetur. sit amet{" "}
                </h4>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Image src={calendar_alt} width={20} height={20} alt="icon" />
                    <span className="font-montserrat font-medium leading-4 tracking-[-0.028px] text-[#888]">
                      20-12-2022
                    </span>
                  </div>
                  {/* group-для hover - при наведенні на (group) буде змінюватись   */}
                  <Link href="#" className="group flex items-center gap-1">
                    <span className="font-montserrat font-medium leading-4 tracking-[-0.028px] text-bluviolet">
                      Read more
                    </span>
                    <Image
                      className="transition-transform group-hover:translate-x-2"
                      src={arrow_right}
                      width={20}
                      height={20}
                      alt="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}
