import trioPoubelles from "../assets/recycling-color.png";
import ButtonSearch from "../components/ButtonSearch";
import ButtonFleche from "../components/ButtonFleche";
import ButtonQuizz from "../components/ButtonQuizz";
import Header from "../components/Header";
import logo from "../assets/logo-ss-fond.png";
import "./PagesCss/Home.css";
// import glassBlue from "../assets/glass-blue.png";
// import rubikGame from "../assets/rubik-game.png";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="topPage">
        <img className="logoImage" src={logo} alt="LOGO" />
        <h1 className="triTitre">tri&apos;cycle</h1>
        <p className="presentation">
          Salut! Bienvenue sur Tri&apos;cycle! Vous pourrez apprendre sur
          l&apos;écologie, tout en vous amusant en famille! Cliquez sur le jeux
          pour commencer votre Quizz favori, ou bien, cliquez sur recherche pour
          accéder directement aux fiches informatives et devenir un expert du
          tri! A vous de jouer!
        </p>
        <ButtonFleche />
      </div>
      <div className="tripoubelles">
        <h1>fais ton choix!</h1>
        <img
          className="logoTriPoubelles"
          src={trioPoubelles}
          alt="triPoubelles"
        />
      </div>
      <div className="bottomPage">
        <div className="divQuizz">
          <div className="divButtonQuizz">
            <ButtonQuizz />
            <img
              src="../src/assets/rubik-game.png"
              className="imgQuizzButton"
              alt="QuizzImg"
            />
          </div>

          <p className="pQ">
            Entrez dans notre quizz écologique, où de nombreuses questions sur
            le tri des déchets vous attendent. Prêt à devenir imbattable sur le
            tri ?
          </p>
        </div>
        <div className="divSearch">
          <div className="divButtonSearch">
            <ButtonSearch />
            <img
              src="../src/assets/glass-blue.png"
              className="imgSearchButton"
              alt="SearchImg"
            />
          </div>
          <p className="pS">
            Vous voulez jeter votre bidon ou votre chaussette? Mais vous ne
            savez plus très bien où vous en débarasser? Vous êtes au bon
            endroit! Bienvenue dans la culture écologique du tri!
          </p>
        </div>
      </div>
    </div>
  );
}
