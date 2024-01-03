import "./Tours.css";
const Tours = ({ tours }) => {
  return (
    <div className="tours-container">
      {tours.map((tour) => (
        <div className="tour-card" key={tour.id}>
          <img src={"./images/" + tour.imagelink} alt={tour.name} />
          <div className="tour-desc-container">
            <h3 className="tour-name">{tour.name}</h3>
            <p className="tour-desc">{tour.desc}</p>
            <p className="tour-duration">
              {tour.days} days {tour.nights} nights
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tours;
