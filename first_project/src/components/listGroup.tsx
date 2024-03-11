// import { Fragment } from "react";

let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Nairobi",
    "london",
    "Paris",
    "Mombasa",
];
items = [];
function ListGroup() {
    return (
        <>
            <h1>List</h1>
            {items.length === 0 ? <p>No items Found</p> : null}
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
