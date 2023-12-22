import { useState } from "react";
import Headers from "../components/header";
import Meaning from "../components/meaning";
import { useDebounce } from "../hooks/useDebounce";
const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("keyword");
  const debouncedValue = useDebounce(searchTerm, 600);
  const updateSearchTerm = (term) => setSearchTerm(term.target.value);

  return (
    <div className="dark:bg-black min-h-screen">
      <Headers searchChange={updateSearchTerm} />
      <Meaning word={debouncedValue} />
    </div>
  );
};

export default Dictionary;
