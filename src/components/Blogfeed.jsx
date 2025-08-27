import { Calendar, ArrowRight } from "lucide-react";
import Week1 from "../Image/Week_1new.png";
import Week2 from "../Image/Week_2new.png";
import Week3 from "../Image/Week_3new.png";
import Week4 from "../Image/Week_4new.jpeg";
import Week5 from "../Image/Week_5new.png";
import Week6 from "../Image/Week_6new.png";
import Week7 from "../Image/Week_7new.png";
import Week8 from "../Image/Week_8new.png";
import Logo from "../components/Logo";

export default function Component() {
  const blogPosts = [
    {
      image: Week1,
      title: "Month 1, Week 1",
      description:
        "This week, I dove into the fundamentals of React Native development and explored the core concepts that make mobile development exciting.",
      date: "Week 1",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-5d3123003163",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_react-frontend-mobilefrontend-activity-7265737551523557376-yi18",
    },
    {
      image: Week2,
      title: "Month 1, Week 2",
      description:
        "This week, I focused on styling components in React Native, and here's what I achieved in my journey of mobile development.",
      date: "Week 2",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-772caaa47a57",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_reactnative-mobiledevelopment-frontenddeveloper-activity-7268205333209096192-drXP",
    },
    {
      image: Week3,
      title: "Month 1, Week 3",
      description:
        "This week, I designed a clone version of Twitter (X) App, implementing complex UI patterns and user interactions.",
      date: "Week 3",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-68f4b8f2bde6",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_reactnative-mobiledevelopment-frontenddeveloper-activity-7270804972303233024-29Zr",
    },
    {
      image: Week4,
      title: "Month 1, Week 4",
      description:
        "🚀 Wrapping Up Month One of My React Native journey with key learnings and exciting milestones achieved.",
      date: "Week 4",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-dab1e0363b9a",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_mobiledevelopment-reactnative-frontendengineering-activity-7274442777864646657-JZGh",
    },
    {
      image: Week5,
      title: "Month 2, Week 1",
      description:
        "It's been over a month since I started learning React Native, and I'm excited to share my progress and new discoveries.",
      date: "Week 5",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-29d0c566a2fe",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_reactnative-frontenddevelopment-mobileappdevelopment-activity-7276943596975443969-Eet2",
    },
    {
      image: Week6,
      title: "Month 2, Week 2",
      description:
        "🎉 Happy new year and welcome to 2025! I am kicking off this new year by diving deeper into advanced React Native concepts.",
      date: "Week 6",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-9526d17c5068",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_reactnative-mobiledevelopment-frontenddevelopment-activity-7280539918198599681-TlEb",
    },
    {
      image: Week7,
      title: "Month 2, Week 3",
      description:
        "This week I worked mostly with APIs where I dived into making GET requests using the fetch API and handling data efficiently.",
      date: "Week 7",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-9f56f6a57c0a",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_frontenddevelopment-apis-webdevelopment-activity-7283846171935002624-stwH",
    },
    {
      image: Week8,
      title: "Month 2, Week 4",
      description:
        "This week, I focused more on Navigation in React Native. Navigation helps move between screens and creates seamless user...",
      date: "Week 8",
      medium:
        "https://medium.com/@kijewilliams01/my-react-native-journey-b9bede2310a6",
      linkedIn:
        "https://www.linkedin.com/posts/williams-kijeosowo-237749224_reactnative-frontenddevelopment-navigation-activity-7286035301456646144-lr8_",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111] via-black to-black">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="relative pb-10 sm:py-24 lg:px-8">
          <div className="lg:px-0 px-5 text-center">
            <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl lg:text-5xl">
              Articles
            </h1>
            <p className="mt-3 lg:text-lg text-sm lg:leading-8 text-stone-600">
              I'm running a series where I document my journey of learning React
              Native. <br /> I share weekly updates on Medium & LinkedIn. Check
              it out!
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-stone-600 text-center justify-center">
              <Calendar className="h-4 w-4" />
              <span>Weekly Updates • React Native with Expo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="bg-gradient-to-br from-[#111] via-black to-black overflow-hidden px-5 md:px-0 lg:px-0 xl:px-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="lg:h-[500px] lg:w-[650px] relative bg-black backdrop-blur-sm lg:rounded-[30px] rounded-[10px] overflow-hidden border border-stone-800 hover:border-stone-700 transition-all duration-300 hover:shadow-md hover:shadow-[#333] cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden lg:pt-[60px]">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={`${post.title} cover image`}
                    className="w-full  transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:absolute lg:bottom-0 bottom-0 lg:backdrop-blur-xl relative backdrop-blur-sm">
                  <h3 className="lg:text-4xl text-3xl font-light text-white mb-3">
                    {post.title}
                  </h3>
                  <p
                    className="text-[#B6BABB] lg:text-2xl lg:leading-[2rem] mb-6 overflow-hidden text-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {post.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={post.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 lg:px-0 py-2.5 text-white lg:text-lg text-sm font-light group"
                    >
                      <span>Read on Medium</span>
                      <ArrowRight className="h-3 w-3 group-hover:animate-bounce" />
                    </a>
                    <div className="text-white mt-1 text-3xl font-light lg:flex hidden">
                      |
                    </div>
                    <a
                      href={post.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 lg:px-0 py-2.5 text-white text-lg font-light group"
                    >
                      <span>Read on LinkedIn</span>
                      <ArrowRight className="h-3 w-3 group-hover:animate-bounce" />
                    </a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center">
            <p className="text-white text-5xl lg:text-3xl font-light mb-8 text-left">
              Stay updated with my weekly progress as I continue learning React
              Native and building amazing mobile applications.
            </p>
            <div className="flex lg:flex-row gap-4">
              <a
                href="https://medium.com/@kijewilliams01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 lg:px-6 lg:py-4 px-3 py-3 bg-white hover:bg-[#ECE7E1] text-black rounded-lg transition-colors duration-200 text-sm"
              >
                <span>Follow on Medium</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/williams-kijeosowo-237749224"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 lg:px-6 lg:py-4 px-3 py-3 bg-white hover:bg-[#ECE7E1] text-black rounded-lg transition-colors duration-200 text-sm"
              >
                <span>Connect on LinkedIn</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
