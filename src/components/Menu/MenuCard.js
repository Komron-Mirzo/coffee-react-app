import CoffeeList from "./CoffeeList";


function MenuCard() {
    return (

        <div className="menu-card-parent">
            {
                CoffeeList.map((item, index) => {
                    return (
                        <div className="menu-card" key={index}>
                            <div className="menu-card-img">
                                < img src={item.img} width="160px" height="160px" />

                            </div>
                            <div className="menu-card-content" >
                                <div>
                                    {item.title}
                                </div>
                                <div>
                                    {item.ingredient}
                                </div>
                                <div>
                                    {item.price}
                                </div>
                            </div>
                        </div>)
                })
            }
        </div>





    );
}

export default MenuCard;