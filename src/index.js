import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import TopHeadlines from "./pages/TopHeadlines";
import GeneralHeadlines from "./components/TopHeadlines/GeneralHeadlines";
import WorldHeadlines from "./components/TopHeadlines/WorldHeadlines";
import NationHeadlines from "./components/TopHeadlines/NationHeadlines";
import BusinessHeadlines from "./components/TopHeadlines/BusinessHeadlines";
import TechnologyHeadlines from "./components/TopHeadlines/TechnologyHeadlines";
import EntertainmentHeadlines from "./components/TopHeadlines/EntertainmentHeadlines";
import ScienceHeadlines from "./components/TopHeadlines/ScienceHeadlines";
import SportsHeadlines from "./components/TopHeadlines/SportsHeadlines";
import HealthHeadlines from "./components/TopHeadlines/HealthHeadlines";
import { QueryClientProvider, QueryClient } from "react-query";
import LoginPage from "./pages/LoginPage";
import TokenExpirationChecker from "./components/TokenExpirationChecker/TokenExpirationChecker";
import { ReduxProvider } from "./redux/ReduxProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="top-headlines" element={<TopHeadlines />}>
        <Route path="general" element={<GeneralHeadlines />} />
        <Route path="world" element={<WorldHeadlines />} />
        <Route path="nation" element={<NationHeadlines />} />
        <Route path="business" element={<BusinessHeadlines />} />
        <Route path="technology" element={<TechnologyHeadlines />} />
        <Route path="entertainment" element={<EntertainmentHeadlines />} />
        <Route path="sports" element={<SportsHeadlines />} />
        <Route path="science" element={<ScienceHeadlines />} />
        <Route path="health" element={<HealthHeadlines />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Route>
  )
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
      <ReduxProvider>
        <TokenExpirationChecker minutues={1} />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ReduxProvider>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
