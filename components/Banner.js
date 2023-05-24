import Image from "next/image";

const Banner = ({ title, subtitle, imgUrl }) => {
  const handlePlay = () => {};
  return (
    <div
      className={` w-full absolute top-0 bg-no-repeat p-10 sm:p-24  h-[80vh]`}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: "50% 50%",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="d-flex justify-start">
        <h3 className="sm:text-[4rem]">{title}</h3>
        <h3 className="sm:text-[2rem]">{subtitle}</h3>
        <button
          className="bg-white rounded-md px-10 py-2 mt-3 hover:shadow-md hover:bg-gray-100  inline-flex flex-row items-center justify-center text-black"
          onClick={handlePlay}
        >
          <Image
            src="/static/play_arrow.svg"
            width="32"
            height="32"
            alt="Play icon"
          />
          <span className="pl-1">Play</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
