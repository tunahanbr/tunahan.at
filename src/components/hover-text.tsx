import React from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";

interface HoverTextProps {
  text: string;
  hoverContent: React.ReactNode;
}

const HoverText: React.FC<HoverTextProps> = ({ text, hoverContent }) => {
  return (
    <HoverCard>
      <HoverCardTrigger className="underline">{text}</HoverCardTrigger>
      <HoverCardContent>{hoverContent}</HoverCardContent>
    </HoverCard>
  );
};

export default HoverText;
