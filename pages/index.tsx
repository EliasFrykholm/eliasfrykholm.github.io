import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elias Frykholm</title>
        <meta name="description" content="Elias Frykholm - fullstack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.navbarContainer}>
          <h1 className={styles.navbarItem}>About</h1>
          <h1 className={styles.navbarItem}>Experience</h1>
          <h1 className={styles.navbarItem}>Education</h1>
          <h1 className={styles.navbarItem}>Competences</h1>
          <h1 className={styles.navbarItem}>Projects</h1>
      </div>
        <section>
          <h1>Elias Frykholm</h1>
          <p>Fullstack Developer</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda fugiat, quidem similique corporis vitae totam illum vel, consectetur ea perferendis nesciunt! Recusandae quibusdam quam aspernatur quae ut beatae maxime!</p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>Accusamus earum modi, iusto quos dicta ipsa corrupti id quae nulla eaque laboriosam dolorem saepe aliquid reiciendis hic beatae obcaecati corporis fuga, provident quidem. Est non voluptatibus eos explicabo. Eaque?</p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>Vel molestiae laboriosam ullam voluptatum illum, itaque ratione quos illo veniam provident consectetur dolorem autem odio harum perspiciatis vero, voluptate sit dicta beatae. Rerum deleniti perferendis eligendi adipisci facilis aliquid?</p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>Quaerat eligendi, doloribus quas aperiam eos quibusdam ad reiciendis eaque commodi est veritatis officiis tenetur aut molestiae ullam et perspiciatis illum a minus consectetur ea distinctio maxime error aliquam. Laudantium!</p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>Officia voluptatum iste fuga ad? Nihil cupiditate fugiat necessitatibus dignissimos quae velit voluptas excepturi, vitae illo quasi inventore qui hic repellendus! Nulla iusto reprehenderit expedita eaque pariatur sint amet voluptate?</p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>Voluptas architecto nihil magni, possimus minus facere, harum corrupti, suscipit natus ipsum atque quae? Odio, asperiores! Praesentium sed, minus sint eligendi debitis vel cum dolorem fugiat facere consectetur, nemo dolor.</p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>Soluta repellat molestias sint id blanditiis officiis eum vitae tempora dolore harum! Aspernatur rem assumenda ut, aliquam laboriosam quibusdam nihil eaque ullam, illum reiciendis error ipsam? Sequi corrupti amet blanditiis.</p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>Neque ex voluptatem minus saepe error nam esse dignissimos quas a et ad cum voluptas, veritatis excepturi, consequuntur harum suscipit repudiandae quod! Voluptas ipsa eum consequuntur, eius doloribus magni quod!</p>
        </section>
      </main>
    </div>
  )
}

export default Home
