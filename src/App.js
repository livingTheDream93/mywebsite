import './App.css';
import { routes } from './routes/router';
import { Route,  Switch } from 'react-router-dom';
import { Layout } from './layout/layout';

function App() {
  return (
    <div className="App">
      <Switch>
        {
          routes.map(el => {
            return (
              <Route exact path={el.path} key={el.key} render={
                () => {
                  return (
                    <Layout view={el.component}/>
                  )
                }
              }></Route>
            )
          })
        }
      </Switch>
    </div>
  );
}

export default App;
