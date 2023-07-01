import { NextRouter } from "next/router";

interface ProductParams {
  params: NextRouter["query"];
}

export default function DetailID({ params }: ProductParams) {
  const id = params.id;

  return (
    <div>
      <h1>Detalhes do Produto {id}</h1>
    </div>
  );
}
