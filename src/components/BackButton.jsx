import React from "react";
import ArrowIcon from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <img
      src={ArrowIcon}
      width={40}
      className="absolute top-5 left-2"
      onClick={() => navigate("/")}
    />
  );
}
