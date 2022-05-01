import trioPoubelles from "../assets/recycling-color.png";
import logo from "../assets/logo-ss-fond.png";
import Header from "../components/Header";
import ButtonQuizz from "../components/ButtonQuizz";
import ButtonSearch from "../components/ButtonSearch";
import ButtonFleche from "../components/ButtonFleche";
import "./PagesCss/Home.css";

export default function Home() {
  return (
    <div>
      <div>
        <nav>
          <Header />
        </nav>
        <div className="logoTitre">
          <img className="logoImage" src={logo} alt="LOGO" />
          <h1 className="triTitre">TriCycle</h1>
        </div>
        <p className="presentation">
          Sous le solum, chantum li zoisum di loremipsum ecolopsum.
          Birdhitchcock campagnum etangum di fleurum verdum parcum pum.
          Maitrumcorbum sur un arbrum perchum, lum tin api pre ce langagum. que
          vum etum jolim que vou etum bo. Si votrum ramagum se rapelum a votrum
          plumagum voum zetum etum le fenixum de se boim.loremipsum ecolopsum
          birdhitchcock campagnum etangum di fleurum verdum parcum pum.
          Maitrumcorbum sur un arbrum perchum, lum tin api pre ce langagum. que
          vum etum jolim que vou etum bo.
        </p>
      </div>
      <div className="buttonFleche">
        <ButtonFleche />
      </div>
      <div className="triopoubelles">
        <h1>fais ton choix!</h1>
        <img
          className="logoTriPoubelles"
          src={trioPoubelles}
          alt="trioPoubelles"
        />
      </div>
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
          loremipsum ecolopsum birdhitchcock campagnum etangum di fleurum verdum
          parcum pum. Maitrumcorbum sur un arbrum perchum, lum tin api pre ce
          langagum. que vum etum jolim que vou etum bo. Si votrum ramagum.n api
          pre ce langagum. quevum etum jolim que vou etum bo.
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
          loremipsum ecolopsum birdhitchcock campagnum etangum di fleurum verdum
          parcum pum.loremipsum ecolopsum birdhitchcock campagnum etangum di
          fleurum verdum parcum pum.n api pre ce langagum. que vum etum
        </p>
      </div>
    </div>
  );
}
