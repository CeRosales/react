import '../styles/components/Design.scss';

function Design(props) {
  const handlePalettes = (ev) => {
    props.handlePalettes({
      value: ev.target.value,
    });
  };

  const handleCollapsed = (ev) => {
    // ev.preventDefault();

    props.handleCollapsed(ev);
  };

  return (
    <fieldset className="fieldset">
      <legend
        className="legend js_designLegend uppercase"
        id="designLegend"
        title="Elige los colores"
        onClick={handleCollapsed}
      >
        <i className="far fa-object-ungroup legend__icon legend__icon--orange"></i>
        <span className="legend__text">Diseña</span>
        <i
          className={`fas fa-angle-up legend__icon legend__icon--arrow js_arrowDesign ${props.arrowRotate}`}
        ></i>
      </legend>
      <section className={`containerDesign js_design ${props.sectionDesign}`}>
        <h2 className="containerDesign__title">Colores</h2>
        <div className="containerDesign__options">
          <div className="options__palette">
            {/* PALETAS */}

            <input
              className="radio js_radio-1 js_radio"
              name="palette"
              type="radio"
              id="radio1"
              value="1"
              onChange={handlePalettes}
              checked={props.dataCard.palette === '1'}
            />

            <label
              htmlFor="radio1"
              className="palette__sample palette__sample--1"
            ></label>

            <label
              htmlFor="radio1"
              className="palette__sample palette__sample--2"
            ></label>

            <label
              htmlFor="radio1"
              className="palette__sample palette__sample--3"
            ></label>
          </div>

          <div className="options__palette">
            <input
              className="radio js_radio-2"
              name="palette"
              type="radio"
              id="radio2"
              value="2"
              onChange={handlePalettes}
              checked={props.dataCard.palette === '2'}
            />

            <label
              htmlFor="radio2"
              className="palette__sample palette__sample--4"
            ></label>

            <label
              htmlFor="radio2"
              className="palette__sample palette__sample--5"
            ></label>

            <label
              htmlFor="radio2"
              className="palette__sample palette__sample--6"
            ></label>
          </div>

          <div className="options__palette">
            <input
              className="radio js_radio-3"
              name="palette"
              type="radio"
              id="radio3"
              value="3"
              onChange={handlePalettes}
              checked={props.dataCard.palette === '3'}
            />

            <label
              htmlFor="radio3"
              className="palette__sample palette__sample--7"
            ></label>

            <label
              htmlFor="radio3"
              className="palette__sample palette__sample--8"
            ></label>

            <label
              htmlFor="radio3"
              className="palette__sample palette__sample--9"
            ></label>
          </div>
        </div>
      </section>
    </fieldset>
  );
}
export default Design;
