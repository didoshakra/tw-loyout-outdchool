import Image from "next/image"
import Link from "next/link"
import Untitled1_1 from "../../public/Section5/Untitled1_1.png"

export default function StudentsSupport() {
    const sectionTitle =
      "text-center text-3xl font-semibold leading-normal tracking-[-0.088px] md:text-4xl lg:text-[44px]"
    const sectionText = "mt-[10px] text-center text-base font-normal leading-normal tracking-[-0.032px]"

  return (
    <section className="py-20 sm:py-10">
      <div className="max-x-[1144px] mx-auto ">
        <div className="grid grid-cols-1 items-center justify-center gap-2 md:grid-cols-2 lg:gap-[100px]">
          <div className="order-1 sm:order-2">
            <h3 className={sectionTitle}>24/7 Students Support</h3>
            <p className={sectionText}>
              Lorem ipsum dolor sit amet consectetur. Sit est lacus blandit elementum amet elit. Varius faucibus sit
              donec molestie. Vulputate sodales diam et ut erat tempor. Tempor condimentum sodales morbi nunc.
            </p>
            <Link
              href="#"
              // max-w-fit / ширина по значенню конткнта
              className="mt-10 flex max-w-fit rounded-xl bg-[#AC85FF] px-6 py-[10px] font-semibold text-white transition-colors hover:bg-[#400fa9]"
            >
              Learn more
            </Link>
          </div>
          {/* ustify-self-center - вирівнювання всередині комірки/ order-1-ставить 1м цей елемент в гріді*/}
          <div className="order-1 justify-self-center sm:order-2">
            <Image src={Untitled1_1} width={350} height={520} alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}
