import React from 'react'
import { Link } from 'react-router-dom'

const menuList = [
    { path: "/", title: "Home" },
    { path: "/addUser", title: "add User" },
    { path: "/editUser", title: "edit User" },
    { path: "/userList", title: "User List" }
]

const AdminLayout = ({ children }) => {
  return (
    <div>
        <header className="sticky top-0">
            <nav className="bg-gray-800 text-white border-b border-gray-200 shadow-sm flex justify-start items-center gap-x-3">
                <h1 className="p-3 px-4">Admin Panel</h1>
                <ul className="flex justify-start items-center gap-x-2">
                    {menuList.map((menu, index) => (
                        <li key={index}>
                            <Link 
                                to={menu.path} 
                                className="p-3 px-4 hover:bg-gray-700 transition-all duration-200 ease-in-out"
                            >{menu.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        <main className="p-4">
            {children}
        </main>
        <footer className="bottom-0 w-full p-2 bg-gray-100">
            <p className="text-center">Copyright &copy; 2022</p>
        </footer>
    </div>
  )
}

export default AdminLayout