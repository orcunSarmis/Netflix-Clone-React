import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage  from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  // localhost:3000/
  return (

  <div>
    <Switch>
      <Route path='/'>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
    </Switch>
  </div>  
  );
}

export default App;
