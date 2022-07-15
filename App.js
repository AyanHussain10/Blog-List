import Navbar from  './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogsDetails from './BlogsDetails';
import NotFound from './NotFound';

function App() {//a component in a nutshell is a function like here
  // const title='Welcome to the blog!';
  // const link='www.google.com';

   return (//we can write any valid JS before this return, excpet for booleans and objects
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogsDetails />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>  
          {/* <h2>{title}</h2>
          <p>{Math.random()*100}</p>
          <a href={link}>Google site</a> */}
        </div>
      </div> 
    </Router>//though this may look like HTML, it isn't. it's JSX. A main difference is that in JSX it's classNAme and not just 'class' because we are inside JavaScript nd here class is reserved keyword
  );
}

export default App;//we then export this component
