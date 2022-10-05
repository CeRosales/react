import '../styles/components/Share.scss';

function Share(props) {
  const handleClick = (ev) => {
    ev.preventDefault();
    props.handleCreateCard();
  };

  // const handleCollapsed = (ev) => {
  //   const id = ev.target.id;
  //   props.handleCollapsed(id);
  // };

  return (
    <fieldset className="fieldset">
      <div>
        {' '}
        <legend
          className="legend js_shareLegend uppercase"
          id="shareLegend"
          title="¡Comparte tu tarjeta!"
          // onClick={handleCollapsed}
        >
          <i className="fa-solid fa-share-nodes legend__icon legend__icon--orange"></i>
          <span className="legend__text">Comparte</span>
          <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowShare rotate"></i>
        </legend>
        <div className="containerShare js_share">
          <button
            className="buttonCreateCard uppercase js_buttonCreateCard"
            onClick={handleClick}
          >
            <i className="fa-regular fa-address-card buttonCreateCard__icon"></i>
            Crear tarjeta
          </button>
        </div>
        {/* TWITTER */}
        <div className="containerDone js_containerDone ">
          <p className="containerDone__title">{props.message}</p>
          <a className="containerDone__link" href={props.apiData.cardURL}>
            {props.apiData.cardURL}
          </a>

          <button
            className="buttonShare"
            target="_blank"
            rel="noreferrer"
            onClick={props.shareOnTwitter}
          >
            <i className="fa-brands fa-twitter"></i> Compartir en Twitter
          </button>
        </div>
      </div>
    </fieldset>
  );
}
export default Share;
