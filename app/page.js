import Header from "../components/outschool/Header"
import Hero from "../components/outschool/Hero"
import OurCourses from "../components/outschool/OurCourses"
import OurCompany from "../components/outschool/OurCompany"
import OurFeatures from "../components/outschool/OurFeatures"
import BestPlatform from "../components/outschool/BestPlatform"
// import BestPlatform1 from "../components/outschool/BestPlatform1"
import StudentsSupport from "../components/outschool/StudentsSupport"
import OurLatestNews from "../components/outschool/OurLatestNews"
import Subscribe from "../components/outschool/Subscribe"
import Footer from "../components/outschool/Footer"
import Faq from "../components/outschool/Faq"



//

export default function Home() {
  return (
    <>
      {/* section Gradient */}
      <section className="overflow-hidden rounded-br-[200px] bg-heroGradient">
        <Header />
        <Hero />
      </section>

      <OurCourses />
      <OurCompany />
      <OurFeatures />
      <BestPlatform />
      <StudentsSupport />
      <OurLatestNews />
      <Faq />
      <Subscribe />
      <Footer />
    </>
  )
}
