// src/components/LessonPlayer.js
import React from "react";

const LessonPlayer = ({ lessonContent }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold">Lesson Player</h2>
      <div className="mt-2">{lessonContent}</div>
      {/* Implement video or text content viewer logic here */}
    </div>
  );
};

export default LessonPlayer;
