import "./App.css";
import ButtonComponent from "./component/ButtonComponent";

const button = [
  {
    skill: "HTML + CSS",
  },
  {
    skill: "JAVA",
  },
  {
    skill: "JavaScript",
  },
  {
    skill: "React",
  },
  {
    skill: "Spring Boot",
  },
  {
    skill:"Postman"
  },
  {
    skill: "Python"
  },
  {
    skill: "Hibernate"
  },
  {
    skill:"Docker"
  }
];

const btnColor = [
  "Tomato",
  "DodgerBlue",
  "MediumSeaGreen",
  "Violet",
  "LightGray",
];

const emoji = ["💪", "😙", "👐","🤟"];

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src="/public/pexels-olly-948873.jpg" alt="images" />
        <div className="content">
          <h2 className="user-name">Alex Dev</h2>
          <p>
            😇 Full Stack Developer I have Knowledge in Java and React. Backend
            technology is spring boot and frontend React.
          </p>
          <div className="tags">
            {button.map((btn, index) => (
              // eslint-disable-next-line react/jsx-key
              <ButtonComponent
                emoji={emoji[index % emoji.length]}
                textEle={btn.skill}
                color={btnColor[index % btnColor.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
