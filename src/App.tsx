import { LocationProvider, Route, Router } from "preact-iso";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <LocationProvider>
      <Router>{[<Route key="home" path="/" component={HomePage} />]}</Router>
    </LocationProvider>
  );
}

export default App;
