import SectionJazz from './SectionJazz';

const items = [
    {
        title: "Jazz n'Jive",
        urlImg: "img/Rectangle.png",
        name: "Every Monday",
        time: "9-11pm",
        description: "Jazz up your Monday nights with intimate and lively performances by a rotating selection of renowned bands."
    },
    {
        title: "Burlesque After Dark",
        urlImg: "img/Rectangle1.png",
        name: "Every Tuesday & Sunday",
        time: "9:30pm",
        description: "Enter the world of burlesque and lose yourself in enticing witty performances, exceptional cocktails, and lively music."
    },
    {
        title: "DJs & Dance Tracks",
        urlImg: "img/Rectangle2.png",
        name: "Every Thursday, Friday & Saturday Night",
        time: "From 9pm & 10pm",
        description: "If you're looking for a packed crowd, come when the party is bigger, the pace is faster, and the morals are looser."
    }
];

const text = {
    width: "70%",
    textAlign: "left",
    textTransform: 'uppercase',
    margin: "0 auto",
    marginBottom: "7%",
    color: "#211E1F"
}

const section = {
    background: "#BB7043",
    padding: "10% 0",
}

const flex = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
}

const SectionJazzList = () => {
    return (
        <section style={section}>
            <p style={text}>Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</p>
            <div style={flex}>
                <SectionJazz title={items[0].title} urlImg={items[0].urlImg} name={items[0].name} description={items[0].description} />
                <SectionJazz title={items[1].title} urlImg={items[1].urlImg} name={items[1].name} description={items[1].description} />
                <SectionJazz title={items[2].title} urlImg={items[2].urlImg} name={items[2].name} description={items[2].description} />
            </div>
        </section >

    );
}

export default SectionJazzList;