import React from 'react';
import CharPic from '../images/CharacterPic.png';
import CthulhuLogo  from '../images/CthulhuLogo.png';


const CharacterPic = () => {
return (
    <div>
        <img src={CharPic} alt="Picture of character" height="120" width="125"/>
        <br />
        <img src={CthulhuLogo} alt="CoC Logotype" height="53" width="125"/>
    </div>
    );
};
export default CharacterPic;