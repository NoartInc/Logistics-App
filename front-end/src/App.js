import { BrowserRouter, Routes, Route, Link, Redirect  } from 'react-router-dom'
import addUser from './pages/users/addUser';
import editUser from './pages/users/editUser';
import userList from './pages/users/userList';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/user' component={userList} />
        <Route path='/user/edit' component={editUser} />
        <Route path='/user/add' component={addUser} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
