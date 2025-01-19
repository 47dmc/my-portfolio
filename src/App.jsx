import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlexBank from "./flexbank/FlexBank";
import WellSips from "./wellsips/WellSips";
import Blogg from "./blogg/Blogg";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
           <Header />
           <Content />
           <Footer />
          </>
          }>
        </Route>

        <Route path="/flexbank/*" element={ <FlexBank /> }></Route>
        <Route path="/wellsips/*" element={ <WellSips /> }></Route>
        <Route path="/blogg/*" element={ <Blogg /> }></Route>
      </Routes>
    </Router>
  );
}
