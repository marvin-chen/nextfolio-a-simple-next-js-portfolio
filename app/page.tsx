import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-primary-300 to-primary-400 dark:from-primary-700 dark:to-primary-600 p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100">Welcome to Marvin's Website</h1>
        </div>

        <div className="flex flex-col lg:flex-row items-start">
          <div className="lg:w-2/3 pr-8">
            <div className="prose prose-primary dark:prose-invert">
              <p className="text-primary-800 dark:text-primary-200">
                I'm a third-year Computer Science student at Princeton University with minors in Finance and East Asian Studies.
              </p>
              <p className="text-primary-700 dark:text-primary-300">
                My technical skills include programming in Python, Java, JavaScript, and C/C++, as well as experience with web development, data analysis and machine learning tools.
              </p>
              <p className="text-primary-700 dark:text-primary-300">
                I've worked on several projects involving web development, machine learning, and data analysis. These projects have allowed me to apply my skills in real-world scenarios and contribute to open-source communities.
              </p>
              <p className="text-primary-800 dark:text-primary-200">
                Feel free to explore my portfolio to learn more about my projects and experiences. You can also find me on{" "}
                <a href={socialLinks.linkedin} target="_blank" className="text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300">
                  LinkedIn
                </a>{" "}
                or check out my code on{" "}
                <a href={socialLinks.github} target="_blank" className="text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300">
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-primary-800 p-4 rounded-lg shadow-md">
              <Image
                src="/Headshot.jpg"
                alt="Profile photo"
                className="rounded-full mx-auto hover:grayscale-0 transition-all duration-300"
                width={160}
                height={160}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}