import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/auth-action";
import loginLogo from "../../images/6333.jpg";

function LoginForm() {

  const dispatch = useDispatch();
  const [form, setForm] = useState({username:"", password:""});

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form))
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
 
  return (
    <section className="w-full h-screen bg-white">
      <div className="px-12 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-4/8 lg:w-4/8 md:w-4/8 mb-12 md:mb-0">
            <img
              src={loginLogo}
              className="w-96"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={onSubmit}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="text-3xl text-gray-700 font-bold mb-0">Welcome to Logistic Apps</p>
                </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                {/* <p className="text-center font-semibold mx-4 mb-0">Or</p> */}
              </div>

              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  onChange={onInputChange}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="username"
                  placeholder="Username"
                  name="username"
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <input
                  onChange={onInputChange}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Password"
                  name="password"
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Tidak punya akun?
                  <a
                    href="https://wa.me/6282273017654"
                    className="ml-1 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Hubungi Administrator
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
