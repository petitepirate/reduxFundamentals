import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import './App.css';

function App() {
  return (
    <div className="App container">

      {/* HEADER */}
      <header className="App-header jumbotron mt-2">
        <h1 className="App-title display-4">Microblog</h1>
        <p className="lead">Get in the Rithm of blogging!</p>
        <nav>
          <NavLink exact to="/">Blog</NavLink>
          <NavLink exact to="/new">Add a new post</NavLink>
        </nav>
      </header>

      {/* ROUTES */}
      <Switch>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:postId">
          <PostPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
