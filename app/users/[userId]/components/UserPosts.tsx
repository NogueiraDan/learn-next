// type Props = {
//   promise: Promise<Post[]>;
// };

type Props = {
  userPosts: Post[]
}

export default async function UserPosts({ userPosts }: Props) {
  // Resolvendo a promise props, enviada no segundo metodo.
  //const posts = await promise;

  const content = userPosts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });

  return content;
}
