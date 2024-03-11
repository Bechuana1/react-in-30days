// import { Fragment } from "react";

const items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Nairobi",
    "london",
    "Paris",
    "Mombasa",
];

function ListGroup() {
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
