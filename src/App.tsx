import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FindJobPage from "./pages/FindJob";
import Employers from "./pages/Employers";
import Candidates from "./pages/Candidates";
import Pricing from "./pages/Pricing";
import CustomerSupport from "./pages/CustomerSupport";
import Layout from "./components/ui/Layout/Layout";

// ! В ТЗ указано что надо добавить различные pages, использовал React Router DOM (альтернатива TanStack Router)
// * Layout компонент содержит в себе Header для отображения на каждой странице и последующей навигации
// * Home компонент отображает себе сам Home page
// * В ТЗ указано, необходимо подключить API, перейдите на FindJobPage for more Details

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/find-job" element={<FindJobPage />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<CustomerSupport />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
