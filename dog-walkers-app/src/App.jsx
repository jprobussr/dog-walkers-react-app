import './App.css';
import ghost from './assets/ghost-img-dog.jpg';
import WalkerCard from './components/WalkerCard.jsx';

const App = () => {
  return (
    <div className="app-shell">
      <header className="hero-card">
        <div className="brand-row">
          <span className="brand-badge">🐾</span>
          <p className="brand-name">Paw Walkers</p>
        </div>

        <p className="eyebrow">Trusted local dog care</p>

        <h1 className="hero-title">
          Book a walker your dog will actually love.
        </h1>

        <p className="hero-text">
          Browse trusted walkers, compare experience, and choose best match for
          your dog's routine.
        </p>

        <div className="hero-actions">
          <button className="primary-button">Find a Walker</button>
          <button className="secondary-button">Learn More</button>
        </div>

        <div className="hero-image-wrapper">
          <img src={ghost} alt="A happy dog outdoors" className="hero-image" />
        </div>
      </header>

      <main className="app-main">
        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">Available Paw Walkers</p>
              <h2 className="section-title">Meet your trusted dog walkers</h2>
            </div>

            <p className="section-text">
              Browse a few featured walkers and compare experience, care style,
              and pricing.
            </p>
          </div>

          <WalkerCard />
        </section>
      </main>
    </div>
  );
};

export default App;
