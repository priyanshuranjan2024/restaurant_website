import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Meet our passionate culinary team: Chef leads with innovation,
            sous-chefs execute flawlessly, front-of-house welcomes warmly, and
            support staff ensures excellence.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((elements) => {
            return (
              <div className="card" key={elements.id}>
                <img src={elements.image} alt={elements.name} />
                <h3>{elements.name}</h3>
                <p>{elements.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
