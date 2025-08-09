import { Route, Switch } from 'wouter'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  )
}

export default App
