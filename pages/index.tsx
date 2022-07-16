import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import WaveSection from '../components/WaveSection'
import styles from '../styles/Home.module.css'
import { IconContext } from 'react-icons'
import { FaUser, FaBriefcase, FaGraduationCap, FaSlidersH, FaThLarge } from 'react-icons/fa'

const Home: NextPage = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    addEventListener('scroll', handleScroll);

    return () => removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Elias Frykholm</title>
        <meta name="description" content="Elias Frykholm - fullstack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.background} style={{backgroundPositionY: offsetY*0.5}}>
        <section>
          <div className={styles.about}>
              <Image src="/profile-image.jpeg" width={300} height={300} className={styles.avatar}/>  
            <h1>Elias Frykholm</h1>
              <p>Msc. in Computer Science</p>
              <p>Fullstack Engineer</p>
          </div>
        </section>

        <section>
        <h1>Experience</h1>
        <WaveSection color="#9db08e" scrollOffset={offsetY}>
          <h2>Cygni, Part of Accenture - Fullstack Engineer Consultant</h2>
          <h3>Malmö, Sweden - September 2021 -> Now</h3>
          <p>Elias together with two other Cygni talents created a web application for booking rooms and desks at the Cygni Syd office  using mob-programming. The application uses a React Frontend with Google SSO  and connections to the Google Calender API as backend. A simple node.js express backend with sqlite was also written during development for testing purposes. The application was then deployed using AWS Amplify.</p>
        </WaveSection>
        <WaveSection color="#8ea081" scrollOffset={offsetY}>
          <h2>Axis Communications - Master Thesis Student</h2>
          <h3>Lund, Sweden - October 2021 -> June 2021</h3>
          <p>Axis Communications AB is a Swedish manufacturer of network based solutions in the areas of physical safety and camera surveillance.
I did my master thesis in monitoring of large scale distributed software systems. The goal of the thesis was to explore the possibilities of discovering different types of network faults between the nodes in the systems, both within and outside kubernetes clusters using a recent technology, service mesh. This involved creating a virtualized test-environment consisting of multiple virtual machines running different services, connected through a simulated network where faults could be introduced. A series of tests were carried out in order to evaluate if the faults could be discovered using the service mesh. The result of the master thesis was that network faults could to some extent be discovered using the solution and could be applicable in some cases. The problems experienced were mainly due to using service mesh in a way it is not intended for.
</p>
        </WaveSection>
        <WaveSection color="#90a88b" scrollOffset={offsetY}>
          <h2>Axis Communications - Master Thesis Student</h2>
          <h3>Lund, Sweden - October 2021 -> June 2021</h3>
          <p>Axis Communications AB is a Swedish manufacturer of network based solutions in the areas of physical safety and camera surveillance.
I did my master thesis in monitoring of large scale distributed software systems. The goal of the thesis was to explore the possibilities of discovering different types of network faults between the nodes in the systems, both within and outside kubernetes clusters using a recent technology, service mesh. This involved creating a virtualized test-environment consisting of multiple virtual machines running different services, connected through a simulated network where faults could be introduced. A series of tests were carried out in order to evaluate if the faults could be discovered using the service mesh. The result of the master thesis was that network faults could to some extent be discovered using the solution and could be applicable in some cases. The problems experienced were mainly due to using service mesh in a way it is not intended for.
</p>
        </WaveSection>
        <WaveSection color="#90a88f" scrollOffset={offsetY}>
          <h2>Axis Communications - Master Thesis Student</h2>
          <h3>Lund, Sweden - October 2021 -> June 2021</h3>
          <p>Axis Communications AB is a Swedish manufacturer of network based solutions in the areas of physical safety and camera surveillance.
I did my master thesis in monitoring of large scale distributed software systems. The goal of the thesis was to explore the possibilities of discovering different types of network faults between the nodes in the systems, both within and outside kubernetes clusters using a recent technology, service mesh. This involved creating a virtualized test-environment consisting of multiple virtual machines running different services, connected through a simulated network where faults could be introduced. A series of tests were carried out in order to evaluate if the faults could be discovered using the service mesh. The result of the master thesis was that network faults could to some extent be discovered using the solution and could be applicable in some cases. The problems experienced were mainly due to using service mesh in a way it is not intended for.
</p>
        </WaveSection>
        <WaveSection color="#90a90b" scrollOffset={offsetY}>
          <h2>Axis Communications - Master Thesis Student</h2>
          <h3>Lund, Sweden - October 2021 -> June 2021</h3>
          <p>Axis Communications AB is a Swedish manufacturer of network based solutions in the areas of physical safety and camera surveillance.
