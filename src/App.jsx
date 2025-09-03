import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Modal from "./pages/Modal";
import Alert from "./pages/Alert";
import Dropdowns from "./pages/Dropdowns";
import Iframe from "./pages/Iframe";
import NewTab from "./pages/NewTab";
import RadioButton from "./pages/RadioButton";
import ShadowDom from "./pages/ShadowDom";
import TypeText from "./pages/TypeText";
import Looping from "./pages/Looping";
import NewWindow from "./pages/NewWindow";
import FileUpload from "./pages/FileUpload";
import NestedShadowDom from "./pages/NestedShadowDom";
import IframeShadow from "./pages/IframeShadow";
import DragDropIframe from "./pages/DragDropIframe";
import DragDropShadowDom from "./pages/DragDropShadowDom";
// Import other components as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Automation-Playground" element={<Home />} />
        <Route path="/component/modal" element={<Modal />} />
        <Route path="/component/alert" element={<Alert />} />
        <Route path="/component/dropdowns" element={<Dropdowns />} />
        <Route path="/component/iframe" element={<Iframe />} />
        <Route path="/component/newtab" element={<NewTab />} />
        <Route path="/component/radiobutton" element={<RadioButton />} />
        <Route path="/component/shadowdom" element={<ShadowDom />} />
        <Route path="/component/typetext" element={<TypeText />} />
        <Route path="/component/looping" element={<Looping />} />
        <Route path="/component/newwindow" element={<NewWindow />} />
        <Route path="/component/fileupload" element={<FileUpload />} />
        <Route path="/component/nestedshadowdom" element={<NestedShadowDom />} />
        <Route path="/component/iframeshadow" element={<IframeShadow />} />
        <Route path="/component/dragdropiframe" element={<DragDropIframe />} />
        <Route path="/component/dragdropshadowdom" element={<DragDropShadowDom />} />
        {/* Add more routes here */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
