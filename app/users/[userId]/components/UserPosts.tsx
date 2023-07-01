
type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  // resolvendo a promise props
  const posts = await promise;

  const content = posts.map((post) => {
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
