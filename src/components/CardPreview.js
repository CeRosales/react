import Profile from './Profile.js';
import '../styles/components/CardPreview.scss';

function CardPreview(props) {
  console.log(props);
  const handleClick = () => {
    //NO FUNCIONA RESET

    props.handleReset();
  };

  return (
    <section className="preview">
      <article>
        <button className="card__reset js_reset" onClick={handleClick}>
          <i className="card__icon far fa-trash-alt"></i>Reset
        </button>

        <div
          className={`palette-${props.dataCard.palette} containerCard js_preview`}
        >
          <div className="cardInfo js_cardInfo">
            <h2 className="cardInfo__name js_cardName">
              {props.dataCard.name || 'Nombre y apellidos'}
            </h2>

            <p className="cardInfo__description js_cardJob">
              {props.dataCard.job || 'Front-end developer'}
            </p>
          </div>

          {/*<div className="cardImage js__profile-image"></div>*/}
          <Profile avatar={props.dataCard.photo} />

          <nav>
            <ul className="cardMenu">
              <li className="cardMenu__icon">
                <a
                  href="#bottom"
                  className="cardMenu__link js_cardPhone js_cardLink"
                  rel="noreferrer"
                  target="_blank"
                  title="Número de teléfono"
                >
                  <i className="icon fas fa-mobile-alt"></i>
                </a>
              </li>
              <li className="cardMenu__icon">
                <a
                  href="#bottom"
                  className="cardMenu__link js_cardEmail js_cardLink"
                  target="_blank"
                  title="Dirección de correo"
                >
                  <i className="icon far fa-envelope"></i>
                </a>
              </li>
              <li className="cardMenu__icon">
                <a
                  href="#bottom"
                  className="cardMenu__link js_cardLinkedin js_cardLink"
                  target="_blank"
                  title="Perfil en LinkedIn"
                  rel="noreferrer"
                >
                  <i className="icon fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="cardMenu__icon">
                <a
                  href="#bottom"
                  className="cardMenu__link js_cardGithub js_cardLink"
                  target="_blank"
                  title="Perfil de GitHub"
                  rel="noreferrer"
                >
                  <i className="icon fab fa-github-alt"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </section>
  );
}

export default CardPreview;
