import React, { useRef, useEffect } from "react";

const DragDropShadowDom = () => {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    // Only attach shadow root if not already present
    let shadow = host.shadowRoot;
    if (!shadow) {
      shadow = host.attachShadow({ mode: "open" });
      shadow.innerHTML = `
        <style>
          #dropzone { width:300px;height:150px;border:2px dashed #888;display:flex;align-items:center;justify-content:center;margin:40px auto; }
          #draggable { width:80px;height:80px;background:#2196f3;color:#fff;display:flex;align-items:center;justify-content:center;cursor:grab;margin:20px auto; }
        </style>
        <div id="dropzone">Drop here</div>
        <div id="draggable" draggable="true">Drag me</div>
      `;
      const dropzone = shadow.getElementById("dropzone");
      const draggable = shadow.getElementById("draggable");
      draggable.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", "dragged");
      });
      dropzone.addEventListener("dragover", e => {
        e.preventDefault();
      });
      dropzone.addEventListener("drop", e => {
        e.preventDefault();
        dropzone.textContent = "Dropped!";
        dropzone.style.background = "#e0f7fa";
      });
    }
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h2>Drag and Drop in Shadow DOM</h2>
      <div ref={hostRef} />
    </div>
  );
};

export default DragDropShadowDom;
