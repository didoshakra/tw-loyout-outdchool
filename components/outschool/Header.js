import Link from "next/link"
import Image from "next/image"
import IconCart from "../ui/icons/IconCart"
import IconUser from "../ui/icons/IconUser_border"
import outschool from "../../public/Outschool.svg"

export default function Header() {
    const menu = [
      {
        a: "Courses",
        link: "/courses",
      },
      {
        a: "Prising",
        link: "/prising",
      },
      {
        a: "About Us",
        link: "/about",
      },
      {
        a: "Contact Us",
        link: "/contact",
      },
    ]
    const renderMenu = () => {
      return menu.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className="relative text-[15px] font-medium leading-[22px] text-white after:absolute after:-bottom-1    after:left-0 after:h-[1px] after:w-full after:scale-0 after:bg-white after:transition-transform hover:after:scale-100"
              href={item.link}
            >
              {item.a}
            </Link>
          </li>
        )
      })
    }
  return (
    <header className="mx-auto flex max-w-[1336px] items-center justify-between px-2 pb-[100px] pt-[36px]">
      {/* logo */}
      <Link  href="/">
        <Image src={outschool} alt={"outschool"} />
      </Link>
      {/* Menu Desktop */}
      <nav className="hidden items-center md:flex">
        <ul className="inline-flex items-center gap-[30px] ">{renderMenu()}</ul>
      </nav>
      {/* Actions */}
      <div className="hidden items-center gap-[30px] md:flex ">
        <Link href="/" className="flex items-center gap-1">
          <IconUser width={20} height={20} colorFill={"white"} />
          <span className="text-[15px] font-medium leading-[22px] text-white">Account</span>
        </Link>
        <Link href="/" className="flex items-center gap-1">
          <IconCart width={23} height={23} colorStroke={"white"} colorFill={"none"} />
          <span className="text-[15px] font-medium leading-[22px] text-white">Cart</span>
        </Link>
      </div>
      {/* Burger menu !!!  */}
      {/* inline-block-відображається md:hiden-ховається */}
      <button className="inline-block items-center md:hidden">
        {/* https://heroicons.com/ */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="h-8 w-8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* https://www.tailwindtoolbox.com/icons */}
      {/* <button className="inline-block items-center md:hidden">
        <svg class="h-8 w-8 text-red-500" fill="white" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button> */}
      {/* <button className=" space-x-0 active group relative inline-block h-5 w-[30px] md:hidden p-0">
            <spsn className="absolute top-0 h-[1px] w-full bg-white"></spsn>
            <spsn className="absolute top-1/2 h-[1px] w-full bg-white"></spsn>
            <spsn className="absolute bottom-0 h-[1px] w-full bg-white"></spsn>
            <spsn></spsn>
            <spsn></spsn>
          </button> */}
    </header>
  )
}
