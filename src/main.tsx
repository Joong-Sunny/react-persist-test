import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Detail from "./components/Detail.tsx";
import "./index.css";
import { store } from "./store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const queryClient = new QueryClient();
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/patient/:userid" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
