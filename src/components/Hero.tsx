import {
  BriefcaseIcon,
  CakeIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function Hero() {
  return (
    <>
      <div className="w-full h-48 md:h-64 lg:h-48 overflow-hidden rounded-md">
        <img
          src="/banner.gif"
          className="w-full h-full object-cover"
          alt="Banner"
        />
      </div>
      <div className="-mt-10 ml-4">
        <img
          src="/pb.jpg"
          className="h-20 w-20 md:h-28 md:w-28 rounded-full"
          alt="Profile"
        />
        <h1 className="flex flex-row items-center gap-1 font-semibold text-3xl md:text-4xl mt-2">
          Tunahan Karakaya
          <CheckBadgeIcon className="size-6 inline-block align-text-bottom text-blue-300" />
        </h1>
        <p className="mt-2">
          I design and build digital products. CS Student at {" "}
          <HoverCard>
            <HoverCardTrigger className="underline">JKU Linz</HoverCardTrigger>
            <HoverCardContent>
              The JKU Linz is a leading Austrian university with focuses on
              business, law, computer science, and engineering.{" "}
            </HoverCardContent>
          </HoverCard>
        </p>
        <p>
          Oh and I like to watch {" "}
          <HoverCard>
            <HoverCardTrigger className="underline">anime</HoverCardTrigger>
            <HoverCardContent>
              Currently watching One Piece, as you can tell from the banner
            </HoverCardContent>
          </HoverCard>
        </p>
        <div className="flex flex-row flex-wrap text-[13px] md:text-base gap-3 md:gap-6 mt-4 text-gray-400">
          <p className="flex flex-row gap-1 justify-center items-center">
            <BriefcaseIcon className="size-4 md:size-5" />
            Student
          </p>
          <p className="flex flex-row gap-1 justify-center items-center">
            <CakeIcon className="size-4 md:size-5" />
            Oct 18th
          </p>
          <p className="flex flex-row gap-1 justify-center items-center">
            <CalendarDaysIcon className="size-4 md:size-5" />
            Joined Aug 2024
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
