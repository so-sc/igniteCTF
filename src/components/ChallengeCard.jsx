import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChallengeCard({ title, path }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-full bg-slate-900 h-16 flex items-center justify-center  cursor-pointer shadow-outline"
      onClick={() => navigate(path)}
    >
      <h1 className="text-sm text-center">{title}</h1>
    </div>
  );
}
