import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { FaGithub } from "react-icons/fa";


const Project = () => {
  return (
    <>
      <div className="group mt-10">
        <Card className="overflow-hidden relative shadow-lg">
          <CardHeader className="relative overflow-hidden">
            <Button className="w-24 -mt-14 mx-auto transform transition-transform duration-200 group-hover:translate-y-6">
              Read more
            </Button>
          </CardHeader>
          <CardContent className="p-4 transform transition-transform duration-200 -mt-10 group-hover:translate-y-6">
            <img
              src="https://placehold.co/1920x1080"
              className="rounded-md"
              alt="Placeholder"
            />
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row mt-5">
          <div className="text-sm md:text-base w-3/4 md:w-2/3">
            SaaS application for creating simple landing pages in minutes
            targeted to small businesses.
          </div>
          <div className="flex flex-col ml-auto text-right">
            <p>2024</p>
            <h2 className="text-xl font-bold">Visity</h2>
            <div className="flex gap-1 justify-end">
            <ArrowTopRightOnSquareIcon className="size-4"/>
            <FaGithub className="size-4" />
            </div>
          </div>
        </div>
    </>
  );
}

export default Project;
