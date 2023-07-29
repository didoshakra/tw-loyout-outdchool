//https://nextjs.org/docs/app/building-your-application/optimizing/images
import Image from "next/image"
import Link from "next/link"
import Email_campaign from "../../public/Sect_Subscribe/Email_campaign.png"
//

export default function Subscribe() {
  const sectionTitle =
    "text-center text-3xl font-semibold leading-normal tracking-[-0.088px] md:text-4xl lg:text-[44px]"
  const sectionText = "mt-[10px]  text-base font-normal leading-normal tracking-[-0.032px]"

  return (
    <section className=" relative pb-10 pt-10 md:pb-20">
      <div className="max-x-[1050px] mx-auto ">
        <div className="grid grid-cols-1 items-center justify-items-center lg:mx-auto lg:max-w-7xl  lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="relative order-2 flex flex-col items-center justify-center p-2 lg:order-1">
            <Image src={Email_campaign} alt="img" />
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <h3 className={sectionTitle}>Subscribe to our newsletter</h3>
            <p className={sectionText}>
              Lorem ipsum dolor sit amet consectetur. Velit enim est urna est massa cras. Sed varius convallis netus
              aliquet duis ut.
            </p>
            <div className="mt-4 flex h-[50px] max-w-[500px] items-center justify-between rounded-xl p-2 shadow-[0px_0px_9px_0px_rgba(153,153,153,0.30)]">
              <p className="p-2 text-[13px] font-medium leading-[22px] tracking-[-0.031px] text-[#5228B6]">
                Enter your mail
              </p>
              <Link
                href="#"
                // max-w-fit / ширина по значенню конткнта
                className="flex max-w-fit rounded-xl bg-[#400fa9] px-6 py-[10px] font-semibold text-white transition-colors hover:bg-[#AC85FF]"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
