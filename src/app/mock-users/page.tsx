import { revalidatePath } from "next/cache";
import React from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const MockUsers = async () => {
  const res = await fetch("http://67d819989d5e3a10152d645f.mockapi.io/users");
  const users: User[] = await res.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData?.get("name");
    const res = await fetch(
      "http://67d819989d5e3a10152d645f.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await res.json();
    revalidatePath("/mock-users")
    console.log(newUser);
  }

  return (
    <>
      <div className="py-10">
        <form action={addUser}>
          <input type="text" name="name" required className="border p-2 mr-2" />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
        </form>
      </div>

      <ul className="space-y-4 p-4">
        {users?.map((user: User) => {
          return (
            <li
              key={user?.id}
              className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
              {user?.name} {user?.email}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MockUsers;
