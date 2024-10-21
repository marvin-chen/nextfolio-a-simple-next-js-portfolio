import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a>
      <Image
      src="/Headshot.jpg"
      alt="Profile photo"
      className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-0"
      width={160}
      height={160}
      priority
      />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Welcome to Marvin's Website!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a third-year Computer Science student at Princeton University with minors in Finance and East Asian Studies.
        </p>
        <p>
          My technical skills include programming in Python, Java, JavaScript, and C/C++, as well as experience with web development, data analysis and machine learning tools.
        </p>
        <p>
          I've worked on several projects involving web development, machine learning, and data analysis. These projects have allowed me to apply my skills in real-world scenarios and contribute to open-source communities.
        </p>
        <p>
          Feel free to explore my portfolio to learn more about my projects and experiences. You can also find me on{" "}
          <a href={socialLinks.linkedin} target="_blank">
            LinkedIn
          </a>{" "}
          or check out my code on{" "}
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}