I did my master thesis in monitoring of large scale distributed software systems. The goal of the thesis was to explore the possibilities of discovering different types of network faults between the nodes in the systems, both within and outside kubernetes clusters using a recent technology, service mesh. This involved creating a virtualized test-environment consisting of multiple virtual machines running different services, connected through a simulated network where faults could be introduced. A series of tests were carried out in order to evaluate if the faults could be discovered using the service mesh. The result of the master thesis was that network faults could to some extent be discovered using the solution and could be applicable in some cases. The problems experienced were mainly due to using service mesh in a way it is not intended for.
</p>
        </WaveSection>
        <WaveSection color="#90a88b" scrollOffset={offsetY}>
          <h2>Axis Communications - Master Thesis Student</h2>
          <h3>Lund, Sweden - October 2021 -> June 2021</h3>
          <p>Axis Communications AB is a Swedish manufacturer of network based solutions in the areas of physical safety and camera surveillance.
I did my master thesis in monitoring of large scale distributed software systems. The goal of the thesis was to explore the possibilities of discovering different types of network faults between the nodes in the systems, both within and outside kubernetes clusters using a recent technology, service mesh. This involved creating a virtualized test-environment consisting of multiple virtual machines running different services, connected through a simulated network where faults could be introduced. A series of tests were carried out in order to evaluate if the faults could be discovered using the service mesh. The result of the master thesis was that network faults could to some extent be discovered using the solution and could be applicable in some cases. The problems experienced were mainly due to using service mesh in a way it is not intended for.
</p>
        </WaveSection>
        <WaveSection color="#90a88b" isBottom={true} scrollOffset={offsetY}>
          <h2>Axis Communications - Master Thesis Student</h2>
          <h3>Lund, Sweden - October 2021 -> June 2021</h3>
          <p>Axis Communications AB is a Swedish manufacturer of network based solutions in the areas of physical safety and camera surveillance.
I did my master thesis in monitoring of large scale distributed software systems. The goal of the thesis was to explore the possibilities of discovering different types of network faults between the nodes in the systems, both within and outside kubernetes clusters using a recent technology, service mesh. This involved creating a virtualized test-environment consisting of multiple virtual machines running different services, connected through a simulated network where faults could be introduced. A series of tests were carried out in order to evaluate if the faults could be discovered using the service mesh. The result of the master thesis was that network faults could to some extent be discovered using the solution and could be applicable in some cases. The problems experienced were mainly due to using service mesh in a way it is not intended for.
</p>
        </WaveSection>
        </section>
        <section>
          <h1>
            Education
          </h1>
        <WaveSection color="#90a88b" scrollOffset={offsetY}>
          <h2>Lund University - Master of Science, Computer Science</h2>
          <h3>Lund, Sweden - August 2016 -> June 2021</h3>
          <p>Axis Communications AB is a Swedish manufacturer of network based solutions in the areas of physical safety and camera surveillance.
I did my master thesis in monitoring of large scale distributed software systems. The goal of the thesis was to explore the possibilities of discovering different types of network faults between the nodes in the systems, both within and outside kubernetes clusters using a recent technology, service mesh. This involved creating a virtualized test-environment consisting of multiple virtual machines running different services, connected through a simulated network where faults could be introduced. A series of tests were carried out in order to evaluate if the faults could be discovered using the service mesh. The result of the master thesis was that network faults could to some extent be discovered using the solution and could be applicable in some cases. The problems experienced were mainly due to using service mesh in a way it is not intended for.
</p>
        </WaveSection>
        </section>
      </main>
    <div className={styles.sidebar}>
      <IconContext.Provider value={{ size: "30" }}>
        <FaUser/>
        <FaBriefcase/>
        <FaGraduationCap/>
        <FaSlidersH/>
        <FaThLarge/>
      </IconContext.Provider>
    </div>
    </div>
  )
}

export default Home
