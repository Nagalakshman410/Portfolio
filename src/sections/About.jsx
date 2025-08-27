import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const educationData = [
  {
    degree: "B.E in Computer Science & Engineering",
    institution: "BMS College of Engineering, Bengaluru",
    duration: "2023 - 2025",
    score: "CGPA: 8.48",
  },
  {
    degree: "Diploma in Electronics & Communication Engineering",
    institution: "GPT Chintamani, Chintamani",
    duration: "2019 - 2022",
    score: "Percentage: 95%",
  },
  {
    degree: "SSLC",
    institution: "Kishora Vidya Bhavana, Chintamani",
    duration: "2019",
    score: "Percentage: 96.48%",
  },
];

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('bsnagalakshman@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* Introduction */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/img-2.jpeg" alt="profile" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Nagalakshman BS</p>
              <p className="grid-subtext">
                Passionate Software Engineer with internship experience at Target, skilled in full-stack development and driven to solve real-world problems with Java, Spring Boot, React.js and modern technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/TechStack.png" alt="Tech Stack" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in C++, Java, JavaScript, Spring Boot, Kafka, HTML, CSS, MERN Stack, Next.js, Three.js, MySQL, PostgreSQL, REST APIs, CI/CD and modern web technologies that allow me to create robust and efficient solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Globe & Location */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 12.9716, lng: 77.5946, text: 'Bengaluru, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Flexible Work Locations</p>
              <p className="grid-subtext">
                I am based in Bengaluru and open to working onsite, hybrid, or fully remotely, depending on the teams needs.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div
            className="grid-container relative overflow-hidden"
            style={{
              backgroundImage: "url('assets/bgd-img.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Optional: Add a dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            <div className="relative z-10">
              <p className="grid-headtext mb-6">Education Details</p>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-black-200 bg-opacity-80 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    <p className="text-xl font-semibold text-white mb-2">{edu.degree}</p>
                    <p className="text-white-600 mb-1">{edu.institution}</p>
                    <p className="text-gray-400 mb-1">{edu.duration}</p>
                    <p className="text-gray-300">{edu.score}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="contact"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container cursor-pointer" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-white">bsnagalakshman@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;