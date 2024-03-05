import Button from "../Components/Button";
import UpdateNews from "./UpdateNews";

const Hero = () => {
  return (
    <section className="grid lg:grid-cols-3">
      <div className="  w-full lg:col-span-2 order-1 ">
        <picture>
          <source
            media="(max-width: 1023px)"
            srcset="src/assets/images/image-web-3-mobile.jpg"
          />
          <source
            media="(min-width: 1024px)"
            srcset="src/assets/images/image-web-3-desktop.jpg"
          />
          <img
            src="src/assets/images/image-web-3-desktop.jpg"
            alt="hero image"
            className="w-full"
          />
        </picture>
      </div>
      <div className="lg:h-full w-full mt-[64px] lg:mt-0 lg:row-span-2 order-3 lg:order-2">
        <UpdateNews />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:mt-5 w-full lg:col-span-2 order-2 lg:order-3">
        <h1 className="text-4xl mt-5 lg:mt-0  font-bold text-very_dark_blue lg:text-[56px] leading-10 lg:leading-[56px]">
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <p className="leading-6 mb-6">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Hero;
