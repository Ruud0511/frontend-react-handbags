import React from "react";
import './App.css'
import './components/button/Button.jsx'
import Button from "./components/button/Button.jsx";
import Productcard from "./components/productcard/Productcard.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import Tile from "./components/tile/Tile.jsx";
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonType="button"
                    buttonText="to the collection"
                    buttonVariant="primary"
                    clickHandler={onclick}
                />
                <Button
                    buttonType="button"
                    buttonText="shop all bags"
                    buttonVariant="primary"
                    clickHandler={onclick}
                />
                <Button
                    buttonType="button"
                    buttonText="pre-orders"
                    buttonVariant="primary"
                    clickHandler={onclick}
                    buttonDisabled={true}
                />
            </nav>
            <main>
                <Productcard
                    labelTag="Bestseller"
                    productImage={bag1}
                    productName="The handy bag"
                    productPrice="400"
                />
                <Productcard
                    labelTag="Bestseller"
                    productImage={bag2}
                    productName="The stylish bag"
                    productPrice="250"
                />
                <Productcard
                    labelTag="New collection"
                    productImage={bag3}
                    productName="The simple bag"
                    productPrice="300"
                />
                <Productcard
                    labelTag="New collection"
                    productImage={bag4}
                    productName="The trendy bag"
                    productPrice="400"
                />
            </main>
            <footer>
                <section>
                    <Tile
                        tileTitle="The brand"
                        textBrandStory="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem nostrum praesentium provident ratione recusandae reiciendis. Earum fugit odit saepe. Alias atque beatae fugiat ipsum ratione repellendus similique, unde vel."
                    />
                </section>
                <section>
                    <Tile
                        footerImage={brand}
                    />
                </section>
                <section>
                    <Tile
                        footerImage={our_story}
                    />
                </section>
                <section>
                    <Tile
                        tileTitle="Our Story"
                        textBrandStory="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi earum veniam! Accusamus adipisci dolor, ea eaque enim, explicabo fugit incidunt iste maxime molestias nostrum quas ratione reprehenderit sit voluptate."
                    />
                </section>
            </footer>
        </>
    );
}

export default App
