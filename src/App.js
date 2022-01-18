import "./styles.css";
import "reflect-metadata";
import { MemberGroups } from "./modules/list-groups";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MemberGroups />
      </div>
    </QueryClientProvider>
  );
}
