function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>
        ⭐ {course.rating} ({course.learners} ratings)
      </p>
      <p>£{course.price}</p>
    </div>
  );
}

export default CourseCard;
