import { features } from "../Constants";

const Features = () => {
  return (
    <section className="flex flex-col  gap-8 lg:flex-row md:justify-between">
      {features.map((item) => (
        <div key={item.title} className="flex gap-6 ">
          <img
            className="w-full max-w-24 object-cover "
            src={item.img}
            alt="image"
          />
          <div>
            <span className="font-bold text-3xl opacity-40">{item.number}</span>
            <a
              href="#"
              className="pt-3 font-extrabold text-lg text-very_dark_blue leading-6 transition-color  hover:cursor-pointer hover:text-soft_red focus:text-soft_red hover:duration-150 block outline-none"
            >
              {item.title}
            </a>
            <p className="pt-2 text-sm leading-7">{item.paragraph}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
