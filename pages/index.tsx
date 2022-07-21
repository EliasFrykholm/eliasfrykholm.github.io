import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Navbar from "../components/Navbar";
import SkillGrid from "../components/SkillGrid";
import WaveSection from "../components/WaveSection";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [coloredComponents, setColoredComponents] = useState<Element[]>([]);
  const handleScroll = () => setOffsetY(window.scrollY);
  const handleResize = () => setPageHeight(document.body.scrollHeight - window.innerHeight);

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    addEventListener("resize", handleResize);
    setPageHeight(document.body.scrollHeight - window.innerHeight);

    setColoredComponents(Array.from(document.getElementsByClassName("coloredComponent")));

    return () => {
      removeEventListener("scroll", handleScroll);
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Elias Frykholm</title>
        <meta name="description" content="Elias Frykholm - fullstack developer" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar coloredComponents={coloredComponents} offsetY={offsetY} />

      <main
        style={{
          backgroundPositionY: offsetY * 0.5,
          backgroundImage: `url(${process.env.NODE_ENV == "production" ? "/my-resume" : ""}/background.svg)`,
        }}
      >
        <section id="about">
          <div className={styles.about}>
            <Image src="./profile-image.jpeg" width={300} height={300} className={styles.avatar} />
            <div className={styles.quickInfo}>
              <h1>Elias Frykholm</h1>
              <h2>Msc. in Computer Science</h2>
              <h2>Fullstack Engineer</h2>
              <h2>
                Contact: <a href="mailto: elias.frykholm@outlook.com">elias.frykholm@outlook.com</a>
              </h2>
            </div>
            <CardContainer coloredComponents={coloredComponents} maxWidth="1000px">
              <h3>
                Hi! <br />
                My name is Elias, I am a driven software developer who thrives on problem solving and I continuously aim
                to learn new areas, both regarding new technologies and system development as a whole. <br />
                <br /> I like to design and understand software systems as a whole, but also to dive into the details.
                <br />
                <br /> In my spare time, I am a social and active person who likes to hangout with friends and exercise.
                I also often have ongoing hobby-projects to try out the latest technologies and programming languages.
              </h3>
            </CardContainer>
          </div>
        </section>

        <section id="experience">
          <h1>Experience</h1>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isTop>
            <h2>Cygni, Part of Accenture - Fullstack Engineer Consultant</h2>
            <h3>Malmö, Sweden - September 2021 - Now</h3>
            <p>
              Elias together with two other Cygni talents created a web application for booking rooms and desks at the
              Cygni Syd office using mob-programming. The application uses a React Frontend with Google SSO and
              connections to the Google Calender API as backend. A simple node.js express backend with sqlite was also
              written during development for testing purposes. The application was then deployed using AWS Amplify.
            </p>
          </WaveSection>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents}>
            <h2>Axis Communications - Master Thesis Student</h2>
            <h3>Lund, Sweden - October 2021 - June 2021</h3>
            <p>
              Axis Communications AB is a Swedish manufacturer of network based solutions in the areas of physical
              safety and camera surveillance. I did my master thesis in monitoring of large scale distributed software
              systems. The goal of the thesis was to explore the possibilities of discovering different types of network
              faults between the nodes in the systems, both within and outside kubernetes clusters using a recent
              technology, service mesh. This involved creating a virtualized test-environment consisting of multiple
              virtual machines running different services, connected through a simulated network where faults could be
              introduced. A series of tests were carried out in order to evaluate if the faults could be discovered
              using the service mesh. The result of the master thesis was that network faults could to some extent be
              discovered using the solution and could be applicable in some cases. The problems experienced were mainly
              due to using service mesh in a way it is not intended for.
            </p>
          </WaveSection>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents}>
            <h2>Nibe AB - Fullstack Developer</h2>
            <h3>Markaryd, Sweden (Remote)- June 2020 - September 2020 (Full-time)</h3>
            <h3>Markaryd, Sweden (Remote)- November 2020 - December 2020 (Part-time)</h3>
            <p>
              Nibe is a Swedish manufacturer with a global presence. The company develops, manufactures and sells energy
              solutions in the areas of real estate, industry and infrastructure. I was a summer intern at Nibe in 2020
              which later transferred to a part-time position alongside my studies until it was time for my master
              thesis. The work was carried out remotely and i was working on an internal tool to be used for testing of
              the manufactured machines in which the machines could be remotely controlled. The program was developed
              using React.js for the frontend together with Electron and backend in C# .NET Core.
            </p>
          </WaveSection>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents}>
            <h2>Calmon Stepper Motor Technologies - Embedded Developer Summer Intern</h2>
            <h3>Karlshamn, Sweden - June 2019 - August 2019 (Full-time)</h3>
            <p>
              Calmon is a consulting company in the field of electrical engineering, specializing in stepper motor
              controllers. I was a summer intern at Calmon in 2019, responsible for an internal project of which to be
              used for demo-purposes to show the precision of their stepper motor controllers. The project involved some
              electrical engineering and programming in C++.
            </p>
          </WaveSection>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isBottom>
            <h2>Lund Formula Student - Embedded Developer</h2>
            <h3>Lund, Sweden - August 2019 - December 2020</h3>
            <p>
              Formula student is a competition where a team of students develop and manufacture a smaller scale formula
              car and compete with other teams around Europe. The Lund Formula student team was a team of 70 students
              and this year building two cars, one conbustion car and one concept electric car. Everyone was in a small
              team responsible for a certain subsystem of the car and I was responsible for the code in the custom built
              embedded systems. The project is carried out in the timespan of a year. The Lund Formula student team is
              one of the top-ranking teams in Europe in the combustion section, however the competitions was canceled in
              2020 due to covid-19. Some of the students however, continued working on the car for some time and I was
              one of them which led to the car being able to compete in 2021.
            </p>
          </WaveSection>
        </section>
        <section id="education">
          <h1>Education & Certification</h1>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isTop>
            <h2>Lund University - Master of Science, Computer Science</h2>
            <h3>Lund, Sweden - August 2016 - June 2021</h3>
            <p>
              Axis Communications AB is a Swedish manufacturer of network based solutions in the areas of physical
              safety and camera surveillance. I did my master thesis in monitoring of large scale distributed software
              systems. The goal of the thesis was to explore the possibilities of discovering different types of network
              faults between the nodes in the systems, both within and outside kubernetes clusters using a recent
              technology, service mesh. This involved creating a virtualized test-environment consisting of multiple
              virtual machines running different services, connected through a simulated network where faults could be
              introduced. A series of tests were carried out in order to evaluate if the faults could be discovered
              using the service mesh. The result of the master thesis was that network faults could to some extent be
              discovered using the solution and could be applicable in some cases. The problems experienced were mainly
              due to using service mesh in a way it is not intended for.
            </p>
          </WaveSection>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents}>
            <h2>Professional Scrum Master I (PSM I)</h2>
            <h3>April 2022 -</h3>
            <p>
              Those who earn the globally recognized Professional Scrum Master I (PSM I) certification have demonstrated
              a fundamental level of Scrum mastery, including the concepts of applying Scrum, and proven an
              understanding of Scrum as described in the Scrum Guide. This individual has also demonstrated a consistent
              use of terminology and approach to Scrum.
            </p>
            <h3>
              Verify: <a href="https://www.credly.com/badges/afa64343-1040-4c6e-bdef-c5bde0c0400c">Credly</a>
            </h3>
          </WaveSection>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents}>
            <h2>AWS Certified Solutions Architect - Associate (SAA-C02)</h2>
            <h3>June 2022 - June 2025</h3>
            <p>
              This credential helps organizations identify and develop talent with critical knowledge related to
              implementing cloud initiatives. Earning AWS Certified Cloud Practitioner validates cloud fluency and
              foundational AWS knowledge.
            </p>
            <h3>
              Verify: <a>Credly</a>
            </h3>
          </WaveSection>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isBottom>
            <h2>AWS Certified Cloud Practitioner (CLF-C01)</h2>
            <h3>June 2022 - June 2025</h3>
            <p>
              This credential helps organizations identify and develop talent with critical skills for implementing
              cloud initiatives. Earning AWS Certified Solutions Architect - Associate validates the ability to design
              and implement distributed systems on AWS.
            </p>
            <h3>
              Verify: <a>Credly</a>
            </h3>
          </WaveSection>
        </section>
        <section id="skills">
          <h1>Skills</h1>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isTop isBottom>
            <h2 style={{ textAlign: "center" }}>Programming</h2>
          </WaveSection>
          <SkillGrid
            skills={[
              { name: "Java", score: 8 },
              { name: "C#", score: 6 },
              { name: "TypeScript", score: 6 },
              { name: "JavaScript", score: 6 },
              { name: "HTML", score: 6 },
              { name: "Python", score: 5 },
              { name: "Dart", score: 5 },
              { name: "GoLang", score: 5 },
              { name: "C++", score: 4 },
              { name: "C", score: 4 },
              { name: "Haskell", score: 3 },
            ]}
            coloredComponents={coloredComponents}
          ></SkillGrid>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isTop isBottom>
            <h2 style={{ textAlign: "center" }}>Frameworks</h2>
          </WaveSection>
          <SkillGrid
            skills={[
              { name: "Spring Booot", score: 8 },
              { name: ".NET", score: 7 },
              { name: "Flowable BPM", score: 6 },
              { name: "Feign", score: 6 },
              { name: "React JS", score: 6 },
              { name: "Material UI", score: 6 },
              { name: "Redux", score: 5 },
              { name: "Flutter", score: 5 },
              { name: "Next JS", score: 4 },
              { name: "Electron", score: 4 },
              { name: "Angular", score: 4 },
              { name: "Tensorflow", score: 3 },
              { name: "Keras", score: 3 },
            ]}
            coloredComponents={coloredComponents}
          ></SkillGrid>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isTop isBottom>
            <h2 style={{ textAlign: "center" }}>SCM and CI/CD</h2>
          </WaveSection>
          <SkillGrid
            skills={[
              { name: "Git", score: 9 },
              { name: "Github Actions", score: 7 },
              { name: "Auzure Pipelines", score: 7 },
              { name: "Terraform", score: 6 },
              { name: "Kubernetes", score: 6 },
              { name: "Jira", score: 6 },
              { name: "Azure DevOps", score: 6 },
              { name: "Helm", score: 6 },
              { name: "Ansible", score: 6 },
              { name: "ArgoCD", score: 5 },
              { name: "Spinnaker", score: 4 },
              { name: "Next JS", score: 4 },
              { name: "Angular", score: 4 },
              { name: "Tensorflow", score: 3 },
              { name: "Keras", score: 3 },
            ]}
            coloredComponents={coloredComponents}
          ></SkillGrid>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isTop isBottom>
            <h2 style={{ textAlign: "center" }}>Databases</h2>
          </WaveSection>
          <SkillGrid
            skills={[
              { name: "MongoDB", score: 8 },
              { name: "Postgres SQL", score: 6 },
              { name: "Firestore", score: 5 },
              { name: "Prometheus", score: 5 },
              { name: "Neo4J", score: 5 },
            ]}
            coloredComponents={coloredComponents}
          ></SkillGrid>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isTop isBottom>
            <h2 style={{ textAlign: "center" }}>Cloud</h2>
          </WaveSection>
          <SkillGrid
            skills={[
              { name: "AWS", score: 8 },
              { name: "Azure", score: 6 },
              { name: "GCP", score: 4 },
            ]}
            coloredComponents={coloredComponents}
          ></SkillGrid>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isTop isBottom>
            <h2 style={{ textAlign: "center" }}>Methods & Processes</h2>
          </WaveSection>
          <SkillGrid
            skills={[
              { name: "Agile", score: 8 },
              { name: "Remote Work", score: 8 },
              { name: "Scrum", score: 7 },
              { name: "TDD", score: 4 },
              { name: "Mob Programming", score: 4 },
              { name: "XP", score: 3 },
            ]}
            coloredComponents={coloredComponents}
          ></SkillGrid>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isTop>
            <h2>Movie Recommender</h2>
            <h3>
              Technologies: Java, Dart, Spring boot, Flutter, Microservices, Recommendation Engine, Graph Database,
              Neo4J, Docker, AWS
            </h3>
            <p>
              This was a personal project where i wanted to develop a mobile app for recommending movies, with the main
              purpose of trying out some new technologies that i hadnt worked with previously such as graph database,
              recommendation engines and Flutter.
            </p>
            <p>
              The application is built using the cross-platform framework Flutter and has only been tested on Android
              but the framework should allow it to be exported for browser and ios. The backend is built using Java with
              Spring Boot and consits of two microservices, one for all interactions towards the TMDB api and one for
              database interactions towards the Neo4J graph database and providing recommendations. The recommendation
              engine works by finding movies that other users has liked that has a history of likeing previous movies
              that the current user also has liked.
            </p>
            <p>
              When a user first opens the application, they are presented with a genre selection screen where they can
              pick genres that they prefer. The selected genres are mainly used for the initial recommendations but is
              also weighed in for future recommendations. After that, a movie artwork is shown based on the calculated
              recommendation and the user can either swipe right or left on the artwork to like or dislike the movie.
              The user is also able to click on the artwork to get the movie description, see TMDB rating and a button
              to watch the trailer. If there are no recommendations for the current user, the application fetches movies
              from the TMDB toplist and adds them to the recommendation engine for future users. There is no sign in
              required for the application, it only uses an unique id based on the device to identify the user.
            </p>

            <p>
              The application heavily relies on the open api movie database TMDB (<a>https://www.themoviedb.org/</a>)
              which serves all the movie data.
            </p>
          </WaveSection>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents}>
            <h2>Microservice Notes App</h2>
            <h3>
              Technologies: Java, Golang, TypeScript, Spring boot, React, Microservices, MongoDB, Docker, AWS,
              Kubernetes, AWS EKS, CI/CD, Terraform, Authentication, Github Actions, Material UI
            </h3>
            <p>
              This was a personal project where i developed a notes application inspired by Google Keep, with the main
              purpose of improving my skills or trying some new technologies technologies such as Microservice
              Architecture, AWS, Kubernetes, Golang, Kubernetes, CI/CD, Terraform.
            </p>
            <p>
              The frontend for the application is built using React and the backend consists two services, one
              authentification service (written in Golang) and one service for handling the notes (written in java) and
              a MongoDB database for storing notes and user data. The application was deployed to an AWS EKS cluster
              using Terraform and the process is fully automated with Github Actions.
            </p>
            <p>
              The frontend is a React application and is a traditional note taking interface built with Material UI
              displaying all the users notes, allows for editing of the notes, changing colors, token refreshing,
              searching for notes and with a login/signup component. The authentication for this application is built
              from scratch and utilizes JWT tokens and this is handled by the authentication service. Its
              resposibilities are logins, signups, token validation and token refreshing. The notes service handles all
              updates to the notes and all api calls made to it is verified through the authentication service by the
              JWT token passed in the api calls before updating the note content in the MongoDB database. A large focus
              in this project was the deployment, the deployment to AWS EKS is done using terraform and all
              infrastructure and setup are specified in the terraform files. The application can be fully deployed with
              a single terraform command and just as easily destroyed again in order to reduce the AWS bill since the
              application is developed for learning purposes. Github actions is setup to build the application, build
              docker images, publish the docker images and either deploy or update the infrastructure on AWS.
            </p>
          </WaveSection>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents}>
            <h2>Dig-Bot</h2>
            <h3>Technologies: Java, TypeScript, React, WebSockets, Server-Client</h3>
            <p>
              Me together with some colleages at Cygni developed a game called Dig-Bot, it is a
              semi-multiplayer/realtime game which tests the players coding skills. The game consists of a frontend
              built using react, a backend server in Java, and several client templates created in different popular
              languages.
            </p>
            <p>
              The gist of the game is that you are multiple players on a vertically autoscrolling 2D game map, the
              players should dig their way down through the ground as far as possible but there are several objects
              randomly scattered throughout the map. There are pick-up items in the map such as explosives and extra
              points and there are stones in your way that cant be dug but can be destroyed with explosives. You also
              got to watch out for other players as they can destroy you by colliding with you or by explosives.
            </p>
            <p>
              The game works by a server rendering the map which is served to the frontend and handling all game logic,
              there are multiple clients connected through the server (players) which performs actions for the players.
              The players objective is to download a client in their preferred coding language which has some predefined
              functions they can use for deciding their move such as getting the layout of the map, getting other player
              locations, getting their explosive count and performing a move. The player should then implement a bot
              using these predefined functions for making the best game move for every game-tick. So when the game is
              started the players moves by their predefined bots and the frontend is just a visible presentation of the
              current game status. As the game progresses, the map gets harder to navigate and the number of explosives
              decrease. The game is over when there are no players left and the winner is the player with the highest
              score which is based on collected points and the depth they got to.
            </p>
          </WaveSection>
          <WaveSection scrollOffset={offsetY} coloredComponents={coloredComponents} isBottom>
            <h2>Resumé Web Page</h2>
            <h3>Technologies: TypeScript, React, Next.js, CSS, Github Actions</h3>
            <p>
              This webpage is built using Next.js and automatically deployed to Github pages through Github Actions. The
              components and styiling are custom built with CSS and SVG graphics, you might already have noticed but
              there is a parallaxing effect on the background and the wavy sections move when you scroll. Colors for the
              sections is somewhat autogenerated. The page is built to be easily editable.
            </p>
          </WaveSection>
        </section>
        <div className={styles.outro}>
          <h1 style={{ paddingTop: `${200 - Math.max(offsetY - (pageHeight - 150), 0)}px` }}>
            Thanks for checking out my resumé page!
          </h1>
          <h2>
            Feel free to contact me at <a href="mailto: elias.frykholm@outlook.com">elias.frykholm@outlook.com</a>
          </h2>
        </div>
      </main>
    </div>
  );
};

export default Home;
