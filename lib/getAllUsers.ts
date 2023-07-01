export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Algo deu errado.");
  
  return res.json(
      
  )
}
