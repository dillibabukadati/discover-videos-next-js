import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Card = ({ imgUrl, link, size = "medium" }) => {
  const [imgSource, setImgSource] = useState(imgUrl);

  const sizes = {
    small: { width: 300, height: 150 },
    medium: { width: 150, height: 200 },
    large: { width: 170, height: 350 },
  };
  const handleImageError = () => {
    setImgSource(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1759&q=80"
    );
  };

  return (
    <Link href={link} >
      <div
        className="relative duration-500 hover:scale-[1.1] hover:z-[20] hover:shadow-lg m-[1px]"
        style={{
          height: `${sizes[size].height}px`,
          width: `${sizes[size].width}px`,
        }}
      >
        <Image
          src={imgSource}
          layout="fill"
          alt="img"
          onError={handleImageError}
          className="object-cover rounded-md bg-center"
        />
      </div>
    </Link>
  );
};

export default Card;
