import Image from "next/image";
import SkillList from "./components/SkillList";
import Block from "./components/Block";
import Story from "./components/Story";
import Events from "./components/Events";

export default function Home() {
  return (
    <div>
      {/* banner */}
      <section className="bg-orange-600 flex px-16 py-2  items-center">
        <div className="w-1/2 p-16 ">
          <h1 className="text-8xl flex flex-col text-white font-zahra">
            Life is a <b>serious</b> Ride.
          </h1>
          <h5 className="block   text-white mr-10 my-7 ">
            We are a cycling community. Rent from locally, from private owners
            and shops. Book your perfect bike now!
          </h5>
        </div>
        <Image
          src="/rebranding_hero.webp"
          width={400}
          height={400}
          alt="banner"
          className="w-[35%] rounded-br-[6rem] rounded-tl-[6rem]"
        />
      </section>
      {/* story */}
      <section className="flex gap-10 text-center p-9">
        {[
          {
            image: "/usp_1.webp",
            title: "Bike rental, made easy",
            description:
              "search and find from 80.000+ bikes in more than 1,000 locations from both local shops & local bike owners, exactly the bike you want.",
          },
          {
            image: "/usp_2.webp",
            title: "Any time, any place",
            description:
              "With our safe and convenient platform, you're able to rent your dream bike in seconds, no matter where you are!",
          },
          {
            image: "/usp_3.webp",
            title: "Our passion for cycling",
            description:
              "No matter where you travel, we want you to make the most of your experience on the perfect bike. Enjoy unlimited mobility, unlimited exploration and unlimited experiences on the perfect ride.",
          },
        ].map((story) => (
          <Story
            image={story.image}
            title={story.title}
            description={story.description}
          />
        ))}
      </section>
      <button className="m-auto block text-lg rounded-2xl">
        Read our story
      </button>
      {/* events */}
      <section
        className="flex  mx-10
      "
      >
        {[
          {
            image: "/brands.webp",
            title: "Test-Ride Brands",
            description:
              "We partner with several new bike brands to offer test rides of their latest models in all four of our ListNRide locations. Bikes from partner brands can be test ridden or rented so you can try them out before making a purchase!",
            link: "Test now",
          },
          {
            image: "/rebranding_hero.webp",
            title: "Events",
            description:
              "We provide bike rentals at many cycling events all around Europe in case you have to travel to participate. This allows you to leave your bike at home, and rent a high quality bike at the event!",
            link: "See the events",
          },
          {
            image: "/giftcard-purchase-2022.webp",
            title: "Gift Card",
            description:
              "With ListNRide gift cards, you can give the gift of exploration and encourage your friends and family to make the most of their travel experiences on the perfect bike. Gift cards can be used for any rental booked through our website.",
            link: "Buy a gift card",
          },
          {
            image: "/stories.webp",
            title: "Blog",
            description:
              "Connect with the ListNRide community through our Stories page, where you can find an abundance of cycling resources.",
            link: "Find out more ",
          },
        ].map((events) => (
          <Events
            image={events.image}
            title={events.title}
            description={events.description}
            link={events.link}
          />
        ))}
      </section>
      {/* discover */}
      <section></section>
    </div>
  );
}
