import CardIcon from "@/components/ui/Cards/CardIcon";
import Container from "@/components/ui/Container/Container";
import Hero from "@/components/pages/Home/Hero/Hero";

import { ICardIconProps } from "@/components/ui/Cards/CardIcon";

const Home = () => {
  const cardsData: ICardIconProps[] = [
    { iconName: "CaseSvg", numbers: "1,75,324", title: "Live Job" },
    { iconName: "BuildingsSvg", numbers: "97,354", title: "Companies" },
    { iconName: "UsersSvg", numbers: "38,47,154", title: "Candidates" },
    { iconName: "CaseSvg", numbers: "7,532", title: "New Jobs" },
  ];

  return (
    <Container className=" bg-gray-300 py-[100px]">
      <Hero />
      <div className="flex flex-1 justify-between max-[1080px]:grid max-[1080px]:grid-cols-2 max-[1080px]:gap-2">
        {cardsData.map((card) => (
          <CardIcon
            key={card.numbers}
            iconName={card.iconName}
            numbers={card.numbers}
            title={card.title}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
