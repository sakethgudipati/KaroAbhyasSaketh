import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Base from './components/Base/index'
import Classes from './components/Classes/index'
import Products from './components/Products/index'
import Login from './components/Login/index'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Base} />
      <Route exact path="/classes" component={Classes} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App
