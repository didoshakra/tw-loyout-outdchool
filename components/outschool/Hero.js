import Image from "next/image"
import Link from "next/link"
import heroImg from "../../public/hero-img.png"

export default function Hero() {
  return (
    <section>
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 px-2 pb-[100px] pt-32 sm:grid-cols-2 sm:gap-5 sm:pt-16 lg:px-5 lg:pt-20">
        <div>
          <h1 className="text-center text-[60px] font-bold leading-normal text-white sm:text-left sm:text-3xl md:text-4xl lg:text-5xl">
            Upgrade YOUR skills for better future{" "}
          </h1>
          <p className="mt-5 text-[20px] leading-normal text-white sm:text-base md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur. Erat in commodo in a. Sit interdum mi felis laoreet sagittis.{" "}
          </p>
          <div className="xs:grid-cols-1 xs:gap-4 mt-8 flex items-center gap-5 sm:mt-4 sm:grid sm:grid-cols-2">
            <Link
              href="#"
              className="rounded-xl bg-[#FF00C7] px-6 py-[10px] font-semibold text-white transition-colors hover:bg-[#d811ad] sm:flex sm:w-full sm:justify-center"
            >
              Check Courses
            </Link>
            <Link
              href="#"
              className="rounded-xl border  border-white bg-transparent px-[22px] py-[9px] font-medium text-white hover:bg-[#6242bb] sm:flex sm:w-full sm:justify-center"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div>
          <Image className="sm:h-auto sm:w-full sm:max-w-full" src={heroImg} alt={"heroImg"} />
        </div>
      </div>
    </section>
  )
}
