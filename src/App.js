import React from 'react'
import Post from './components/Post.js'
import { ErrorBoundary } from 'react-error-boundary'
import './css/App.css'

  function ErrorFallback({ error, resetErrorBoundary  }) {
    return (
      <div>
        <p>Something went wrong:</p>
        <pre>{error}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

function App() {
  return (
    <div className="App">
      <h1>My post:</h1>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
      >
        <Post />
      </ErrorBoundary>
    </div>
  );
}

export default App;
