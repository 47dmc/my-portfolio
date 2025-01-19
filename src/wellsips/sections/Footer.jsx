import { tealogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 md:px-24 lg:px-32 bg-black pt-6 pb-4 text-white">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="flex">
            <img src={tealogo} alt="logo" className="m-0" />
            <h1 className="text-4xl font-bold text-lime-600">WellSips</h1>
          </a>
          <p className="mt-6 text-base font-montserrat text-white-400 sm:max-w-sm text-lime-100">
            Buy your quality premium tea from our online <br />
            store and get 20%-30% off on all products valid till <br />
            the end of February for the winter sales.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-lime-600 rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-4xl leading-normal font-medium mb-6 text-lime-300">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-lime-100 hover:text-lime-700"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex text-md md:text-lg justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <p className="font-montserrat cursor-pointer text-lime-200 hover:text-lime-700">
          Copyright &copy;. All rights reserved.
        </p>
        <p className="font-montserrat cursor-pointer text-lime-200 hover:text-lime-700">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
