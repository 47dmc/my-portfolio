import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className="px-6 sm:px-12 md:px-24 lg:px-32 py-10">
    <div className="flex md:flex-row flex-col mb-8 w-full">
      <div className="flex flex-col justify-start items-start">
        <div className="flex justify-start items-center gap-12">
          <img src={logo} alt="FlexBank" className="w-[60px] h-[60px]" />
          <h1 className="flex justify-center items-center text-4xl font-bold w-[60px] h-[60px]">
            FlexBank
          </h1>
        </div>
        <p className="mt-4 text-dimWhite">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 md:pl-16">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="flex flex-col my-4">
            <h4 className="font-poppins font-medium text-[18px] text-[#8F0D0D] font-bold">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] text-dimWhite hover:text-[#8F0D0D] cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#570909]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 p-2">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
