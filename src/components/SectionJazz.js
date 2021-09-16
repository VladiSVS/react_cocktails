const absolut = {
    position: 'absolute',
    fontSize: "3em",
    textAlign: "center",
    lineHeight: "0.9em",
    width: "70%",
}

const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const SectionJazz = (props) => {
    return (
        <article style={{ width: "30%", position: "relative" }}>
            <div style={flex}>
                <h2 style={absolut}>{props.title}</h2>
                <img style={{ width: "100%" }} src={props.urlImg}></img>
            </div>
            <h2>{props.name}</h2>
            <h2>{props.time}</h2>
            <p style={{ color: "#211E1F" }}>{props.description}</p>
        </article>
    );
}

export default SectionJazz;