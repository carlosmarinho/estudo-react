import Users from "./Users";
import SimulatorForm from "./SimulatorForm/SimulatorForm";

const users = [
  { id: 1, name: "Gripp" },
  { id: 2, name: "Issa" },
  { id: 3, name: "Guilherme" },
];

function App() {
  return (
    <>
      <div>Simulador SISU</div>
      <SimulatorForm />
    </>
  );
}

export default App;
