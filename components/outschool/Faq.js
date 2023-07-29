"use client"
import Image from "next/image"
import { useState } from "react"
import shevron_dovn from "../../public/shevron_dovn.svg"
import shevron_up from "../../public/shevron_up.svg"

export default function Faq() {
  const sectionTitle =
    "text-center text-3xl font-semibold leading-normal tracking-[-0.088px] md:text-4xl lg:text-[44px]"
  let [itemsFAQ, setItemsFAQ] = useState(0)
  //   let itemsFAQ =2
  return (
    <section className="px-5 py-20 text-orange-600 sm:py-10">
      <h3 className={sectionTitle}>FAQ</h3>
      {/* Accordion */}
      <div className="mx-auto max-w-[1000px]">
        {/* Accordion item */}
        <div className="">
          {/* Triger */}
          <button onClick={(e) => setItemsFAQ(1)} className=" flex w-full items-center justify-between gap-2">
            <span className="block text-4xl font-medium leading-[62px] text-bluviolet">
              1.Які переваги онлайн-навчання?
            </span>
            {itemsFAQ === 1 ? (
              <Image src={shevron_dovn} width={30} height={16} alt={"img"} />
            ) : (
              <Image src={shevron_up} width={30} height={30} alt={"img"} />
            )}
          </button>
          {/* Content */}
          {itemsFAQ === 1 && (
            <p className="max-w-[700px] pl-10 text-base tracking-[-0.032px] text-lighgrey">
              Онлайн-освіта пропонує більшу гнучкість, зручність і доступність порівняно з традиційною навчання в класі.
              Студенти можуть навчатися у своєму власному темпі, за власним розкладом і будь-де з підключенням до
              Інтернету. Це також надає ширший діапазон варіантів курсу та можливість взаємодії зі студентами та
              викладачами з усього світу.
            </p>
          )}
        </div>
        {/* Accordion item */}
        <div className="">
          {/* Triger */}
          <button onClick={(e) => setItemsFAQ(2)} className=" flex w-full items-center justify-between gap-2">
            <span className="block text-4xl font-medium leading-[62px] text-bluviolet">
              2.Які переваги онлайн-навчання?
            </span>
            {itemsFAQ === 2 ? (
              <Image src={shevron_dovn} width={30} height={16} alt={"img"} />
            ) : (
              <Image src={shevron_up} width={30} height={30} alt={"img"} />
            )}
          </button>
          {/* Content */}
          {itemsFAQ === 2 && (
            <p className="max-w-[700px] pl-10 text-base tracking-[-0.032px] text-lighgrey">
              2.Онлайн-освіта пропонує більшу гнучкість, зручність і доступність порівняно з традиційною навчання в
              класі. Студенти можуть навчатися у своєму власному темпі, за власним розкладом і будь-де з підключенням до
              Інтернету. Це також надає ширший діапазон варіантів курсу та можливість взаємодії зі студентами та
              викладачами з усього світу.
            </p>
          )}
        </div>
        {/* Accordion item */}
        <div className="">
          {/* Triger */}
          <button onClick={(e) => setItemsFAQ(3)} className=" flex w-full items-center justify-between gap-2">
            <span className="block text-4xl font-medium leading-[62px] text-bluviolet">
              3.Які переваги онлайн-навчання?
            </span>
            {itemsFAQ === 3 ? (
              <Image src={shevron_dovn} width={30} height={16} alt={"img"} />
            ) : (
              <Image src={shevron_up} width={30} height={30} alt={"img"} />
            )}
          </button>
          {/* Content */}
          {itemsFAQ === 3 && (
            <p className="max-w-[700px] pl-10 text-base tracking-[-0.032px] text-lighgrey">
              3/ Онлайн-освіта пропонує більшу гнучкість, зручність і доступність порівняно з традиційною навчання в
              класі. Студенти можуть навчатися у своєму власному темпі, за власним розкладом і будь-де з підключенням до
              Інтернету. Це також надає ширший діапазон варіантів курсу та можливість взаємодії зі студентами та
              викладачами з усього світу.
            </p>
          )}
        </div>
        {/* Accordion item */}
        <div className="">
          {/* Triger */}
          <button onClick={(e) => setItemsFAQ(4)} className=" flex w-full items-center justify-between gap-2">
            <span className="block text-4xl font-medium leading-[62px] text-bluviolet">
              4.Які переваги онлайн-навчання?
            </span>
            {itemsFAQ === 4 ? (
              <Image src={shevron_dovn} width={30} height={16} alt={"img"} />
            ) : (
              <Image src={shevron_up} width={30} height={30} alt={"img"} />
            )}
          </button>
          {/* Content */}
          {itemsFAQ === 4 && (
            <p className="max-w-[700px] pl-10 text-base tracking-[-0.032px] text-lighgrey">
              4/Онлайн-освіта пропонує більшу гнучкість, зручність і доступність порівняно з традиційною навчання в
              класі. Студенти можуть навчатися у своєму власному темпі, за власним розкладом і будь-де з підключенням до
              Інтернету. Це також надає ширший діапазон варіантів курсу та можливість взаємодії зі студентами та
              викладачами з усього світу.
            </p>
          )}
        </div>
        {/* Accordion item */}
        <div className="">
          {/* Triger */}
          <button onClick={(e) => setItemsFAQ(5)} className=" flex w-full items-center justify-between gap-2">
            <span className="block text-4xl font-medium leading-[62px] text-bluviolet">
              5.Які переваги онлайн-навчання?
            </span>
            {itemsFAQ === 5 ? (
              <Image src={shevron_dovn} width={30} height={16} alt={"img"} />
            ) : (
              <Image src={shevron_up} width={30} height={30} alt={"img"} />
            )}
          </button>
          {/* Content */}
          {itemsFAQ === 5 && (
            <p className="max-w-[700px] pl-10 text-base tracking-[-0.032px] text-lighgrey">
              5/Онлайн-освіта пропонує більшу гнучкість, зручність і доступність порівняно з традиційною навчання в
              класі. Студенти можуть навчатися у своєму власному темпі, за власним розкладом і будь-де з підключенням до
              Інтернету. Це також надає ширший діапазон варіантів курсу та можливість взаємодії зі студентами та
              викладачами з усього світу.
            </p>
          )}
        </div>
        {/* Accordion item */}
        <div className="">
          {/* Triger */}
          <button onClick={(e) => setItemsFAQ(6)} className=" flex w-full items-center justify-between gap-2">
            <span className="block text-4xl font-medium leading-[62px] text-bluviolet">
              6.Які переваги онлайн-навчання?
            </span>
            {itemsFAQ === 6 ? (
              <Image src={shevron_dovn} width={30} height={16} alt={"img"} />
            ) : (
              <Image src={shevron_up} width={30} height={30} alt={"img"} />
            )}
          </button>
          {/* Content */}
          {itemsFAQ === 6 && (
            <p className="max-w-[700px] pl-10 text-base tracking-[-0.032px] text-lighgrey">
              6/Онлайн-освіта пропонує більшу гнучкість, зручність і доступність порівняно з традиційною навчання в
              класі. Студенти можуть навчатися у своєму власному темпі, за власним розкладом і будь-де з підключенням до
              Інтернету. Це також надає ширший діапазон варіантів курсу та можливість взаємодії зі студентами та
              викладачами з усього світу.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
