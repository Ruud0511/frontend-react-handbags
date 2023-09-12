import React from "react";


function Tile( {tileTitle, textBrandStory, footerImage, children} ) {
    return (
        <section className="footer">
            <h2>{tileTitle}</h2>
            <p>{textBrandStory}</p>
            {footerImage&&<img src={footerImage} alt={tileTitle}/>}
            {children}
        </section>
    )
}

export default Tile;