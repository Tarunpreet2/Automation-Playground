import React, { useRef, useEffect } from "react";

const DragDropIframe = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    iframe.onload = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;
      doc.body.innerHTML = `
        <div id="dropzone" style="width:300px;height:150px;border:2px dashed #888;display:flex;align-items:center;justify-content:center;margin:40px auto;">
          Drop here
        </div>
        <div id="draggable" draggable="true" style="width:80px;height:80px;background:#4caf50;color:#fff;display:flex;align-items:center;justify-content:center;cursor:grab;margin:20px auto;">
          Drag me
        </div>
      `;
      const dropzone = doc.getElementById("dropzone");
      const draggable = doc.getElementById("draggable");
      draggable.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", "dragged");
      });
      dropzone.addEventListener("dragover", e => {
        e.preventDefault();
      });
      dropzone.addEventListener("drop", e => {
        e.preventDefault();
        dropzone.textContent = "Dropped!";
        dropzone.style.background = "#e0ffe0";
      });
    };
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h2>Drag and Drop in an Iframe</h2>
      <iframe
        ref={iframeRef}
        title="DragDropIframe"
        style={{ width: 400, height: 300, border: "1px solid #ccc" }}
      />
    </div>
  );
};

export default DragDropIframe;
