import { useEffect } from "react";

const Filter = ({ popular, setFiltred, setActiveGenre, activeGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
        setFiltred(popular);

      return;
    }
    const filtred = popular.filter((dish) => {
      return dish.category.includes(activeGenre);
    });
    setFiltred(filtred);
    console.log('hello');
  }, [activeGenre]);
  return (
    <div className="flex flex-wrap gap-5 justify-center items-center py-4">
      <button
        onClick={() => {
          setActiveGenre(9);
        }}
        className={
          activeGenre === 9
            ? " bg-green-700 text-white font-bold py-2 px-4 rounded-full  cursor-pointer  transition-all duration-150 "
            : " hover:bg-green-800 bg-white rounded-full hover:text-white text-green-700 font-bold py-2 px-4  cursor-pointer  transition-all duration-200"
        }
      >
        Popular
      </button>
     
      <button
        onClick={() => {
          setActiveGenre(40);
        }}
        className={
          activeGenre === 40
            ? " bg-green-700 text-white font-bold py-2 px-4 rounded-full  cursor-pointer  transition-all duration-150 "
            : " hover:bg-green-800 bg-white rounded-full  hover:text-white text-green-700 font-bold py-2 px-4   cursor-pointer transition-all duration-200"
        }
      >
        Latest
      </button>
      <button
        onClick={() => {
          setActiveGenre(10);
        }}
        className={
          activeGenre === 10
            ? " bg-green-700 text-white font-bold py-2 px-4 rounded-full  cursor-pointer  transition-all duration-150 "
            : " hover:bg-green-800 bg-white rounded-full  hover:text-white text-green-700 font-bold py-2 px-4   cursor-pointer transition-all duration-200"
        }
      >
        Tagine
      </button>
      <button
        onClick={() => {
          setActiveGenre(20);
        }}
        className={
          activeGenre === 20
            ? " bg-green-700 text-white font-bold py-2 px-4 rounded-full  cursor-pointer  transition-all duration-150 "
            : " hover:bg-green-800 bg-white rounded-full hover:text-white text-green-700 font-bold py-2 px-4  cursor-pointer  transition-all duration-200"
        }
      >
        sweets
      </button>
    </div>
  );
};

export default Filter;
