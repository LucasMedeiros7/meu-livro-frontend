export function ItenCarrinho({ src, titulo, preco }) {
  return (
    <div>
      <img width={100} src={src} alt="" />
      <strong>{titulo}</strong>
      <p>{preco}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="200"
          y1="56"
          x2="56"
          y2="200"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="200"
          y1="200"
          x2="56"
          y2="56"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
    </div>
  );
}
