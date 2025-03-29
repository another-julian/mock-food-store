import PizzaList from "../components/PizzaList";
import Banner from "../components/Banner";

function Home() {
  return (
    <main>
      <section>
        <Banner></Banner>
      </section>
      <section id="menu" className="menu">
        <PizzaList />
      </section>
    </main>
  );
}

export default Home;
