import "./portfolio.css";
import work from "../assets/work.png"
  
  export default function Portfolio() {
  
    return (
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
              <img src={work} alt="work" />
                <h3>Bomberman</h3>
              </div>
              </div>
              <div className="face face2">
              <div className="content">
               <p>Implémentation du jeu Bomberman en HTML5, CSS3, CANVAS et JAVASCRIPT.</p>
               <a href="https://github.com/GokhanKabar/Bomberman">Github</a>
              </div>
              </div>
            </div>
            </div>
            <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
              <img src={work} alt="work" />
                <h3>TeachReact</h3>
              </div>
              </div>
              <div className="face face2">
              <div className="content">
               <p>Une application web en ReactJS permettant d'avoir une sélection de professeur
                via une API afin de choisir le professeur et d'avoir un formulaire de paiement
                pour acheter le service proposé.</p>
               <a href="https://github.com/GokhanKabar/Test">Github</a>
              </div>
              </div>
            </div>
            </div>
            <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
              <img src={work} alt="work" />
                <h3>Todo-list</h3>
              </div>
              </div>
              <div className="face face2">
              <div className="content">
               <p>Cette simple liste de tâches utilisant ReactJs permet à l'utilisateur de mettre sa tâche et de pouvoir la modifier ou la supprimer.</p>
               <a href="https://github.com/GokhanKabar/Todolist-React">Github</a>
              </div>
              </div>
            </div>
            </div>
            <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
              <img src={work} alt="work" />

                <h3>PictoSpeak&Paint</h3>
              </div>
              </div>
              <div className="face face2">
              <div className="content">
               <p>Application Android avec JAVA permettant au muets de communiquer avec des pictogrammes et au sourds de dessiner.</p>
               <a href="https://github.com/GokhanKabar/PictoSpeak-Paint">Github</a>
              </div>
              </div>
            </div>
            </div>
            <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
              <img src={work} alt="work" />

                <h3>Jeu du morpion</h3>
              </div>
              </div>
              <div className="face face2">
              <div className="content">
               <p>Le jeu du MORPION conçu graphiquement en JAVA et SWING avec
                l'implémentation d'une IA minmax.</p>
               <a href="https://github.com/GokhanKabar/MorpionIAJava">Github</a>
              </div>
              </div>
            </div>
            </div>
            <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
              <img src={work} alt="work" />

                <h3>Cryptosystème</h3>
              </div>
              </div>
              <div className="face face2">
              <div className="content">
               <p>Cryptosystème en python avec l'algorithme de Merkle Hellman.</p>
               <a href="https://github.com/GokhanKabar/Cryptosystem-Merkle-Hellman">Github</a>
              </div>
              </div>
            </div>
            </div>
            <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
              <img src={work} alt="work" />

                <h3>Puissance4-reseau</h3>
              </div>
              </div>
              <div className="face face2">
              <div className="content">
               <p>Implémentation d'un protocole au dessus de TCP permettant à deux personnes de jouer au Puissance 4 en se connectant à travers le réseau.</p>
               <a href="https://github.com/GokhanKabar/Puissance4-reseau">Github</a>
              </div>
              </div>
            </div>
            </div>
            <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
              <img src={work} alt="work" />

                <h3>RustQCM</h3>
              </div>
              </div>
              <div className="face face2">
              <div className="content">
               <p>Le projet RustQCM est un générateur de QCM en GTK-RS et GLADE.</p>
               <a href="https://github.com/GokhanKabar/RustQCM">Github</a>
              </div>
              </div>
            </div>
            </div>
          </div>
    );
  }