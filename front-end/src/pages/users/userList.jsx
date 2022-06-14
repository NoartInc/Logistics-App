import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, IconButton } from '@material-tailwind/react';

function userList() {

    const [users, setUser] = useState([])
    
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users')
        setUser(response.data);
    }

    const deleteUsers = async (id) => {
        await axios.delete('http://localhost:5000/users/${id}')
        getUsers();
    }

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <Button to='/add' className='blue md filled mt-2'>Tambah User
        </Button>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' id='users'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <th scope='col' className='px-6 py-3'>
                        id
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Nama
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Username
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Password
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Role
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Jabatan
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Kontak
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Email
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Action
                        <span className='sr-only'>Edit</span>
                    </th>
                </thead>
                <tbody>
                    { users.map((users, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={users.id}>
                            <td>{index+1}</td>
                            <td>{users.fullname}</td>
                            <td>{users.username}</td>
                            <td>{users.password}</td>
                            <td>{users.role}</td>
                            <td>{users.jabatan}</td>
                            <td>{users.contact}</td>
                            <td>{users.email}</td>
                            <td className="px-6 py-4 text-right">
                                <div className="inline-flex">
                                    <button to={`/edit/${users.id}`} className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                        Edit
                                    </button>
                                    <button onClick={ () => deleteProduct(users.id) } className="bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
    </div>
  )
}

export default userList