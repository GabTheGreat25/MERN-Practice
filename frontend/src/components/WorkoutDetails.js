const WorkoutDetails = ({ workout }) => {
  // console.log(workout);
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      {new Date(workout.createdAt).toLocaleString()}
    </div>
  );
};

export default WorkoutDetails;
