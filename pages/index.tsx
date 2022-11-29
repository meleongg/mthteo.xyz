import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import indexStyles from "../styles/index.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={`${indexStyles.intro} ${utilStyles.headingXl}`}>
          <span>hi friend, I'm</span>
          <Typewriter
            options={{
              strings: [
                "Melvin Teo",
                "a 2nd-year UBC CS student",
                "a software developer",
                "a volleyball player",
                "a big brother",
              ],
              autoStart: true,
              loop: true,
              delay: "natural",
              deleteSpeed: "natural",
            }}
          />
        </div>
        <div className={indexStyles.introData}>
          <div className={indexStyles.introDataText}>
            <p>
              Welcome to my playground of thought and randomness. Feel free to
              click around to explore a bit more about me.
            </p>
            <p>
              As an aspiring Full-Stack Engineer, I'm passionate about
              collaborating with others to find creative solutions for
              challenging problems. I've recently been learning the MERN stack
              through my
              <Link className={`${utilStyles.altText} ${utilStyles.link}`} href="/projects">
                {" "}personal projects
              </Link>
              . I've closely collaborated with other developers through my
              <Link className={`${utilStyles.altText} ${utilStyles.link}`} href="/experiences">
                {" "}work experience{" "}
              </Link>
              as well as informal hackathons settings.
            </p>
            <p>
              In my spare time, you can find me biking around Vancouver, playing
              volleyball, learning world languages, strumming a guitar, or
              hanging out with friends & family. I also sometimes{" "}
              <Link className={`${utilStyles.altText} ${utilStyles.link}`} href="/posts">
                write
              </Link>{" "}
              to clear my mind.
            </p>
            <p>
              Here's my{" "}
              <Link className={`${utilStyles.altText} ${utilStyles.link}`} href="/Melvin_Teo.pdf" target="_blank">
                resume
              </Link>
              , if that interests you!
            </p>
          </div>
          <Image
            priority
            src="/images/profile.jpg"
            height={330}
            className={`${utilStyles.borderCircle}`}
            width={250}
            alt="headshot of Melvin Teo"
          />
        </div>
      </section>
    </Layout>
  );
}