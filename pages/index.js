import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import SectionCards from "@/components/SectionCards";
import { magic } from "@/lib/magic";
import { getVideos } from "@/lib/videos";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({ sections }) {
  const router = useRouter();


  return (
    <main className={`flex min-h-screen  `}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar userName={user?.email} /> */}
      <Banner
        title="Clifford the red dog"
        subtitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
      <div className="absolute top-[80vh]">
        {sections.map((section, index) => (
          <SectionCards
            key={index}
            title={section.title}
            videos={section.videos}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const sections = [
    {
      title: "Disney",
      videos: await getVideos("disney trailer", "large"),
    },
    {
      title: "Travel",
      videos: await getVideos("Travel", "small"),
    },
    {
      title: "Productivity",
      videos: await getVideos("Productivity", "medium"),
    },
    {
      title: "Popular",
      videos: await getVideos("Popular", "small"),
    },
  ];
  return { props: { sections } };
}
