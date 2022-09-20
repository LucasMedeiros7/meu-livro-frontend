import { useLocation, Link } from "react-router-dom"
import "../../components/cardProduto/CardProduto.css"

export function Pesquisa() {

    const { state } = useLocation()
    console.log(state)


    return (
        <div>
            <h1>Pagina de pesquisa</h1>

            {state?.map((item, index) => {
                return (
                    <div className="items" key={index}>
                        <Link to={`/detalhes/${item.id_livro}`}>
                            <div className="imgProduto">
                                <img src={item?.url_img} target="_blank" />
                            </div>

                            <div className="infoProduto">
                                <strong>
                                    <p id="titulo">{item?.titulo}</p>
                                </strong>
                                <p id="preco">R$ {item?.preco}</p>
                            </div>
                        </Link>
                        <div className="btnComprar">
                            <button>
                                <strong>Adicionar ao carrinho</strong>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>


    )




}