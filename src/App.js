import { HashRouter, Switch, Route, useHistory, useLocation } from "react-router-dom";
import './App.less';
import { Button } from 'antd';
import Login from "./pages/login";
import GetItem from "./pages/setting";
import Home from "./pages/home";
function App() {
  return (

    <HashRouter>
      <Switch  >
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>

        <Route path="/setting" component={GetItem}></Route>
      </ Switch>

    </HashRouter>
  );
}

export default App;
