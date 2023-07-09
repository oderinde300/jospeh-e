"use client";
import Accordion from "@/components/Accordion";
import Card from "@/components/Card";
import CardMultipleSlider from "@/components/CardMultipleSlider";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const accordionData = [
    {
      title: "Branding & Identity",
      subtitle:
        "Designing for impact and longevity. With a deep understanding of branding and consumer behavior, I'll help you craft a visual identity that stands the test of time and drives business growth.",
    },
    {
      title: "Website & Landing Page Designs",
      subtitle:
        "Designing websites that work as hard as you do. Whether you need a new website or want to revamp an existing one, I'll help you create a digital presence that elevates your brand and grows your business.",
    },
    {
      title: "Mobile Application Designs",
      subtitle:
        "Designing apps that make an impact. Whether you're looking to create a new app or improve an existing one, I'll help you create a user-friendly and intuitive experience that meets the needs of your target audience.",
    },
    {
      title: "Advertising Creatives",
      subtitle:
        "I have experience designing social media ads designs to increase customers' sales and success. I can help you increase the reach and engagement of your content with high-quality animated creatives that are eye-catching and can grow your audience.",
    },
  ];

  const cards = [
    {
      subtitle:
        "I had the pleasure of working with Joseph on my e-commerce website redesign project, and I couldn't be happier with the results. His communication, attention to detail, and design skills are top-notch.",
      name: "Azzam Sheikh",
      post: "CEO, Carifex",
      logoImg: "imgs/carifexLogo.svg",
      avatar: "imgs/azeem.svg",
    },
    {
      subtitle:
        "Joseph does a class job. I hired him to work on a UI/UX Design project for a Web3 company. Once he gives his word, he delivers. His work ethic, experience, plus his genuine passion for UI/UX is what makes him a great designer. I will continue to work with him and recommend him to anyone who needs design work. ",
      name: "Li Sun",
      post: "Director, at FTI Technology.",
      logoImg: "imgs/gailabsLogo.svg",
      avatar: "imgs/liSun.svg",
    },
    {
      subtitle:
        "Working with Joseph was a fantastic experience. He was able to take our rough ideas and turn them into a cohesive and visually stunning design. We highly recommend him for any design project.",
      name: "Pavi Kandiban",
      post: "Director, Maaya Groups",
      logoImg: "imgs/maayaLogo.svg",
      avatar: "imgs/paul.svg",
    },
    {
      subtitle:
        "Joseph's design skills are truly exceptional. He was able to create a brand identity and website that perfectly aligned with our business goals and values. We are so grateful for his expertise and guidance.",
      name: "Obadina Samson",
      post: "CCEO, Trevone Nigeria",
      logoImg: "imgs/trevoneLogo.svg",
      avatar: "imgs/obadina.svg",
    },
  ];
  return (
    <>
      <div className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="videos/VideoBg.mp4" type="video/mp4" />
        </video>
        {/* Other content */}
        <div className="absolute top-0 left-0 w-full h-[90vh] md:h-screen p-0 md:p-10">
          <section>
            <section className="bg-primary-gray-1 w-[90%] lg:w-[92%] xl:w-[100%] py-4 px-8 mmd:px-16 rounded-full hidden md:block">
              <nav className="flex justify-between w-full">
                <div className="cursor-pointer">
                  <img src="imgs/Logo.svg" alt="logo" />
                </div>
                <ul className="flex items-center font-normal text-base">
                  <li className="mr-8 cursor-pointer hover:text-primary-blue-1">
                    Projects
                  </li>
                  <li className="mr-8 cursor-pointer hover:text-primary-blue-1">
                    About
                  </li>
                  <li className="mr-8 cursor-pointer hover:text-primary-blue-1">
                    Process
                  </li>
                  <li className="mr-8 cursor-pointer">
                    <div className="text-black bg-primary-blue-1 py-2 px-5 rounded-full cursor-pointer">
                      Contact
                    </div>
                  </li>
                  <li>
                    <img
                      className="cover cursor-pointer"
                      src="imgs/schedule.svg"
                      alt="button"
                    />
                  </li>
                </ul>
              </nav>
            </section>

            <section className="w-full fixed z-[100]">
              <section className="flex justify-between items-center bg-primary-gray-1 px-[30px] py-5 md:hidden">
                <div className="cursor-pointer">
                  <img src="imgs/Logo.svg" alt="logo" />
                </div>
                <div className="cursor-pointer" onClick={toggleNav}>
                  {!showNav ? (
                    <img src="imgs/hamburger.svg" alt="logo" />
                  ) : (
                    <img src="imgs/times.svg" alt="logo" />
                  )}
                </div>
              </section>
            </section>

            {showNav && (
              <div className="h-screen w-full bg-black fixed md:hidden z-[99] mt-[80px]">
                {/* <nav className="flex flex-col justify-between w-full"> */}
                <ul className="flex flex-col justify-center my-12 items-center font-normal text-base">
                  <li className="cursor-pointer mb-8 hover:text-primary-blue-1">
                    Projects
                  </li>
                  <li className="cursor-pointer mb-8 hover:text-primary-blue-1">
                    About
                  </li>
                  <li className="cursor-pointer mb-8 hover:text-primary-blue-1">
                    Process
                  </li>
                  <li className="cursor-pointer mb-8">
                    <div className="text-black bg-primary-blue-1 py-2 px-5 rounded-full cursor-pointer">
                      Contact
                    </div>
                  </li>
                  <li>
                    <img
                      className="cover cursor-pointer"
                      src="imgs/schedule.svg"
                      alt="button"
                    />
                  </li>
                </ul>
                {/* </nav> */}
              </div>
            )}
          </section>

          <div className="flex flex-col h-[86%] justify-center items-center px-[46px] md:px-0">
            <img src="imgs/freelance.svg" className="mb-10" alt="freelance" />
            <img src="imgs/UiUx.svg" alt="ui/ux text" />
            <div className="flex flex-col items-start max-w-[800px] md:flex-row">
              <div className="flex items-center justify-center mx-auto">
                <p className="text-xl font-semibold">Joseph Emmanuel</p>
                <img src="imgs/line.svg" alt="line" className="mx-[18px]" />
              </div>
              <p className="text-base font-normal text-center md:text-left mt-2 md:mt-0 hidden md:block">
                Freelance UI-UX / Graphic Designer crafting compelling visuals
                and
                <br></br>intuitive interfaces. Let's collaborate to create a
                digital experience that<br></br> stands out from the crowd.
              </p>

              <p className="text-base font-normal text-center md:text-left mt-2 md:mt-0 block md:hidden">
                Freelance UI-UX / Graphic Designer crafting compelling visuals
                and intuitive interfaces. Let's collaborate to create a digital
                experience that stands out from the crowd.
              </p>
            </div>

            <ul className="flex justify-between w-full mt-8 md:hidden">
              <li className="mr-6 cursor-pointer">
                <Link
                  href="https://www.behance.net/josephemmanuel2"
                  legacyBehavior
                >
                  <a target="_blank">
                    <img src="imgs/behance.svg" alt="behance" />
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="https://dribbble.com/Joseph962" legacyBehavior>
                  <a target="_blank">
                    <img src="imgs/dribble.svg" alt="dribble" />
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="https://twitter.com/emaxj962" legacyBehavior>
                  <a target="_blank">
                    <img src="imgs/twitter.svg" alt="twitter" />
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="https://www.linkedin.com/in/joseph-emmanuel-"
                  legacyBehavior
                >
                  <a target="_blank">
                    <img src="imgs/linkedin.svg" alt="linkedin" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/@emaxj962" legacyBehavior>
                  <a target="_blank">
                    <img src="imgs/medium.svg" alt="medium" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex w-full justify-end">
            <ul className="flex">
              <li className="mr-6 cursor-pointer">
                <Link
                  href="https://www.behance.net/josephemmanuel2"
                  legacyBehavior
                >
                  <a target="_blank">
                    <img src="imgs/behance.svg" alt="behance" />
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="https://dribbble.com/Joseph962" legacyBehavior>
                  <a target="_blank">
                    <img src="imgs/dribble.svg" alt="dribble" />
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="https://twitter.com/emaxj962" legacyBehavior>
                  <a target="_blank">
                    <img src="imgs/twitter.svg" alt="twitter" />
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="https://www.linkedin.com/in/joseph-emmanuel-"
                  legacyBehavior
                >
                  <a target="_blank">
                    <img src="imgs/linkedin.svg" alt="linkedin" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/@emaxj962" legacyBehavior>
                  <a target="_blank">
                    <img src="imgs/medium.svg" alt="medium" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="h-full md:h-screen bg-primary-gray-2 overflow-hidden flex flex-col justify-between">
        <div
          className="movingTextContainer h-[108px] text-primary-blue-2 border-white overflow-x-hidden w-[100vw]"
          style={{ borderBottom: "1px dashed #D9D9D9" }}
        >
          <p className="movingText text-[40px] py-8 font-light flex items-center overflow-hidden">
            <span className="mr-2">WEB DESIGN</span>
            <img src="imgs/line.svg" className="mr-2" />
            <span className="mr-2">UI/UX</span>
            <img src="imgs/line.svg" className="mr-2" />
            <span className="mr-2">SAAS DESIGNS</span>
            <img src="imgs/line.svg" className="mr-2" />
            <span className="mr-2">MOBILE APP DESIGN</span>
            <img src="imgs/line.svg" className="mr-2" />
            <span className="mr-2">INTERFACES</span>
            <img src="imgs/line.svg" className="mr-2" />
            <span className="mr-2">BRANDING</span>
          </p>
        </div>
        <main className="md:px-[88px] px-[24px] mt-0 md:mt-[110px] flex flex-col md:justify-between h-[60%] md:flex-row">
          <div className="md:w-[40%] w-full mb-10 md:mb-0">
            <div className="text-2xl md:text-[32px] leading-[48px] font-semibold mt-11 md:mt-0">
              I will help you
              <span className="text-primary-blue-1">
                {" "}
                DEFINE, REFINE & BUILD,{" "}
              </span>
              your idea into reality for the right target audience.
            </div>
            <img
              src="imgs/Schedule2.svg"
              alt="button"
              className="mt-6 cursor-pointer"
            />
          </div>
          <div className="md:w-[50%] w-full">
            {accordionData?.map((data) => (
              <Accordion title={data.title} subtitle={data.subtitle} />
            ))}
          </div>
        </main>
        <div className="mt-[120px] md:my-11">
          <img src="imgs/LogosBg.svg" alt="Logos" className="hidden sm:block" />
        </div>
        <img src="imgs/LogosBgM.svg" alt="Logos" className=" block sm:hidden" />
      </section>

      <section className="h-full bg-white pt-10 text-[#262626] mt-[120px] md:mt-0">
        <div className="border-dashed border-b border-t py-4 ">
          <p className="text-primary-gray-3 text-center">PROJECTS</p>
          <div className="text-[#121212] flex flex-col md:flex-row justify-center items-center">
            <p className="text-[28px] md:text-5xl font-semibold">
              UI-UX DESIGN
            </p>
            <img src="imgs/blackLine.svg" className="px-4 py-4 md:py-0" />
            <p className="text-2xl md:text-4xl text-center md:text-start">
              WEB PROJECTS / MOBILE APPLICATIONS
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-0 md:px-[90px] mt-6">
          <p className="md:text-2xl text-base">- CONCEPT -</p>
          <p className="md:text-2xl text-base">- CREATIVE -</p>
          <p className="md:text-2xl text-base">- INNOVATION -</p>
          <p className="md:text-2xl text-base">- SUCCESS -</p>
        </div>
        <div className="grid grid-cols-1 md:gap-x-4 gap-y-[56px] px-0 md:px-[90px] mt-16 md:grid-cols-2">
          <Card
            title="Carifex"
            textImage="imgs/30bg.svg"
            bgImage="imgs/carifexBg.svg"
            subtitle=" 2.3x revenue increased after a whole website was restructured and
          re-designed strategically. Introduced products online store inside
          the e-commerce website."
          />

          <Card
            title="GaiaLabs"
            textImage="imgs/web3.svg"
            bgImage="imgs/gaialabsBg.svg"
            subtitle="Worked on the complete restructuring and strategic redesign of a
            web3 company's website, optimizing user experience and driving
            conversions."
          />

          <Card
            title="SPHENEPAY"
            textImage="imgs/fintech.svg"
            bgImage="imgs/sphenepayBg.svg"
            subtitle="I designed a fintech admin dashboard web app that streamlines package management, user profile management, transaction management, and more. "
          />

          <Card
            title="SCARIPAY"
            textImage="imgs/fintechMobile.svg"
            bgImage="imgs/scaripayBg.svg"
            subtitle="I designed a fintech mobile app to simplify financial management and enhance user experience. The app includes various essential tools and features that enable users to manage their finances with ease and efficiency."
          />

          <Card
            title="MAAYA"
            textImage="imgs/revenueIncreased.svg"
            bgImage="imgs/maayaBg.svg"
            subtitle="Boosted revenue by 2.3x following the strategic restructuring and redesign of a food wellness e-commerce website, optimizing the user journey and increasing conversions."
          />

          {/* <div>
            <div className="w-full md:w-[600px] h-[464px] bg-[#018383] rounded-lg flex flex-col justify-center items-center">
              <img
                src="imgs/gotPro.svg"
                alt="Got a project for me let's connect"
                className="flex justify-center w-full md:max-w-[450px]"
              />
              <img
                src="imgs/30mins.svg"
                alt="Schedule a 30mins call"
                className="max-w-[259px] mt-6 cursor-pointer"
              />
            </div>
            <img
              src="imgs/blueBg.png"
              alt="Got a project for me let's connect"
              className="flex justify-center max-w-[600px] h-[464px]"
            />
            <div className="mt-[60px] flex justify-center cursor-pointer">
              <p>View more projects</p>
              <img src="imgs/arrowRight2.svg" className="pl-3" />
            </div>
          </div> */}

          <div className="flex flex-col w-full md:max-w-[600px]">
            <div className="max-h-[464px] w-full md:max-w-[600px] flex justify-center">
              <img
                src="imgs/blueBg.svg"
                alt="Got a project for me let's connect"
                className="flex justify-center"
              />
            </div>
            {/* <img
              src="imgs/30mins.svg"
              alt="Schedule a 30mins call"
              className="max-w-[259px] mt-6 cursor-pointer relative"
            /> */}
            <div className="mt-[60px] mb-[40px] md:mb-0 flex justify-center cursor-pointer">
              <p>View more projects</p>
              <img src="imgs/arrowRight2.svg" className="pl-3" />
            </div>
          </div>
        </div>
      </section>

      <section className="h-full w-full flex flex-col items-center px-6 md:px-16 py-[81px]">
        <img src="imgs/Heading.svg" />
        <p className="my-5 max-w-[720px] font-normal text-lg text-center">
          I believe in building long-term work relationships with my clients by
          providing them with excellent support throughout the journey.
        </p>
        <img src="imgs/rating.svg" className="mt-5 mb-16" />
        <div className="w-full">
          <CardMultipleSlider cards={cards} />
        </div>

        {/* <CardMultipleSlider /> */}
      </section>

      <section className="bg-primary-gray-1 h-full w-full">
        <div
          className="movingTextContainer h-[108px] text-primary-blue-2 border-white overflow-x-hidden w-[100vw]"
          style={{ borderBottom: "1px dashed #D9D9D9" }}
        >
          <p className="movingText text-[40px] py-8 font-light flex items-center overflow-hidden">
            <span className="mr-2">WEB DESIGN</span>
            <img src="imgs/line.svg" className="mr-2" />
            <span className="mr-2">UI/UX</span>
            <img src="imgs/line.svg" className="mr-2" />
            <span className="mr-2">SAAS DESIGNS</span>
            <img src="imgs/line.svg" className="mr-2" />
            <span className="mr-2">MOBILE APP DESIGN</span>
            <img src="imgs/line.svg" className="mr-2" />
            <span className="mr-2">INTERFACES</span>
            <img src="imgs/line.svg" className="mr-2" />
            <span className="mr-2">BRANDING</span>
          </p>
        </div>
        <div className="px-[20px] md:px-[80px] pt-16 pb-6">
          <div className="flex flex-col items-center md:justify-between md:flex-row pb-10">
            <div className="flex flex-col md:flex-row items-center  md:items-start">
              <img
                alt="logo"
                src="imgs/iconoirDesign.svg"
                className="mr-0 md:mr-6"
              />
              <div className="flex md:block flex-col justify-center items-center">
                <div className="flex items-center mt-6 md:mt-0">
                  <p className="font-extrabold text-2xl uppercase">
                    Joseph Emmanuel
                  </p>
                  <img src="imgs/line.svg" className="ml-4 hidden md:block" />
                </div>
                <p className="text-[#EDEDED] text-2xl font-light uppercase text-center md:text-start leading-[150%] mb-6">
                  Freelance UI-UX Designer /<br></br>
                  Graphic Designer
                </p>
                <div className="text-primary-blue-1 px-5 py-2 border border-primary-blue-1 uppercase rounded-3xl max-w-[158px] flex justify-center items-center cursor-pointer mb-10 md:mb-0">
                  SEND MAIL
                </div>
              </div>
            </div>
            <div>
              <p className="uppercase text-[#EDEDED] font-light text-xl mb-4 text-center md:text-start">
                Follow Me
              </p>
              <ul className="flex justify-between w-full mb-12">
                <li className="mr-6 cursor-pointer">
                  <Link
                    href="https://www.behance.net/josephemmanuel2"
                    legacyBehavior
                  >
                    <a target="_blank">
                      <img src="imgs/behanceBlue.svg" alt="behance" />
                    </a>
                  </Link>
                </li>
                <li className="mr-6">
                  <Link href="https://dribbble.com/Joseph962" legacyBehavior>
                    <a target="_blank">
                      <img src="imgs/dribbleBlue.svg" alt="dribble" />
                    </a>
                  </Link>
                </li>
                <li className="mr-6">
                  <Link href="https://twitter.com/emaxj962" legacyBehavior>
                    <a target="_blank">
                      <img src="imgs/twitterBlue.svg" alt="twitter" />
                    </a>
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    href="https://www.linkedin.com/in/joseph-emmanuel-"
                    legacyBehavior
                  >
                    <a target="_blank">
                      <img src="imgs/linkedinBlue.svg" alt="linkedin" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://medium.com/@emaxj962" legacyBehavior>
                    <a target="_blank">
                      <img src="imgs/mediumBlue.svg" alt="medium" />
                    </a>
                  </Link>
                </li>
              </ul>
              <p className="uppercase text-[#EDEDED] font-light text-xl mb-4 text-center md:text-start">
                Cell:
              </p>
              <p className="uppercase text-[#BAFEFE] font-light text-xl mb-4 text-center md:text-start">
                +234 903 0179 104
              </p>
            </div>
          </div>
          <hr></hr>
          <p className="text-base text-[#EDEDED] font-light  py-4 text-center md:text-start">
            Website designed by{" "}
            <span className="text-white font-semibold ">Joseph Emmanuel</span>{" "}
            -- 2023 / All rights reserved.
          </p>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
