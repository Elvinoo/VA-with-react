import { useState } from "react";
import ButtonsAfterHover from "../ButtonsAfterHover/ButtonsAfterHover";
import ButtonsBeforeHover from "../ButtonsBeforeHover/ButtonsBeforeHover";
function Buttons() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };
  return (
    <div className="buttons">
      {isHovered ? (
        <ButtonsAfterHover handleHoverOut={handleHoverOut} />
      ) : (
        <ButtonsBeforeHover handleHover={handleHover} />
      )}
    </div>
  );
}

export default Buttons;
