import TldrawComponent from "./TldrawComponent";

export default function App() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <h1>Timeline generator:</h1>
      <TldrawComponent />
    </div>
  );
}
