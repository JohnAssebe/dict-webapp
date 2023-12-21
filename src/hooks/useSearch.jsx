import { api } from "./api";
import { useQuery } from "react-query";
const getWords = async (term) => {
  const response = await api.get(term);
  return response;
};

export const useSearchWords = (term) => {
  return useQuery(["meaning", term], () => getWords(term));
};
