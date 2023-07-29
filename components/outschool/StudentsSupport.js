import Image from "next/image"
import Link from "next/link"
import Untitled2_1_bg from "../../public/Section5/Untitled2_1_bg.png"
import Untitled2_1_bg_ob from "../../public/Section5/Untitled2_1_bg_ob.png"
import Untitled2_1 from "../../public/Section5/Untitled2_1.png"

export default function StudentsSupport() {
  const sectionTitle =
    "items-center text-center text-3xl font-semibold leading-normal tracking-[-0.088px] md:text-4xl lg:text-[44px]"
  const sectionText = "mt-[10px] text-base font-normal leading-normal tracking-[-0.032px]"

  return (
    <section className=" pb-10 pt-10 md:pb-20">
      <div className="max-x-[1050px] mx-auto ">
        <div className="grid grid-cols-1 items-center justify-items-center lg:mx-auto lg:max-w-7xl  lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="relative flex flex-col justify-center ">
            <h3 className={sectionTitle}>24/7 Students Support</h3>
            <p className={sectionText}>
              Lorem ipsum dolor sit amet consectetur. Sit est lacus blandit elementum amet elit. Varius faucibus sit
              donec molestie. Vulputate sodales diam et ut erat tempor. Tempor condimentum sodales morbi nunc.
            </p>
            <Link
              href="#"
              // max-w-fit / ширина по значенню конткнта
              className="mt-10 flex max-w-fit rounded-xl bg-[#400fa9] px-6 py-[10px] font-semibold text-white transition-colors hover:bg-[#AC85FF]"
              //   className="mt-10 flex max-w-fit rounded-xl bg-[#AC85FF] px-6 py-[10px] font-semibold text-white transition-colors hover:bg-[#400fa9]"
            >
              Read more
            </Link>
          </div>
          <div className=" relative mt-12 flex w-full justify-center pb-1 pt-2 md:mt-16">
            {/* <Image className="absolute" src={Untitled2_1_bg} width={438} height={564} alt="img" /> */}
            <Image className="absolute " src={Untitled2_1_bg} alt="img" />
            <div className="absolute sm:right-[calc(50%_-_240px)]">
              {/* <Image className="absolute sm:right-[calc(50%_-_240px)]" src={Untitled2_1_bg_ob} alt="img" /> */}
              <Image src={Untitled2_1_bg_ob} alt="img" />
            </div>
            {/* з додатковим <div className=" relative */}
            <div className=" relative mt-[44px] h-[520px] w-[359px]">
              <Image
                //   className="relative  mt-[60px]"
                src={Untitled2_1}
                layout="fill" // показує картинку по розмірах заданій у батьку=relative
                //   width={359}
                //   height={520}
                //  без width і height: приймає розміри реальої картинки
                alt="img"
                objectPosition="center"
                //   objectFit="cover" //обрізає
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
