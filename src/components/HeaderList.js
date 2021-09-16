import Header from "./Header";

const items = [
    {
        linkName: "Entertainment",
    },
    {
        linkName: "Shop",
    },
    {
        linkName: "Events",
    },
    {
        linkName: "Contact",
    }
]

const HeaderList = () => {
    return (
        <header>
            <ul>
                <a style={{ color: "#BB7043" }} href="https://www.google.com/">Home</a>
                <Header linkName={items[0].linkName} />
                <Header linkName={items[1].linkName} />
                <Header linkName={items[2].linkName} />
                <Header linkName={items[3].linkName} />
            </ul>
        </header>
    );
}

export default HeaderList;