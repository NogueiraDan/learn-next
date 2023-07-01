import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users Page",
  description: "This is a page of all users",
};

export default async function Users() {
  const userData: Promise<User[]> = getAllUsers();

  const users = await userData;

  if (!users) {
    return (
      <main>
        <h1>Não foi possível recuperar os dados</h1>
      </main>
    );
  }
  return (
    <main>
      <section>
        <h2>
          <Link href="/">Back to Home</Link>
        </h2>
        <br />
        {users.map((user, index) => {
          return (
            <>
              <p key={index}>
                User {index + 1}:{" "}
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
              <br />
            </>
          );
        })}
      </section>
    </main>
  );
}
