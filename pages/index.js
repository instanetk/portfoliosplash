import react, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Particles from 'react-tsparticles';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>davidquintero.dev portfolio</title>
        <link rel="icon" href="/favicon.ico" />
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
              resize: true,
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
              opacity: 0.5,
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
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: false,
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
      <main className={styles.main}>
        <h1 className="text-white select-none">
          david<span className="font-bold">quintero</span>
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
