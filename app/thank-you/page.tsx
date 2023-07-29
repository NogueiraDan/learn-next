import Link from "next/link"

export default function ThankYou() {
  return (
    <main
      style={{ 
        display: "flex", 
        alignItems: "center", 
        paddingTop: "50px",
        flexDirection: "column"
    }}
    >
      <h1>
        Obrigado por entrar em contato.
        <br />
        Brevemente responderemos
      </h1>
      <br/>
      <Link href="/">Voltar para Home</Link>
    </main>
  );
}
