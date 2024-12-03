import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 py-4 mx-auto rounded-md bg-green-700 border-[2px] border-green-50 border-solid blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
