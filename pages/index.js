import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Particles from 'react-tsparticles';

export default function Home() {
  return (
    <div className="flex flex-wrap content-center justify-center h-screen">
      <Head>
        <title>David Quintero - Web Developer, Orlando, FL</title>
        <link rel="icon" href="/yin-yang3.svg" />
      </Head>

      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: '#831843',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: false,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
      <nav className="justify-between object-center align-middle py-1 hidden">
        <div>
          <h1 className="text-white select-none px-4">
            david<span className="font-bold">quintero</span>
          </h1>
        </div>
        <div className="flex text-white bolder">
          <h2 className="px-4">Projects</h2>
          <h2 className="px-4">Blog</h2>
          <h2 className="px-4">Essays</h2>
          <h2 className="px-4">Feed</h2>
        </div>
      </nav>
      <main className="">
        <div className="">
          <h1 className="text-white select-none px-4 text-5xl leading-18">
            Nice to meet you, my name is David.
            <br /> Let's get to work! <br />
          </h1>
          <p className="text-white w-full text-center mt-10 text-xs uppercase">v1.0 coming up ...</p>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
