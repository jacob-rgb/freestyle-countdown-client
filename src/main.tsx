import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
//literals config
import './i18n.ts'
//styles
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import "primeflex/themes/primeone-light.css";
import "./assets/styles/variables.css";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </PrimeReactProvider>
  // </React.StrictMode>
);
