import ReactStarsRating from 'react-awesome-stars-rating';
import { postCalificacion } from '../../actions/asyncAction';

const Card = (props) => {
  const { curso } = props;
  const user = JSON.parse(localStorage.getItem('credenciales'));

  const onChange = async (value) => {
    console.log({ calificacion: value, usuario: user.ID, curso: curso.ID });
    await postCalificacion({ calificacion: value, usuario: user.ID, curso: curso.ID });
  };

  return (
    <>
      <div className="h-96 w-full flex mb-12 bg-gray-100 shadow-2xl rounded-2xl">
        <div className="w-full h-full">
          {curso.imagenPromocional ? (
            <img src={curso.imagenPromocional} alt='curso' />
          ) : null}

        </div>
        <div className="border-gray-400 bg-gray-100 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
            </p>
            <div className="text-gray-900 font-bold text-4xl mb-2">{curso.titulo}</div>
            <p className="text-gray-700 text-lg">{curso.resumen}</p>
          </div>
          {user ? (
            <ReactStarsRating className="flex flex-inline" onChange={onChange} value={0} />
          ) : null}
          <div className="flex items-center">
            <div className="text-lg">
              <p className="text-gray-900 leading-none"> Autor: <strong className="text-cyan-500">{curso.autor}</strong></p>
              <p className="text-gray-600">Calificacion : <strong className="text-2xl">{curso.calificacion}</strong> de <strong className="text-2xl">{curso.contador}</strong> votos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;