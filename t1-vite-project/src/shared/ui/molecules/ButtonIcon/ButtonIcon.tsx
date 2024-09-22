import React from "react";

import Button from "../../atoms/Button/Button";
import "../../../../app/styles/index.css";

const ButtonIcon: React.FC = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return <Button onClick={handleClick} />;
};

export default ButtonIcon;
