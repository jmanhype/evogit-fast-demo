import React from 'react';

/**
 * Main App component for the EvoGit Fast Demo
 * This is a minimal React app demonstrating automated code improvement
 */
function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        <h1>EvoGit Fast Demo</h1>
        <p>A self-improving React application powered by Claude Code</p>
      </header>
      <main style={styles.main}>
        <section style={styles.section}>
          <h2>Status: Working ✓</h2>
          <p>This application is maintained by automated Claude Code workflows.</p>
        </section>
      </main>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  section: {
    margin: '20px auto',
    maxWidth: '600px',
  },
};

export default App;