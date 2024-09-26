import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTours }) => {
    const [read, setRead] = useState(false);
    return (
        <article className="single-tour">
            <img src={image} alt={name} className="img" />
            <span className="tour-price">${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                {/* {read ? <p>{info}</p> : `${info.slice(222)} ...`} */}
                <p>
                    {read ? info : `${info.slice(0, 222)} ...`}
                    <button
                        type="button"
                        className="info-btn"
                        onClick={() => {
                            setRead(!read);
                        }}
                    >
                        {read ? "Show Less" : "Show More"}
                    </button>
                </p>
            </div>
            <button
                className="btn btn-block delete-btn"
                onClick={() => {
                    removeTours(id);
                }}
            >
                Remove Tour
            </button>
        </article>
    );
};

export default Tour;
