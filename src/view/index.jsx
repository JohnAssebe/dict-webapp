import { useState } from "react";
import Headers from "../components/header";
import Meaning from "../components/meaning";
import { useDebounce } from "../hooks/useDebounce";
const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState();
  const debouncedValue = useDebounce(searchTerm, 400);
  const updateSearchTerm = (term) => setSearchTerm(term.target.value);

  return (
    <div>
      <Headers searchChange={updateSearchTerm} />
      <Meaning word={debouncedValue} />
    </div>
  );
};

export default Dictionary;
