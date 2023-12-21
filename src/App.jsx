import { QueryClientProvider, QueryClient } from "react-query";
import Dictionary from "./view";
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Dictionary />
    </QueryClientProvider>
  );
}

export default App;
