import React from "react";
import { useSelector } from "react-redux";

const NameDisplay = () => {
  const name = useSelector((state) => state.user.name);

  return (
    <div>
      <h1>{name ? `아프세요? ${name}님!` : "환자임? 이름을 입력하세요."}</h1>
    </div>
  );
};

export default NameDisplay;
