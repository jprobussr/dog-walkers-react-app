const WalkerCard = () => {
  return (
    <article className="walker-card">
      <div className="walker-card-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80"
          alt="Dog walker profile"
          className="walker-card-image"
        />
      </div>

      <div className="walker-card-content">
        <div className="walker-card-header">
          <div>
            <p className="walker-card-role">Top Rated Paw Walker</p>
            <h3 className="walker-card-name">Amy Lynn</h3>
          </div>

          <span className="walker-card-price">$24</span>
        </div>

        <p className="walker-card-bio">
          Friendly and dependable walker with 5 years of experience caring for
          energetic dogs, puppies, and senior pets.
        </p>

        <ul className="walker-card-tags">
            <li>30 min walks</li>
            <li>Puppy Care</li>
            <li>Downtown</li>
        </ul>

        <button className="walker-card-button">View Details</button>
      </div>
    </article>
  );
};

export default WalkerCard;
