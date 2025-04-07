import React from "react";
import { Link } from "react-router";
import week1 from "../Image/Week_1new.png";
import week2 from "../Image/Week_2new.png";
import week3 from "../Image/Week_3new.png";
import week4 from "../Image/Week_4new.jpeg";
import week5 from "../Image/Week_5new.png";
import week6 from "../Image/Week_6new.png";
import week7 from "../Image/Week_7new.png";
import week8 from "../Image/Week_8new.png";
import Icons from "./Icons";

const Blogfeed = () => {
  const cards = [
    {
      image: week1,
      title: "Month 1, Week 1",
      description:
        "This week, I dove into the fundamentals of React Native development and...",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-5d3123003163",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_react-frontend-mobilefrontend-activity-7265737551523557376-yi18?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: week2,
      title: "Month 1, Week 2",
      description:
        "This week, I focused on styling components in React Native, and here’s what I achieved...",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-772caaa47a57",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_reactnative-mobiledevelopment-frontenddeveloper-activity-7268205333209096192-drXP?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: week3,
      title: "Month 1, Week 3",
      description:
        "This week, I designed a clone version of Twitter (X) App...",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-68f4b8f2bde6",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_reactnative-mobiledevelopment-frontenddeveloper-activity-7270804972303233024-29Zr?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: week4,
      title: "Month 1, Week 4",
      description: "🚀 Wrapping Up Month One of My React Native...",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-dab1e0363b9a",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_mobiledevelopment-reactnative-frontendengineering-activity-7274442777864646657-JZGh?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: week5,
      title: "Month 2, Week 1",
      description:
        "It's been over a month since I started learning React Native, and I'm excited to share my...",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-29d0c566a2fe",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_reactnative-frontenddevelopment-mobileappdevelopment-activity-7276943596975443969-Eet2?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: week6,
      title: "Month 2, Week 2",
      description:
        "🎉 Happy new year and welcome to 2025! I am Kicking off this new year by diving...",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-9526d17c5068",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_reactnative-mobiledevelopment-frontenddevelopment-activity-7280539918198599681-TlEb?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: week7,
      title: "Month 2, Week 3",
      description:
        "This week I worked mostly with Api's where I dived into making GET request using the fetch api.",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-9f56f6a57c0a",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_frontenddevelopment-apis-webdevelopment-activity-7283846171935002624-stwH?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: week8,
      title: "Month 2, Week 4",
      description:
        "This week, i focused more on Navigation in React Native. Navigation helps move between...",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-b9bede2310a6",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_reactnative-frontenddevelopment-navigation-activity-7286035301456646144-lr8_?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <section>
      <div className="mt-10 min-h-screen">
        <div className="flex flex-wrap gap-8 justify-center ml-[3%] mr-[3%] lg:ml-0 lg:mr-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-5/12 md:w-5/12 bg-white rounded-lg lg:shadow-1xl shadow-lg overflow-hidden border rounded-md transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
              <img
                src={card.image}
                alt={`${card.title} Image`}
                className="w-full h-83 object-cover rounded-[5px]"
                loading="lazy"
              />
              <div className="p-4">
                <h1 className="text-xl font-semibold text-black">
                  {card.title}
                </h1>
                <p className="text-stone-600 mt-2 text-sm">
                  {card.description}
                </p>
                <div className="flex gap-5">
                  <Link
                    to={card.medium}
                    target="_blank"
                    className="inline-block mt-4 px-4 py-3 shadow-lg text-[#1A1818] text-sm rounded-[5px] bg-[#ECE7E1] hover:border hover:border-[#ECE7E1] hover:bg-[#1A1818] hover:text-[#ECE7E1] transition ease-in duration-300">
                    Medium
                  </Link>
                  <Link
                    to={card.linkedIn}
                    target="_blank"
                    className="inline-block mt-4 px-4 py-3 shadow-lg text-[#1A1818] text-sm rounded-[5px] bg-[#ECE7E1] hover:border hover:border-[#ECE7E1] hover:bg-[#1A1818] hover:text-[#ECE7E1] transition ease-in duration-300">
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ml-[10%] lg:ml-[8%] pb-[5%] lg:mt-[5%] mt-[20%]">
          <Icons />
        </div>
      </div>
    </section>
  );
};

export default Blogfeed;
