import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function AddUser() {

    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [jabatan, setJabatan] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const saveUsers = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/users', {
            fullname: fullname,
            username: username,
            password: password,
            role: role,
            jabatan: jabatan,
            contact: contact,
            email: email
        })
        navigate.push('/')
    }

    return (
        <div className="w-full max-w-xs">
            <form onSubmit={saveUsers} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="Nama">Nama</label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Nama Lengkap"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Jabatan</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Jabatan"
                        value={jabatan}
                        onChange={(e) => setJabatan(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Handphone</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="No Handphone"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

            </form>

        </div>
    )
}

export default AddUser