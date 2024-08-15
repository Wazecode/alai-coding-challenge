import { Tldraw, createShapeId, isNonNull, track, useEditor } from "tldraw";
import { useEffect, useRef, useState } from 'react'
import "tldraw/tldraw.css";
import "./TldrawComponent.css"



export default function TldrawComponent() {
  return (
    <div style={{ position: "fixed", width: "50vh", height: "50vh" }}>
      <Tldraw hideUi>
        <TimelineUi />
      </Tldraw>
    </div>
  );
}




const TimelineUi = track(() => {

  let x = 0;

  const editor = useEditor();


  function handleSubmit(e: { preventDefault: () => void; target: any; }) {
    e.preventDefault();
    
    const form = e.target;
    const n = parseInt(form.nEvents.value);
    
    if(!isNaN(n))
      for(let i = 0; i < n; i++)
        hello();
  }

  function hello() {
    let timeLine = createShapeId();
    editor.createShape({
      id: timeLine,
      typeName: "shape",
      type: "geo",
      x: 100 + 150 * x,
      y: 300,
      props: {
        geo: "rectangle",
        w: 150,
        h: 1,
        size: "l",
        scale: 1,
      }
    });

    if (x % 2 == 0) {
      //Heading
      editor.createShape({
        type: "text",
        x: 100 + 150 * x,
        y: 150,
        props: {
          text: "Heading " + (x + 1),
          size: "l"
        },
      });

      //Subheading
      editor.createShape({
        type: "text",
        x: 120 + 150 * x,
        y: 200,
        props: {
          text: "Sub-Heading " + (x + 1),
          size: "s"
        },
      });

      //Line
      editor.createShape({
        typeName: "shape",
        type: "geo",
        x: 170 + 150 * x,
        y: 250,
        props: {
          geo: "rectangle",
          w: 1,
          h: 50,
          size: "l",
          scale: 1,
        }
      });
    } else {
      //heading
      editor.createShape({
        type: "text",
        x: 100 + 150 * x,
        y: 350,
        props: {
          text: "Heading " + (x + 1),
          size: "l"
        },
      });

      //Subheading
      editor.createShape({
        type: "text",
        x: 120 + 150 * x,
        y: 400,
        props: {
          text: "Sub-Heading " + (x + 1),
          size: "s"
        },
      });

      //Line
      editor.createShape({
        typeName: "shape",
        type: "geo",
        x: 170 + 150 * x,
        y: 300,
        props: {
          geo: "rectangle",
          w: 1,
          h: 50,
          size: "l",
          scale: 1,
        }
      });
    }
    x++;
  }


  return (
    <div className="custom-layout">
      <div className="custom-toolbar">
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="custom-button"
          >
            Generate Timeline
          </button>
          <input type="number" name="nEvents" defaultValue={1} className="custom-input" />
        </form>
      </div>
    </div>
  )
});
