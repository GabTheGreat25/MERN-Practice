import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  console.log(workouts);
  console.log(setWorkouts);
  console.log(useState(null));

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      console.log(response);
      console.log(json);
      console.log(response.ok);
      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
    console.log(fetchWorkouts);
  }, []);

  console.log(useEffect);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
