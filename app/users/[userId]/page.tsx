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

  // Promise pending
  const userData: Promise<User> = getUser(userId);
  // Promise resolved
  const user: User = await userData;
  

  if (!user.name) {
    return {
      title: "Usuário não encontrado.",
    };
  }

  return {
    title: user.name,
    description: `Esta é a página do usuário ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  // Pegando dados do usuário
  const userData: Promise<User> = getUser(userId);
  // Pegando os posts do usuário
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  /*Há dois metodos de enviar os postos para o componente 'UserPosts':
    1. Enviando a Promise e resolvendo no componente
    2. Resolvendo a Promise e enviando somente os posts
  */
  
  const [user, userPosts] = await Promise.all([userData, userPostsData]);
  //const user = await userData;

  if(!user.name) return notFound();

  return (
    <main>
      <h2>{user.name}</h2>
      <Link href="/users">Voltar</Link>
      <br />
      <br />
      <Suspense fallback={<h2>Loading data...</h2>}>
        {/* <UserPosts promise={userPostsData} /> */}
        <UserPosts userPosts={userPosts} />
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
