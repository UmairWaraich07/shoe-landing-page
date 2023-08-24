import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="max-container">
      <div
        className="flex justify-between items-start gap-20 flex-wrap
    max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="object-contain"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex items-center justify-start gap-5">
            {socialMedia.map((icon) => (
              <a
                key={icon.alt}
                href="#"
                className="w-12 h-12 rounded-full flex justify-center items-center bg-white"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="flex flex-1 justify-between lg:gap-10 gap-20
        flex-wrap"
        >
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white mb-6 font-montserrat font-medium text-2xl">
                {section.title}
              </h4>
              {section.links.map((link) => (
                <li
                  key={link.name}
                  className="list-none text-white-400 font-montserrat leading-normal mt-3 hover:text-slate-gray"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-24 text-white-400 text-lg font-montserrat w-full flex items-center justify-between max-sm:flex-col gap-2">
          <p>&copy; Copyright. All rights reserved.</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
