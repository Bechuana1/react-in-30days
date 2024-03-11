import ListGroup from "./components/listGroup";
let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Nairobi",
    "london",
    "Paris",
    "Mombasa",
];
// let color = ["red", "yellow", "blue", "green"];

function App() {
    const handleSelectItem = (item: string) => {
        console.log(item);
    };
    return (
        <div>
            {" "}
            <ListGroup items={items} headings="Cities" onSelectItem={handleSelectItem} />
            {/* <ListGroup items={color} headings="Colors" /> */}
        </div>
    );
}

export default App;
