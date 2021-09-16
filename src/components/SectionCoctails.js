const flex = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    width: "35%",
}

const SectionCoctails = (props) => {
    return (
        <article style={flex} >
            <img style={{ width: "100%" }} src={props.urlImg} alt=""></img>
            <h2 style={{ fontSize: "2em" }}>{props.description}</h2>
            <p style={{ textTransform: "uppercase" }}>{props.name}</p>
        </article>
    );
}

export default SectionCoctails;