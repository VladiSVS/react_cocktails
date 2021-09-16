
const flexContainer = {
    height: "100vh",
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    margin: "5% 0"
}
const flexText = {
    width: "45%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}
const title = {
    textTransform: 'uppercase',
    fontSize: "5em",
    margin: "-0.3em 0",
}
const button = {
    backgroundColor: "#BB7043",
    color: "#211E1F",
    padding: "1.5em 5em",
    border: "none",
    cursor: "pointer",
}

const SectionRelax = (props) => {
    return (
        <section style={flexContainer}>
            <div style={flexText}>
                <div>
                    <p style={{ textTransform: 'uppercase', marginBottom: '1.5em' }}>{props.name}</p>
                    <h2 style={title}>{props.titleTop}</h2>
                    <h2 style={title}>{props.titleDown}</h2>
                    <p style={{ width: "50%", fontSize: "1.1em", marginTop: '1.5em' }}>{props.description}</p>
                    <button href={props.url} style={button} type="button">Read More</button>
                </div>
            </div>
            <div style={flexText}>
                <img style={{ width: "100%" }} src={props.urlImg} alt=""></img>
            </div>
        </section >
    );
}

export default SectionRelax;