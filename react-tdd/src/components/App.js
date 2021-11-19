import Users from "./Users";

const users = [
  { id: 1, name: "Gripp" },
  { id: 2, name: "Issa" },
  { id: 3, name: "Guilherme" },
];

function App() {
  return (
    <>
      <div>Minha aplicação</div>
      <Users users={users} />
    </>
  );
}

export default App;
