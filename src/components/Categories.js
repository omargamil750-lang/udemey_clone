import { categories } from "../data/categoriesData";

function Categories() {
  return (
    <section className="categories">
      <h2>Learn essential career and life skills</h2>
      <div className="category-cards">
        {categories.map((item) => (
          <div key={item.id} className="category-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.learners} learners</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
