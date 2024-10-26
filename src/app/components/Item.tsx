import React from "react";

const Item = ({ link, title }) => {
    return (
        <>
            <ul>
                <h1 className="font-semibold mb-1">{title}</h1>
                {
                    link.map((linkItem) => (
                        <li key={linkItem.name}>  {/* Added key prop for unique identification */}
                            <a href={linkItem.link}>{linkItem.name}</a>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Item;
