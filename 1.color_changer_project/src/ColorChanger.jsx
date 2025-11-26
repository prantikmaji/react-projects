import React from "react";

function ColorChanger({ color }) {
    
  const bg = document.body;
  const changeColor = () => {
    bg.style.background = color;
  };

  return (
    <>
      <button
        className="w-100 h-full m-1 mr-2 rounded-3xl border-2 "
        style={{ background: color }}
      //  onClick={changeColor}
      //better 
      onClick={()=>(changeColor())}
      >
        {color}
      </button>
    </>
  );
}

export default ColorChanger;
