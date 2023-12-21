/* eslint-disable */
import { useSearchWords } from "../hooks/useSearch";
import { FaPlay } from "react-icons/fa";
const Meaning = () => {
  const { data: searchWord, isLoading: load } = useSearchWords("keyboard");
  console.log(searchWord);
  return (
    <div className="w-full">
      <div className="max-w-[1000px] mx-auto px-6 font-openSans">
        <div className="flex items-center justify-between">
          <div className="py-2">
            <h3 className="text-4xl font-bold font-poppins">
              {searchWord?.word}
            </h3>
            <p className=" text-darkPink">{searchWord?.phonetic}</p>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lightPink">
            <FaPlay className="text-darkPink" />
          </div>
        </div>
        <div className="py-6">
          {searchWord?.meanings?.map((mean, _) => (
            <div key={_}>
              <h4 className="py-3 text-2xl font-bold">{mean.partOfSpeech}</h4>
              <h6 className="px-3 py-1 text-sm text-slate-600">Meaning</h6>
              <ul className="py-2 pl-6 space-y-2 font-medium list-disc list-inside">
                {mean?.definitions?.map((defn, __) => (
                  <li key={__} className="text-xs text-slate-600">
                    {defn?.definition}
                    {defn?.example && (
                      <span className="block my-2 pl-4">{defn.example}</span>
                    )}
                  </li>
                ))}
              </ul>
              {mean?.synonyms.length > 0 && (
                <div className="flex items-center gap-1 py-2 my-2 text-sm justify-normal">
                  <h6 className="px-3 py-1 text-slate-600">Synonyms:</h6>
                  {mean?.synonyms?.map((sym, _, arr) => (
                    <p className="font-semibold text-darkPink">
                      {sym}
                      {_ == arr.length - 1 ? "" : " ,"}
                    </p>
                  ))}
                </div>
              )}

              {mean?.antonyms.length > 0 && (
                <div className="flex items-center gap-1 py-2 my-2 text-sm justify-normal">
                  <h6 className="px-3 py-1 text-slate-600">Antonyms:</h6>
                  {mean?.antonyms?.map((ant, _, arr) => (
                    <p className="font-semibold text-darkPink">
                      {ant}
                      {_ == arr.length - 1 ? "" : " ,"}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meaning;
