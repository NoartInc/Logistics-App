import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import AddUser from "./pages/users/AddUser";
import EditUser from "./pages/users/EditUser";
import UserList from "./pages/users/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<UserList />} />
        <Route path="/user/edit" element={<EditUser />} />
        <Route path="/user/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
