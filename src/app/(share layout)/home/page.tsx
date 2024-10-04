import Leaderboard from "@/components/Leaderboard";
import RegionalChampions from "@/components/RegionalChampions";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PostCard from "@/components/PostCard";
import { getUserPosts } from "../../../../actions/getUserPosts";
import ContentCard from "@/components/ContentCard";
export default async function Home() {
  const userposts = await getUserPosts();

  const list = [
    {
      title: "Story Za Pesa",
      img: "/images/bike.jpg",
      price: "$5.50",
    },
    {
      title: "Bike yangu ",
      img: "/images/mama.webp",
      price: "$3.00",
    },
    {
      title: "Story Za Pesa",
      img: "/images/bike.jpg",
      price: "$5.50",
    },
    {
      title: "Bike yangu ",
      img: "/images/mama.webp",
      price: "$3.00",
    },
  ];
  return (
    <div className="lg:container-fluid p-4 mb-12 sm:p-8 lg:mt-16 bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className="flex flex-col p-6 items-center justify-center mt-4  mb-6">
        <h2
          className="text-6xl font-bold p-4 text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text"
        >
          BodaHub
        </h2>
        <p className="text-slate-500 text-wrap font-bold text-sm w-[220px] text-center">
          Connecting riders all over Kenya.{" "}
          <span className="text-sm font-semibold text-emerald-500 mb-4">
            Join us for great news and deals
          </span>
        </p>
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <div className="flex w-max space-x-4 p-4">
          {list.map((item, index) => (
            <Card shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  isZoomed
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[120px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <p className="text-sm font-semibold">{item.title}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <ScrollBar className="mt-4" orientation="horizontal" />
      </ScrollArea>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-3 ">
        <div className="lg:col-span-8 col-span-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            {userposts.map((userPost, index) => (
              <ContentCard
                key={index}
                videoURL={userPost.videoURL}
                title={userPost.title}
                category={userPost.category}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-4">
            <div className="mb-">
              <Leaderboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
