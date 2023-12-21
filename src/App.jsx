import { QueryClientProvider, QueryClient } from "react-query";
import Headers from "./components/header";
import Meaning from "./components/meaning";
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div>
        <Headers />
        <Meaning />
      </div>
    </QueryClientProvider>
  );
}

export default App;
