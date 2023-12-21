/* eslint-disable */
import { useState } from "react";
import DictImage from "../assets/images/dict.svg";
import SearchSVG from "../assets/images/search.svg";
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
function Headers({ searchChange }) {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => setTheme((visible) => !visible);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-4 max-w-[1000px] mx-auto">
        <img
          src={DictImage}
          alt="dictionary"
          title="@copywrite Yohannes Assebe"
        />
        <div className="flex items-center justify-center gap-6 text-sm">
          <select className="py-1 pl-1 pr-10 font-sans font-light border rounded-md outline-none">
            <option>Serif</option>
            <option>Mono serif</option>
          </select>
          {!theme ? (
            <FiMoon
              className="text-lg cursor-pointer"
              onClick={() => toggleTheme()}
            />
          ) : (
            <MdOutlineWbSunny
              className="text-lg cursor-pointer"
              onClick={() => toggleTheme()}
            />
          )}
        </div>
      </div>
      <div className="relative flex items-center justify-center py-6 rounded-lg max-w-[1000px] mx-auto px-4">
        <input
          className="w-full h-full px-3 py-2 border rounded-lg outline-none placeholder:font-poppins placeholder:text-gray-800 bg-slate-200"
          placeholder="Keyword"
          onChange={searchChange}
        />
        <img src={SearchSVG} className="absolute right-9" />
      </div>
    </div>
  );
}

export default Headers;
