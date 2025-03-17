import React from "react";
import UserForm from "../components/UserForm";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

async function createUser(userData: { name: string; email: string; phone: string }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error('Failed to create user');
  }

  return res.json();
}

const UsersServer = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div className="p-4">
      <UserForm onSubmit={createUser} />
      <ul className="space-y-4">
        {users.map((user: User) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.name} {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersServer;
