

import React from "react";
import BackButton from "../components/BackButton";

const dragDropHtml = `
  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: #fff;
    }
    #container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    #dropzone.drag-over {
      border-color: #2196f3;
      background: #f0f8ff;
    }
    #draggable.dragging {
      opacity: 0.5;
    }
    #dropzone {
      width: 300px;
      height: 150px;
      border: 2px dashed #888;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px 0 24px 0;
      background: #fff;
    }
    #draggable {
      width: 80px;
      height: 80px;
      background: #4caf50;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: grab;
      margin: 0;
      user-select: none;
      border-radius: 8px;
      font-size: 1.1rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
  </style>
  <div id="container">
    <div id="dropzone" tabindex="0" aria-dropeffect="move" role="region" aria-label="Dropzone">
      Drop here
    </div>
    <div id="draggable" draggable="true" tabindex="0" aria-grabbed="false" role="button" aria-label="Draggable">
      Drag me
    </div>
  </div>
  <script>
    const dropzone = document.getElementById("dropzone");
    const draggable = document.getElementById("draggable");

    draggable.addEventListener("dragstart", e => {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", "dragged");
      draggable.classList.add("dragging");
      draggable.setAttribute("aria-grabbed", "true");
    });

    draggable.addEventListener("dragend", e => {
      draggable.classList.remove("dragging");
      draggable.setAttribute("aria-grabbed", "false");
    });

    dropzone.addEventListener("dragover", e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      dropzone.classList.add("drag-over");
    });

    dropzone.addEventListener("dragleave", e => {
      dropzone.classList.remove("drag-over");
    });

    dropzone.addEventListener("drop", e => {
      e.preventDefault();
      dropzone.textContent = "Dropped!";
      dropzone.style.background = "#e0ffe0";
      dropzone.classList.remove("drag-over");
    });
  </script>
`;

const DragDropIframe = () => (
  <div style={{ padding: 32, textAlign: "center" }}>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <BackButton />
    </div>
    <br />
    <h2>Drag and Drop in an Iframe</h2>
    <div style={{ width: 400, height: 300, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <iframe
        title="DragDropIframe"
        srcDoc={dragDropHtml}
        style={{ width: 400, height: 300, border: "1px solid #ccc", display: "block", overflow: "hidden" }}
        scrolling="no"
      />
    </div>
  </div>
);

export default DragDropIframe;
