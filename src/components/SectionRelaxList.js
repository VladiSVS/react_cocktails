import SectionRelax from './SectionRelax';
import SectionJazzList from './SectionJazzList';
import SectionCoctailsList from './SectionCoctailsList';

const items = [
    {
        name: "ABOUT",
        titleTop: "The Story of",
        titleDown: "Bathtub Gin",
        description: 'Gin was the predominant drink in the United States during the Prohibition-Era 1920"s and many variations were created. "Bathtub gin" was developed in response to the poor- quality of alcohol that was available at the time.',
        url: "#",
        urlImg: "img/bar2.png"
    },
    {
        name: "Cocktail & Food Menus",
        titleTop: "Hand Crafted",
        titleDown: "Good Eats",
        description: 'Gin was the predominant drink in the United States during the Prohibition-Era 1920"s and many variations were created. "Bathtub gin" was developed in response to the poor- quality of alcohol that was available at the time.',
        url: "#",
        urlImg: "img/bar3.png"
    }
]

const SectionRelaxList = () => {
    return (
        <div>
            <SectionRelax name={items[0].name} titleTop={items[0].titleTop} titleDown={items[0].titleDown} description={items[0].description} url={items[0].url} urlImg={items[0].urlImg} />
            <SectionJazzList />
            <SectionRelax name={items[1].name} titleTop={items[1].titleTop} titleDown={items[1].titleDown} description={items[1].description} url={items[1].url} urlImg={items[1].urlImg} />
            <SectionCoctailsList />
        </div>
    );
}

export default SectionRelaxList;