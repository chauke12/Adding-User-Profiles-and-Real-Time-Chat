import React from 'react'; // React import is essential
import ProfilePage from './pages/profile'; // Make sure this path is correct

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Forum View App!</h1>
      <ProfilePage /> {/* Make sure ProfilePage is correctly set up */}
    </div>
  );
}

export default App;
