import './App.css';

const App = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Trusted local dog care</p>
        <h1 className="app-title">Dog Walkers</h1>
        <p className="app-description">
          Book trusted walkers, explore profiles, and find the right fit for
          your dog.
        </p>
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
