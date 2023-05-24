import { getVideoById } from "@/lib/videos";
import { useEffect, useRef } from "react";
const PlayVideo = (props) => {
  console.log(JSON.stringify(props.video));
  const { video, videoId } = props;

  return (
    <div className="w-full  md:w-1/2 mx-auto">
      <iframe
        id="ytplayer"
        type="text/html"
        width="100%"
        height="360"
        className="rounded-md shadow-lg shadow-gray-600"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
        frameBorder="0"
      ></iframe>
      <div className="w-full mt-3">
        <p className="text-lg text-green-500">{video.snippet.publishTime}</p>
        <p>{video.snippet.description}</p>
        {/* <div className="w-1/2">
          <p className="text-lg text-green-500">{video.snippet.publishTime}</p>
          <div className="max-h-[16rem] overflow-y-auto break-words">
            <p>{video.snippet.description}</p>
          </div>
        </div>
        <div className="w-1/2"></div> */}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const videoId = context.query.videoId;
  return {
    props: {
      video: getVideoById(videoId),
      videoId,
    },
  };
}
export default PlayVideo;
