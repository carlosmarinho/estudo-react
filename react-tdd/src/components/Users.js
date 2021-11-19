const Users = (props) => {
  const { users } = props;
  return (
    <>
      <h2>Lista de usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
