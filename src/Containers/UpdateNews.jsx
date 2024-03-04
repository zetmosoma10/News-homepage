import { updates } from "../Constants";

const UpdateNews = () => {
  return (
    <div className="bg-very_dark_blue text-off_white p-5 space-y-7">
      <h2 className="font-bold text-3xl mb-8 lg:text-[40px] text-soft_orange">
        New
      </h2>
      {updates.map((item) => (
        <div className="pb-7 border-b border-grayish_blue">
          <a
            href="#"
            className="font-extrabold leading-6 text-xl transition-all hover:text-soft_orange hover:duration-75"
          >
            {item.heading}
          </a>
          <p className="mt-2">{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default UpdateNews;
