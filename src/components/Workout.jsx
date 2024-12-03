import React from "react";
import SectionWraper from "./SectionWraper";
import ExerciseCard from "./ExerciseCard";

export default function Workout(props) {
  const { workout } = props;
  return (
    <SectionWraper
      id={"workout"}
      header={"hit the gym"}
      title={["The", "Real", "DEAL"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExerciseCard exercise={exercise} i={i} key={i} />;
        })}
      </div>
    </SectionWraper>
  );
}
