import './App.css';
import ghost from './assets/ghost-img-dog.jpg';

const App = () => {
  return (
    <div className="app-shell">
      <header className="hero-card">
        <div className="brand-row">
          <span className="brand-badge">🐾</span>
          <p className="brand-name">Dog Walkers</p>
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
          <h2 className="section-title">Welcome</h2>
          <p className="section-text">
            We are building your mobile-first dog walking app one step at a
            time.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
