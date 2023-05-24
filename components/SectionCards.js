import Card from "./Card";

const SectionCards = ({ title, videos=[], index }) => {
  return (
    <div className="w-[100vw]">
      <div className="max-w-[96vw] mx-auto">
        <h2 className="text-2xl py-3">{title || "Watch Again"}</h2>
        <div className="max-w-full overflow-x-auto">
          <div className="relative my-4" key={index}>
            <div className="flex flex-row ">
              {videos.map((video, index) => (
                <Card
                  key={index}
                  imgUrl={video.imgUrl}
                  link={video.link}
                  size={video.size}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
