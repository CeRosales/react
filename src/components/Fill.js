import GetAvatar from './GetAvatar';
import '../styles/components/Fill.scss';
function Fill(props) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    props.handleInput(inputValue, inputChanged);
  };

  const handleClick = (ev) => {
    props.handleCollapsed(ev);
  };

  return (
    <fieldset className="fieldset">
      <legend
        className="legend js_fillLegend uppercase"
        id="fillLegend"
        title="Escribe tus datos"
        onClick={handleClick}
      >
        <i className="far fa-keyboard legend__icon legend__icon--orange"></i>
        <span className="legend__text">Rellena</span>
        <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowFill"></i>
      </legend>
      <div className="containerFill js_fill">
        <label className="label" htmlFor="name">
          Nombre completo
        </label>
        <input
          className="field js_name"
          name="name"
          type="text"
          id="name"
          placeholder="P. ej. Usagi Tsukino"
          onChange={handleInput}
          value={props.dataCard.name}
        />

        <label className="label" htmlFor="job">
          Puesto
        </label>
        <input
          className="field js_job"
          name="job"
          type="text"
          id="job"
          placeholder="P. ej. Pretty Guardian"
          onChange={handleInput}
          value={props.dataCard.job}
        />

        <label className="label" htmlFor="img">
         {''}
          Imagen de perfil {''}
        </label>

        <GetAvatar
        avatar={props.dataCard.photo}
        updateAvatar={props.updateAvatar} />

        {/*}
        <div className="component">
          <label
            className="component__btnAddImage js__profile-trigger"
            type="button"
            htmlFor="photo"
          >
            Añadir imagen
          </label>
          <input
            className="action__hiddenField js__profile-upload-btn js_photo"
            // type="file"
            name="photo"
            id="photo"
            onChange={handleInput}
            // value={dataCard.photo}
          />

          <div className="component__square js__profile-preview"></div>
  </div>*/}

        <label className="label" htmlFor="email">
          E-mail
        </label>
        <input
          className="field js_email"
          name="email"
          type="email"
          id="email"
          placeholder="P. ej. rei-hino@sailor.mars"
          onChange={handleInput}
          value={props.dataCard.email}
        />

        <label className="label" htmlFor="phone">
          Teléfono
        </label>
        <input
          className="field js_phone"
          name="phone"
          type="tel"
          id="phone"
          placeholder="P. ej. 987 654 321"
          onChange={handleInput}
          value={props.dataCard.phone}
        />

        <label className="label" htmlFor="linkedin">
          LinkedIn
        </label>
        <input
          className="field js_linkedin"
          name="linkedin"
          type="text"
          id="linkedin"
          placeholder="P. ej. ami.mizuno"
          onChange={handleInput}
          value={props.dataCard.linkedin}
        />

        <label className="label" htmlFor="github">
          GitHub
        </label>
        <input
          className="field js_github"
          name="github"
          type="text"
          id="github"
          placeholder="P. ej. chibiusa"
          onChange={handleInput}
          value={props.dataCard.github}
        />
      </div>
    </fieldset>
  );
}

export default Fill;
