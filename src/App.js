import { BrowserRouter, Route } from "react-router-dom"
import { UserContextProvider } from 'context/UserContext'
import { RouteContextProvider } from 'context/RouteContext'
//Pages
import Home from 'pages/home'
import Login from 'pages/login'

function App() {
  return (
    <UserContextProvider>
      <RouteContextProvider>
        <BrowserRouter>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </RouteContextProvider>
    </UserContextProvider>
  )
}

export default App