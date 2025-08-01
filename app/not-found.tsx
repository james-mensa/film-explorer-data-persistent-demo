export default function NotFound() {
    return (
      <main
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            404 - This page could not be found.
          </h1>
          <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
        </div>
      </main>
    );
  }