import { useEffect, useState } from "react";
import { getCursos } from "../../actions/asyncAction";
import Card from "./Card";

const Listado = () => {

  // const [reload, setReload] = useState(false);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const lista = await getCursos();
      setCursos(lista.cursos);
    };
    fetchData();
  }, [setCursos]);

  return (
    <>
      <section className="flex justify-center p-12 pt-10 w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-10 place-items-center">
          {
            cursos?.map((item, index) => (
              <Card
                key={index}
                curso={item}
              />
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Listado;