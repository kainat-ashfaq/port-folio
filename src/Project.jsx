import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CSSProjectCard } from "./CSSProject";
import { JSProjectCard } from "./JsProject";
import { ReactProjectCard } from "./reactProject";
import TrackVisibility from "react-on-screen";
 const Project = () => {

  const projects = [
    {
      title: "Gricklo Website",
      description: "Design & Development",
      imgUrl: 'img/gricklo.png',
      href:"https://kainat-ashfaq.github.io/Gricklo/"
    },
    {
      title: "Geo Trip Website",
      description: "Design & Development",
      imgUrl: 'img/geotrip.png',
      href:"https://kainat-ashfaq.github.io/GEOTRIP/"

    },
    {
      title: "WHATSAPP WEB",
      description: "Design & Development",
      imgUrl: 'img/whatsapp.png',
      href:"https://kainat-ashfaq.github.io/whatssweb/"
    },
    {
      title: "Smart Mockup",
      description: "Design & Development",
      imgUrl: 'img/mockup.png',
      href:" https://kainat-ashfaq.github.io/smartmockup/"

    },
    {
      title: "KAMKAJ Website",
      description: "Design & Development",
      imgUrl: 'img/kamkaj.png',
      href:"https://kainat-ashfaq.github.io/kamkaj/"

    },
    {
      title: "OLX",
      description: "Design & Development",
      imgUrl: 'img/OLX.png',
      href:" https://kainat-ashfaq.github.io/OLX/"
    },
  ];


  const jsProjects = [
    {
      title: "Tic Tac Toe Game",
      description: "Design & Funcionality",
      imgUrl: 'img/tictactoe.png',
      href:"kainat-ashfaq.github.io/Tic-Tac-Toe/"
    },
    {
      title: "Mystery Digit Game",
      description: "Design & Funcionality",
      imgUrl: 'img/digit.png',
      href:"https://kainat-ashfaq.github.io/mystery-number-game/"

    },
    {
      title: "Word Scramble Game",
      description: "Design & Funcionality",
      imgUrl: 'img/wordscramble.png',
      href:"kainat-ashfaq.github.io/word-scramble/"
    },
    {
      title: "Ultimate Color Generator",
      description: "Design & Funcionality",
      imgUrl: 'img/color-g.png',
      href:"kainat-ashfaq.github.io/color-generator/"

    },
    {
      title: "Todo APP",
      description: "Design & Funcionality",
      imgUrl: 'img/todoapp.png',
      href:"https://kainat-ashfaq.github.io/to-do-list/"

    },
    {
      title: "Login $ Signup & Dashboard page",
      description: "Design & Funcionality",
      imgUrl: 'img/form.png',
      href:"https://kainat-ashfaq.github.io/login-signup/"
    },
  ];

  const reactProjects = [
    {
      title: "Recipe Finder",
      description: "Design & Funcionality",
      imgUrl: 'img/recipe.png',
      href:"https://kainat-ashfaq.github.io/recipe-finder/"
    },
    {
      title: "Form with data",
      description: "Design & Funcionality",
      imgUrl: 'img/studentform.png',
      href:"https://react-form45.netlify.app/"

    },
    {
      title: "Dental Website",
      description: "Design & Funcionality",
      imgUrl: 'img/donto.png',
      href:"https://donto-website.netlify.app/"
    },
    {
      title: "Budget Tracker",
      description: "Design & Funcionality",
      imgUrl: 'img/budget.png',
      href:"https://budget-tracker-eight-nu.vercel.app/"

    },
   
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="text-white pro" id="Projects">Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">CSS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">JavaScript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">React.JS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <CSSProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                    {
                          jsProjects.map((project, index) => {
                            return (
                              <JSProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }                   
                        </Row>
                         </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    {
                          reactProjects.map((project, index) => {
                            return (
                              <ReactProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }                   
                        </Row>                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
export default Project