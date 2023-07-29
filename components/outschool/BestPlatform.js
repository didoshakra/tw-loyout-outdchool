//https://nextjs.org/docs/app/building-your-application/optimizing/images
import Image from "next/image"
import Link from "next/link"
import Untitled1_1_bg from "../../public/Section5/Untitled1_1_bg.png"
import Untitled1_1_bg_ob from "../../public/Section5/Untitled1_1_bg_ob.png"
import Untitled1_1 from "../../public/Section5/Untitled1_1.png"
//

export default function BestPlatform() {
  const sectionTitle =
    "text-center text-3xl font-semibold leading-normal tracking-[-0.088px] md:text-4xl lg:text-[44px]"
  const sectionText = "mt-[10px]  text-base font-normal leading-normal tracking-[-0.032px]"

  return (
    <section className=" pb-10 pt-10 md:pb-20">
      <div className="max-x-[1050px] mx-auto ">
        <div className="grid grid-cols-1 items-center justify-items-center lg:mx-auto lg:max-w-7xl  lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="order-2 mt-12 flex justify-center pb-1 pt-2 md:mt-16 lg:order-1">
            <Image className="absolute mt-5" src={Untitled1_1_bg} alt="img" />
            <Image className="absolute" src={Untitled1_1_bg_ob} alt="img" />
            {/* з додатковим <div className=" relative */}
            <div className=" relative mt-[60px] h-[520px] w-[359px]">
              <Image
                //   className="relative  mt-[60px]"
                src={Untitled1_1}
                layout="fill" // показує картинку по розмірах заданій у батьку=relative
                //   width={359}
                //   height={520}
                //  без width і height: приймає розміри реальої картинки
                alt="img"
                style={{
                //   objectFit: "cover", //-все пропорційно-обрізає /contain- пропорційно-один розмір /fill- все-не пропорційно/none-зберігає розмір
                  objectFit: "contain", //-все пропорційно-обрізає /contain- пропорційно-один розмір /fill- все-не пропорційно/none-зберігає розмір
                }}
              />
            </div>
          </div>

          <div className="border-1 relative flex flex-col justify-center lg:order-2">
            <h3 className={sectionTitle}>Best Platform to grow</h3>
            <p className={sectionText}>
              Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet.
              Vel adipiscing placerat tellus faucibus diam mauris ipsum vitae. Justo adipiscing integer dictum tortor
              viverra vel .
            </p>
            <Link
              href="#"
              // max-w-fit / ширина по значенню конткнта
              className="mt-10 flex max-w-fit rounded-xl bg-[#AC85FF] px-6 py-[10px] font-semibold text-white transition-colors hover:bg-[#400fa9]"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
