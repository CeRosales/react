import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from '../images/kawaiiAvatar.gif';
import '../styles/components/GetAvatar.scss';


function GetAvatar(props) {
    const fr = new FileReader();
    const myFileField = React.createRef();

    const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const avatar = props.avatar === "" ? defaultAvatar : props.avatar;
  return (
      
    <div>
      <div className="components">
        <label className="components__btnAddImage" htmlFor="photo">
          Añadir imagen
           </label>
          <input
            type="file"
            ref={myFileField}
            className="get-avatar__upload"
            onChange={uploadImage}
            name="photo"
            id="photo"
          />
       
        <div
          className="components__square"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    </div>
  );
}


GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;