import SectionCoctails from './SectionCoctails';

const items = [
    {
        urlImg: "img/gin1.png",
        description: "A trick door opening to Bathtub Gin, a hopping Chelsea gin joint harkening back to the days of false store fronts",
        name: "The Guardian",
    },
    {
        urlImg: "img/jack1.png",
        description: "Life on the inside: exactly how you imagined it’d be... nailhead-tucked bar stools and—smack-dab in the center of the room—a glass-covered, claw-foot bathtub.",
        name: "URBAN DADDY",
    }
]

const flex = {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-around",
    margin: "10% 0",
    
}

const SectionCoctailsList = () => {
    return (
        <section style={flex}>
            <SectionCoctails urlImg={items[0].urlImg} description={items[0].description} name={items[0].name} />
            <SectionCoctails urlImg={items[1].urlImg} description={items[1].description} name={items[1].name} />
        </section>
    );
}

export default SectionCoctailsList;