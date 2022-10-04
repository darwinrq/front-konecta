import { useEffect, useState } from "react";
import { postLogin } from "../../actions/asyncAction";
import ModalNuevo from "../curso/ModalNuevo";


const Menu = () => {

  const [form, setForm] = useState({
    usuario: "",
    clave: "",
  });
  const [user, setUser] = useState(false);

  const onChangeInput = (event) => {
    const el = event.target;
    setForm({
      ...form,
      [el.name]: el.value,
    });
  }
  const onChangelogin = async () => {
    const userLogin = await postLogin(form);
    setUser(userLogin.data);
    localStorage.setItem('credenciales', JSON.stringify(userLogin.data));
  }

  const onChangelogout = async () => {
    setUser(null);
    localStorage.setItem('credenciales', null);
  }

  useEffect(() => {
    const credenciales = localStorage.getItem('credenciales');
    if (credenciales) {
      setUser(JSON.parse(credenciales));
    }
  }, [setUser]);

  return (
    <>
      <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <div>
            Reto tecnico
          </div>
          <div className="flex items-center">
            <button className="inline-flex rounded-md py-2 px-4 transition duration-700 ease-in-out border bg-blue-400 text-white text-base hover:border-primary hover:bg-blue-600 relative group">
              {user ? (
                <>
                  <span className="pl-2">{user?.usuario}</span>
                  <div className="bg-white py-3 border border-gray-300 rounded-xl shadow-lg hidden flex-col absolute right-0 top-10 divide-y divide-gray-300 px-3 w-24 group-hover:block z-10">
                    <div className="w-90">
                      <div className="flex items-center justify-between text-sm">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onChangelogout}>
                          Salir
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <span className="pl-2">Login</span>
                  <div className="bg-white py-3 border border-gray-300 rounded-xl shadow-lg hidden flex-col absolute right-0 top-10 divide-y divide-gray-300 px-3 w-96 group-hover:block z-10">
                    <div className="w-90">
                      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Usuario
                          </label>
                          <input type="text" id="usuario" name="usuario" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={onChangeInput} />
                        </div>
                        <div class="mb-6">
                          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Clave
                          </label>
                          <input type="password" id="clave" name="clave" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={onChangeInput} />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onChangelogin}>
                            Ingresar
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-lg font-medium">
              <li>
                <a href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Cursos</a>
              </li>
              <li>
                <a href="/" className="text-gray-900 dark:text-white hover:underline">Comunidad</a>
              </li>
              <li>
                <a href="/" className="text-gray-900 dark:text-white hover:underline">Planes</a>
              </li>
              <li>
                <a href="/" className="text-gray-900 dark:text-white hover:underline">Contactanos</a>
              </li>

            </ul>
            <ModalNuevo user={user} />

          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;