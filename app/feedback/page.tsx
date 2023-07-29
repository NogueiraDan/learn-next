"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import "./feedback.scss";

const initState = {
  name: "",
  email: "",
  message: "",
};

export default function Feedback() {
  const [data, setData] = useState(initState);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = data;

    // Send data to API route: feedback
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const result = await res.json();
    console.log(result);
    // Navigate to thank you
    router.push(`/thank-you/`);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);

  return (
    <main className="formWrapper">
      <form onSubmit={handleSubmit} className="formFeedback">
        <h1>Fale conosco</h1>

        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Jane"
          // pattern="([A-Z])[\w+.]{1,}"
          value={data.name}
          onChange={handleChange}
          autoFocus
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Jane@yoursite.com"
          //pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          value={data.email}
          onChange={handleChange}
        />

        <label className="text-2xl mb-1" htmlFor="message">
          Messagem:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Digite sua mensagem..."
          rows={5}
          cols={33}
          value={data.message}
          onChange={handleChange}
        />

        <button disabled={!canSave}>Enviar</button>
      </form>
    </main>
  );
}
