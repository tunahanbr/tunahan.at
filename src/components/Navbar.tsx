import { Dock, DockIcon } from "@/components/magicui/dock";
import { FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator"

import { HomeIcon, CalendarIcon } from '@heroicons/react/24/solid'
import { FaTwitter,FaInstagram } from 'react-icons/fa'


function Navbar() {
  return (
    <>
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4 p-4 z-50">
  <Dock className="flex items-center bg-[#fefefe]" direction="bottom">
    <DockIcon>
      <HomeIcon className="w-6 h-6" />
    </DockIcon>
    <Separator orientation="vertical" />
    <DockIcon>
      <FaGithub className="w-6 h-6" />
    </DockIcon>
    <DockIcon>
      <FaTwitter className="w-6 h-6" />
    </DockIcon>
    <DockIcon>
      <FaInstagram className="w-6 h-6" />
    </DockIcon>
    <Separator orientation="vertical" />
    <DockIcon>
      <CalendarIcon className="w-6 h-6" />
    </DockIcon>
  </Dock>
</div>

    </>
  );
}

export default Navbar;
