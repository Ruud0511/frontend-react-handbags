import React from "react";


function Tile( {tileTitle, textBrandStory, footerImage, children} ) {
    return (
        <article className="footer">
            <h2>{tileTitle}</h2>
            <p>{textBrandStory}</p>
            <img src={footerImage} alt={tileTitle}/>
            {children}
        </article>
    )
}

export default Tile;