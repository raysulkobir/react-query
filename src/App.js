import React from "react";
import './App.css';
import {
   useQuery,
   useMutation,
   useQueryClient,
   QueryClient,
   QueryClientProvider,
} from 'react-query'

import First from "./components/First"

const queryClient = new QueryClient()
function App() {
   return (
     <div>
        <QueryClientProvider client={queryClient}>
           <First/>
        </QueryClientProvider>
     </div>
   );
}

export default App;
