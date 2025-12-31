import React from "react";
import Timeline from "../components/Timeline";
import { Link } from "react-router";
// images
import AiTeacha from "../Image/aiteacha.png";
import WebInfluencers from "../Image/WebInfluencers.png";
import Imotalenthub from "../Image/imotalenthub.png";
import Eyeonimo from "../Image/eyeonimo.png";
import Techsoma from "../Image/techsomaafrica.png";
import Positivus from "../Image/positivus.png";
import Echo from "../Image/echo.png";
import Unsplash from "../Image/Unsplash.png";
import grocerly from "../Image/grocerly1.png";
import Spotify from "../Image/spotify.jpeg";

export function TimelineDemo() {
  const data = [
    {
      title: "Web Apps",
      content: (
        <div>
          <div className="grid lg:grid-cols-2 gap-4">
            <Link
              target="_blank"
              className="cursor-pointer"
              to="https://www.aiteacha.com/"
            >
              <img
                src={AiTeacha}
                alt="AiTeacha"
                width={500}
                height={500}
                className="rounded-xl hover:scale-105 ease-in-out duration-500"
              />
              <h1 className="text-white font-bold text-3xl mt-2">AiTeacha</h1>
              <p className="text-sm mt-2 text-neutral-600">
                Built with all AI tools to aid teachers day-to-day tasks to
                improve students outcome
              </p>
            </Link>
            <Link
              target="_blank"
              className="cursor-pointer"
              to="https://www.webinfluencers.org/"
            >
              <img
                src={WebInfluencers}
                alt="webinfluencers"
                width={500}
                height={500}
                className="rounded-xl hover:scale-105 ease-in-out duration-500"
              />
              <h1 className="text-white font-bold text-3xl mt-2">
                WebInfluencers
              </h1>
              <p className="text-sm mt-2 text-neutral-600">
                From strategic communications and AI innovation to talent
                platforms and media publishing
              </p>
            </Link>
            <Link
              target="_blank"
              className="cursor-pointer"
              to="https://www.imotalenthub.com/"
            >
              <img
                src={Imotalenthub}
                alt="Imotalenthub"
                width={500}
                height={500}
                className="rounded-xl hover:scale-105 ease-in-out duration-500"
              />
              <h1 className="text-white font-bold text-3xl mt-2">
                Imo Talent-Hub
              </h1>
              <p className="text-sm mt-2 text-neutral-600">
                Connecting Imo's brightest minds with global opportunities
              </p>
            </Link>
            <Link
              target="_blank"
              className="cursor-pointer"
              to="https://www.eyeonimo.com/"
            >
              <img
                src={Eyeonimo}
                alt="Eyeonimo"
                width={500}
                height={500}
                className="rounded-xl hover:scale-105 ease-in-out duration-500"
              />
              <h1 className="text-white font-bold text-3xl mt-2">Eyeonimo</h1>
              <p className="text-sm mt-2 text-neutral-600">
                Nigeria's Premier Investment Destination in the Heart of the
                Eastern Region
              </p>
            </Link>
            <Link
              target="_blank"
              className="cursor-pointer"
              to="https://www.techsoma.africa/"
            >
              <img
                src={Techsoma}
                alt="Techsoma"
                width={500}
                height={500}
                className="rounded-xl hover:scale-105 ease-in-out duration-500"
              />
              <h1 className="text-white font-bold text-3xl mt-2">
                Techsoma Africa
              </h1>
              <p className="text-sm mt-2 text-neutral-600">
                Your ultimate source for insights on Africa’s thriving tech
                ecosystem.
              </p>
            </Link>
            <Link
              target="_blank"
              className="cursor-pointer"
              to="https://positivusco.netlify.app/"
            >
              <img
                src={Positivus}
                alt="Positivus"
                width={500}
                height={500}
                className="rounded-xl hover:scale-105 ease-in-out duration-500"
              />
              <h1 className="text-white font-bold text-3xl mt-2">Positivus</h1>
              <p className="text-sm mt-2 text-neutral-600">
                A comprehensive digital marketing agency website that helps
                businesses grow...
              </p>
            </Link>
            <Link
              target="_blank"
              className="cursor-pointer"
              to="https://echoomusicapp.netlify.app/"
            >
              <img
                src={Echo}
                alt="Echo"
                width={500}
                height={500}
                className="rounded-xl hover:scale-105 ease-in-out duration-500"
              />
              <h1 className="text-white font-bold text-3xl mt-2">Echo</h1>
              <p className="text-sm mt-2 text-neutral-600">
                Say goodbye to interruptions and enjoy uninterrupted music
                streaming.
              </p>
            </Link>
            <Link
              target="_blank"
              className="cursor-pointer"
              to="https://kijeunsplash.netlify.app/"
            >
              <img
                src={Unsplash}
                alt="Unsplash"
                width={500}
                height={500}
                className="rounded-xl hover:scale-105 ease-in-out duration-500"
              />
              <h1 className="text-white font-bold text-3xl mt-2">
                Unsplash Web
              </h1>
              <p className="text-sm mt-2 text-neutral-600">
                A sophisticated image gallery mobile app replicating Unsplash
                features.
              </p>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Mobile Apps",
      content: (
        <div>
          <div className="grid lg:grid-cols-2 gap-4">
            <Link
              target="_blank"
              className="cursor-pointer"
              to="https://github.com/Kijeosowo/Grocerly"
            >
              <img
                src={grocerly}
                alt="grocerly"
                width={200}
                height={200}
                className="rounded-xl hover:scale-105 ease-in-out duration-500"
              />
              <h1 className="text-white font-bold text-3xl mt-2">Grocerly</h1>
              <p className="text-sm mt-2 text-neutral-600">
                Grocerly is a comprehensive grocery delivery mobile application
                built with Expo and React Native, designed to provide a seamless
                online grocery shopping and delivery experience.
              </p>
            </Link>
            <Link
              target="_blank"
              className="cursor-pointer"
              to="https://github.com/Kijeosowo/Grocerly"
            >
              <img
                src={Spotify}
                alt="spotify"
                width={150}
                height={150}
                className="rounded-xl hover:scale-105 ease-in-out duration-500"
              />
              <h1 className="text-white font-bold text-3xl mt-2">
                Spotify-wrapped
              </h1>
              <p className="text-sm mt-2 text-neutral-600">
                Built my spotify wrapped with the same logic, UI and animations
                as the original.
              </p>
            </Link>
            {/* <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-xl"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-xl"
            /> */}
          </div>
        </div>
      ),
    },
    // {
    //   title: "Changelog",
    //   content: (
    //     <div>
    //       <div className="grid lg:grid-cols-2 gap-4">
    //         <img
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="rounded-xl"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="rounded-xl"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="rounded-xl"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="rounded-xl"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
