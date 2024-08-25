import React, { useState } from "react";

export function Counter() {
  const [contador, setContador] = useState(0);

  return (
    <div
      style={{
        marginTop: "20px",
        marginLeft: "20px",
      }}
    >
      <h1>{contador}</h1>

      <div>
        <button
          onClick={() => {
            console.log("Diminuindo");
            setContador(contador - 1);
          }}
        >
          Diminuir
        </button>
        <button
          onClick={() => {
            console.log("Aumentando");
            setContador(contador + 1);
          }}
        >
          Aumentar
        </button>
      </div>
    </div>
  );
}
