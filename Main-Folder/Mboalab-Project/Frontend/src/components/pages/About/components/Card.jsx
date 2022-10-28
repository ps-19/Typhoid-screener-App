//internal imports
import "./Card.css";

const Card = ({ image, title, paragraph }) => {
  return (
    <div className="container-fluid">
      <div className="blog-card">
        <div
          className="media col-sm-6 col-xs-6"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="card-body col-sm-6 col-xs-6">
          {/* <p className="tagline text-center">Featured</p> */}
          <h3 className="title text-center">{title}</h3>
          <div className="divider"></div>
          <p className="paragraph text-justify">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
