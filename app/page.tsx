import Image from "next/image";
import { socialLinks } from "./config";
import './themetransition.css';

export default function Page() {
  return (
    <section className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 min-h-screen transition-colors duration-500 bg-opacity-50 dark:bg-opacity-50" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}>
      <div className="container mx-auto px-4 py-8 ">
        <div className="bg-gradient-to-r from-primary-300 to-primary-400 dark:from-primary-700 dark:to-primary-600 p-8 rounded-full shadow-lg mb-8 transition-all duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100 text-center animate-fade-in-up">
            Welcome to Marvin's Website
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-start bg-white dark:bg-primary-800 rounded-[2rem] shadow-lg p-6 transition-all duration-300 hover:shadow-xl theme-transition">
          <div className="lg:w-2/3 pr-8">
            <div className="prose prose-primary dark:prose-invert">
              <p className="text-primary-800 dark:text-primary-200 transition-colors duration-300 p-2">
                I'm a third-year Computer Science student at Princeton University with minors in Finance and East Asian Studies.
              </p>
              <p className="text-primary-700 dark:text-primary-300 transition-colors duration-300 p-2">
                My technical skills include programming in Python, Java, JavaScript, and C/C++, as well as experience with web development, data analysis and machine learning tools.
              </p>
              <p className="text-primary-700 dark:text-primary-300 transition-colors duration-300 p-2">
                I've worked on several projects involving web development, machine learning, and data analysis. These projects have allowed me to apply my skills in real-world scenarios and contribute to open-source communities.
              </p>
              <p className="text-primary-800 dark:text-primary-200 transition-colors duration-300 p-2">
                Feel free to explore my portfolio to learn more about my projects and experiences. You can also find me on{" "}
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300 transition-colors duration-300 relative overflow-hidden group">
                  LinkedIn
                  <span className="absolute inset-0 bg-secondary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>{" "}
                or check out my code on{" "}
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300 transition-colors duration-300 relative overflow-hidden group">
                  GitHub
                  <span className="absolute inset-0 bg-secondary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
                .
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-primary-800 p-4 rounded-full shadow-md transition-colors duration-300">
              <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
                <Image
                  src="/Headshot.jpg"
                  alt="Profile photo"
                  className="rounded-full mx-auto hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                  width={160}
                  height={160}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
