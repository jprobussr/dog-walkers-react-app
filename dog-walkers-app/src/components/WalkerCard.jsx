const WalkerCard = (props) => {
  return (
    <article className="walker-card">
      <div className="walker-card-image-wrapper">
        <img src={props.image} alt={props.name} className="walker-card-image" />
      </div>

      <div className="walker-card-content">
        <div className="walker-card-header">
          <div>
            <p className="walker-card-role">{props.role}</p>
            <h3 className="walker-card-name">{props.name}</h3>
          </div>

          <span className="walker-card-price">{props.price}</span>
        </div>

        <p className="walker-card-bio">
          {props.bio}
        </p>

        <ul className="walker-card-tags">
          <li>{props.tagOne}</li>
          <li>{props.tagTwo}</li>
          <li>{props.tagThree}</li>
          
        </ul>

        <button className="walker-card-button">View Details</button>
      </div>
    </article>
  );
};

export default WalkerCard;
