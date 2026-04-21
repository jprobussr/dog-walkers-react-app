import './App.css';
import ghost from './assets/ghost-img-dog.jpg';
import WalkerCard from './components/WalkerCard.jsx';
import { walkers } from './walker.js';



const App = () => {
  const firstWalker = walkers[0];

  console.log(firstWalker)

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
          <img src={ghost} alt="A happy dog indoors" className="hero-image" />
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

        {walkers.map((walker) => {
          return (
            <WalkerCard
              key={walker.id}
              image={walker.image}
              role={walker.role}
              name={walker.name}
              price={walker.price}
              bio={walker.bio}
              tagOne={walker.tagOne}
              tagTwo={walker.tagTwo}
              tagThree={walker.tagThree}
            />
          )
        })}
         
        </section>
      </main>
    </div>
  );
};

export default App;
