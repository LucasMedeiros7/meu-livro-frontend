import starWars from '../../assets/star_wars.png'
import parteFalta from '../../assets/parte_que_falta.png'
import marvel from '../../assets/marvel.png'
import harryPotter from '../../assets/harry_potter.png'
import birdBox from '../../assets/bird_box.png'
import casaAssombrada from '../../assets/casa_assombrada.png'
import './Categorias.css'

export function Categoria() {
  return (
    <div className="container">
      <h2>Conheça nossas categorias</h2>
      <div className="linhaUm">
        <img id="um" src={starWars}></img>
        <img src={parteFalta}></img>
        <img src={marvel}></img>
      </div>
      <div className="linhaDois">
        <img src={harryPotter}></img>
        <img id="dois" src={birdBox}></img>
        <img id="tres" src={casaAssombrada}></img>
      </div>
    </div>
  );
}