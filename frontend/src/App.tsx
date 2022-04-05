import { gql, useQuery } from "@apollo/client";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { NewUserForm } from "./components/NewUserForm";

type User = {
  id: string;
  name: string;
};

export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER);

  console.log(data);

  if (loading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <NewUserForm />
    </div>
  );
}

export default App;
