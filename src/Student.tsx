type StudentProps = {
  name: string;
  course: string;
}

const Student = ({ name, course }: StudentProps) => {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>{course}</p>
    </div>
  );
};

export default Student;