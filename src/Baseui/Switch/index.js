import { useState } from "react";

const Switch = ({ items }) => {
  const [isToggle, setIsToggle] = useState(false);

  const handelToggel = () => {
    setIsToggle(!isToggle);
  };

  const activeStyle =
    "bg-clip-text text-transparent br-gradient-to-r from-[#c0fecf] to-[#1ed5a9]";

  return (
    <div className="h-8 border-solid border-tmdbDarkB1ue rounded-[30px] border-[1px] font-semibold flex relative items-center z-[1]">
      <div onClick={handelToggel} className={`px-5 py-1 h-8 rounded-[30px]`}>
        {items[0]}
      </div>
      <div onClick={handelToggel} className="px-5 py-1 h-8 rounded-[30px]">
        {items[1]}
      </div>
      <div
        className="h-8 rounded-[30px] bg-tmdbDarkBlue w-20 absolute z-[-1] transition-all duration-300"
        style={
          isToggle
            ? { right: "0", width: "120px" }
            : { left: "0", width: "100px" }
        }
      ></div>
    </div>
  );
};

export default Switch;
