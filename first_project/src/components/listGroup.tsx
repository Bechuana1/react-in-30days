import { useState } from "react";

// import { MouseEvent } from "react";

// {items : [], headings : string}
interface Props {
    items: string[];
    headings: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, headings, onSelectItem }: Props) {
    // event handler
    // const handleClick = (event: MouseEvent) => console.log(event);

    //hook
    const [selectedIndex, SetSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{headings}</h1>
            {/* {items.length == 0 ? <p>No items Found</p> : null} */}
            {items.length === 0 && <p>No items Found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        onClick={() => {
                            SetSelectedIndex(index);
                            onSelectItem(item);
                        }}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
