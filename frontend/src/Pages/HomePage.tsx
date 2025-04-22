import Nav from "../Components/Nav";
import HomeCard from "../Components/HomeCard";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <div className="Home">
      <div className="mainInfo">
        <Nav />
        <h1>Найдите себе работу на старте!</h1>
        <div className="flex">
          {/* <a href=""> */}
          <HomeCard
            header="Вакансии"
            subheader="Найдите работу своей мечты"
            icon_value="briefcase"
            isInDevelopment={false}
            referrer="/vacancies"
          />
          {/* </a> */}
          <HomeCard
            header="Доска объявлений"
            subheader="В разработке"
            icon_value="speaker"
            isInDevelopment={true}
            referrer=""
          />
        </div>
      </div>
      <div className="aboutUs">
        <h1>О нас</h1>
        <p>
          СТАРТ - это платформа, созданная специально для подростков, ищущих
          работу. Мы помогает молодым людям заработать деньги, налаживая
          контакты с работодателями и пополняя базу доступных вакансий
        </p>
      </div>
      <Footer />
    </div>
  );
}
