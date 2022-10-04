import { useState } from "react";
import { postCurso } from "../../actions/asyncAction";

const ModalNuevo = (props) => {
  const { user } = props;
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    titulo: "",
    autor: "",
    resumen: "",
    imagenPromocional: "",
    idiomas: "",
    duracion: "",
    precio: "",
    fechaInicio: "",
  });

  const onChangeInput = (event) => {
    const el = event.target;
    setForm({
      ...form,
      [el.name]: el.value,
    });
  }
  const onSubmit = async () => {
    form.autor = user.usuario;
    await postCurso(form);
    setShowModal(false)
  }
  return (
    <>
      {
        user?.tipo === "maestro" ? (
          <button
            className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Nuevo Curso
          </button>
        ) : null
      }

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Nuevo Curso
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-lg font-bold mb-2">
                        Titulo
                      </label>
                      <input type="text" id="titulo" name="titulo" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={onChangeInput} />
                    </div>
                    <div class="mb-6">
                      <label className="block text-gray-700 text-lg font-bold mb-2">
                        Resumen
                      </label>
                      <input type="text" id="resumen" name="resumen" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={onChangeInput} />
                    </div>
                    <div class="mb-6">
                      <label className="block text-gray-700 text-lg font-bold mb-2">
                        Imagen
                      </label>
                      <input type="text" id="imagenPromocional" name="imagenPromocional" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={onChangeInput} />
                    </div>
                    <div class="mb-6">
                      <label className="block text-gray-700 text-lg font-bold mb-2">
                        Idioma
                      </label>
                      <input type="text" id="idiomas" name="idiomas" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={onChangeInput} />
                    </div>
                    <div class="mb-6">
                      <label className="block text-gray-700 text-lg font-bold mb-2">
                        Duración
                      </label>
                      <input type="text" id="duracion" name="duracion" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={onChangeInput} />
                    </div>
                    <div class="mb-6">
                      <label className="block text-gray-700 text-lg font-bold mb-2">
                        Precio
                      </label>
                      <input type="text" id="precio" name="precio" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={onChangeInput} />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onSubmit}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalNuevo;