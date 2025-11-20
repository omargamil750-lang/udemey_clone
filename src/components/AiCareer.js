import { aiCareerData } from "../data/aiCareerData";

function AiCareer() {
  return (
    <section className="ai-career">
      <div className="ai-text">
        <h1>{aiCareerData.title}</h1>
        <p>{aiCareerData.subtitle}</p>
        <ul>
          {aiCareerData.points.map((pt, index) => (
            <li key={index}>{pt}</li>
          ))}
        </ul>
        <button>Learn more</button>
      </div>

      <div className="ai-images">
        {aiCareerData.images.map((img, index) => (
          <img key={index} src={img} alt="ai" />
        ))}
      </div>
    </section>
  );
}

export default AiCareer;
