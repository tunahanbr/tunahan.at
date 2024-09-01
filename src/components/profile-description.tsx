import HoverText from "./hover-text";

const ProfileDescription: React.FC = () => {
    return (
      <div>
        <p>
          I design and build digital products. CS Student at{" "}
          <HoverText 
            text="JKU Linz" 
            hoverContent="The JKU Linz is a leading Austrian university with focuses on business, law, computer science, and engineering." 
          />.
        </p>
        <p>
          Oh and I like to watch{" "}
          <HoverText 
            text="anime" 
            hoverContent="Currently watching One Piece, as you can tell from the banner." 
          />.
        </p>
      </div>
    );
  };
  
  export default ProfileDescription;
  