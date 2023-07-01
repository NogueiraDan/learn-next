import getUser from "../../../lib/getUser";
import getUserPosts from "../../../lib/getUserPosts";
import getAllUsers from "@/lib/getAllUsers";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

// Gerando os Metadados dinamicamente.
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user.name) {
    return {
      title: "Usuário não encontrado.",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;

  if(!user.name) return notFound();

  return (
    <main>
      <h2>{user.name}</h2>
      <Link href="/users">Voltar</Link>
      <br />
      <br />
      <Suspense fallback={<h2>Loading data...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </main>
  );
}

// Gerando de modo prévio estaticamente (SSG) os id's para as rotas dinamicas.
// Porém com a estratégia de 'revalidate' no getUserPosts, a cada 60segundos irá checar
// se os dados estão obsletos. Anexo: (public/images/ISR_users.png).
// O Next recomenda o SSG quando possível, porém se você conhece os parametros 
// com antecedencia, você pode provê-los  
// Futuramente se não quiser usar esta estratégia basta comentar este código.
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
