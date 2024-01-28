import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import { ChakraProvider } from "@chakra-ui/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/chats" element={<Chatpage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
