import Data from "./Data";
import Scrolldown from "./Scrolldown";
import Social from "./Social";
// import Stacks from "./Stacks";
import "./home.css";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home_content  grid">
          <Social />
          <div className="home__img "></div>
          <Data />
        </div>
        <Scrolldown />
        {/* <Stacks /> */}
      </div>
    </section>
  );
}
