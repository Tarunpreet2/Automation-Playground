import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ComponentButton from "./ComponentButton";
import DragDropIframe from "./pages/DragDropIframe";

const components = [
  { name: "MODAL", path: "modal" },
  { name: "ALERT", path: "alert" },
  { name: "IFRAME", path: "iframe" },
  { name: "SHADOWDOM", path: "shadowdom" },
  { name: "TYPE TEXT", path: "typetext" },
  { name: "DROPDOWNS", path: "dropdowns" },
  { name: "NEW TAB", path: "newtab" },
  { name: "RADIO BUTTONS", path: "radiobutton" },
  { name: "LOOPING", path: "looping" },
  { name: "FILE UPLOAD", path: "fileupload" },
  { name: "NESTED SHADOW DOM", path: "nestedshadowdom" },
  { name: "IFRAME SHADOW", path: "iframeshadow" },
  { name: "DRAG DROP IFRAME", path: "dragdropiframe" },
  { name: "DRAG DROP SHADOW DOM", path: "dragdropshadowdom" },
  // Add more components as needed
];

function Home() {
  const navigate = useNavigate();
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="container">
      <header>
        <div className="header-content">
          <nav>
            <button onClick={togglePanel} aria-label="Open Panel">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </nav>
        </div>
        {isPanelOpen && (
          <div className="panel">
            {components.map((component, index) => (
              <div key={index}>
                <a href={`/component/${component.path}`}>{component.name}</a>
              </div>
            ))}
          </div>
        )}
        <br />
        <h1>Welcome to Automation Playground!</h1>
        <br />
        <p>Use this website to test your Low Code Automation tool.</p>
        <p>As it has various cases and many types of elements on which you can validate the proficiency of your tool.</p>
        <br />
      </header>
      <div className="components">
        {components.map((component, index) => (
          <ComponentButton
            key={index}
            label={component.name}
            ariaLabel={`Test for ${component.name.toLowerCase()}`}
            dataTest={`component-${index}`}
            onClick={() => navigate(`/component/${component.path}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
