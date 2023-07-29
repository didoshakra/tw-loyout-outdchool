import React from "react"
import Image from "next/image"

import keyAlt from "../../public/Servises/key-alt.svg"
import monitorAlt4 from "../../public/Servises/monitor-alt-4.svg"
import tablerCertificate from "../../public/Servises/tabler_certificate.svg"
import user from "../../public/Servises/user.svg"
import badgeCheck from "../../public/Servises/badge-check.svg"
import badgeDollar from "../../public/Servises/badge-dollar.svg"

export default function OurFeatures() {
  const sectionTitle =
    "text-center text-3xl font-semibold leading-normal tracking-[-0.088px] md:text-4xl lg:text-[44px]"
  const sectionText = "mt-[10px] text-center text-base font-normal leading-normal tracking-[-0.032px]"

  return (
    <section className="px-5 pb-10 pt-10 sm:pb-20">
      {/* <section className="py-20 sm:py-10"> */}
      <div className="max-x-[1050px] mx-auto lg:mx-[15px]">
        {/* Head */}
        <div className="mx-auto max-w-[630px]">
          <h2 className={sectionTitle}>Our Features and Services</h2>
          <p className={sectionText}>
            Lorem ipsum dolor sit amet consectetur. Euismod diam phasellus quis aliquet purus sem ornare mollis
            vulputate. Sapien purus faucibus massa pharetra.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[15px] md:grid-cols-2 lg:grid-cols-3">
          {/*  section-4 Item-1 */}
          <div className="p-[25px]">
            <div>
              <Image src={keyAlt} width={44} height={44} alt={"img"} />
            </div>
            <p className="mt-2 text-xl font-medium leading-normal">Life Time Access</p>
            <p className="text mt-[15px] tracking-[-0.032px] text-lighgrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis
              nisi,
            </p>
          </div>
          {/*  section-4 Item-2 */}
          <div className="p-[25px]">
            <div>
              <Image src={monitorAlt4} width={44} height={44} alt={"img"} />
            </div>
            <p className="mt-2 text-xl font-medium leading-normal">Online Classes</p>
            <p className="text mt-[15px] tracking-[-0.032px] text-lighgrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis
              nisi,
            </p>
          </div>
          {/*  section-4 Item-3 */}
          <div className="p-[25px]">
            <div>
              <Image src={tablerCertificate} width={44} height={44} alt={"img"} />
            </div>
            <p className="mt-2 text-xl font-medium leading-normal">Get Certificate</p>
            <p className="text mt-[15px] tracking-[-0.032px] text-lighgrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis
              nisi,
            </p>
          </div>
          {/*  section-4 Item-4 */}
          <div className="p-[25px]">
            <div>
              <Image src={user} width={44} height={44} alt={"img"} />
            </div>
            <p className="mt-2 text-xl font-medium leading-normal">Expert Trainers</p>
            <p className="text mt-[15px] tracking-[-0.032px] text-lighgrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis
              nisi,
            </p>
          </div>
          {/*  section-4 Item-5 */}
          <div className="p-[25px]">
            <div>
              <Image src={badgeCheck} width={44} height={44} alt={"img"} />
            </div>
            <p className="mt-2 text-xl font-medium leading-normal">Great Result</p>
            <p className="text mt-[15px] tracking-[-0.032px] text-lighgrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis
              nisi,
            </p>
          </div>
          {/*  section-4 Item-6 */}
          <div className="p-[25px]">
            <div>
              <Image src={badgeDollar} width={44} height={44} alt={"img"} />
            </div>
            <p className="mt-2 text-xl font-medium leading-normal">Best Price</p>
            <p className="text mt-[15px] tracking-[-0.032px] text-lighgrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis
              nisi,
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
