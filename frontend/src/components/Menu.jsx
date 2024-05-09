import {data} from "../restApi.json";

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">POPULAR DISHES</h1>
                    <p>Our popular dishes are waiting for you!</p>
                </div>
                <div className="dishes_container">
                {
                    data[0].dishes.map((elements)=>{
                        return(
                            <div className="card" key={elements.id}>
                                <img src={elements.image} alt={elements.title} />
                                <h3>{elements.title}</h3>
                                <button>{elements.category}</button>
                            </div>
                        );
                    })
                }

                </div>
            </div>
        </section>

    );
};

export default Menu;