import Image from "next/image";
import Link from "next/link";

type EventsProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};
const Events = (props: EventsProps) => {
  return (
    <div className=" mt-20 flex-1 p-3">
      <Image
        src={props.image}
        alt={props.title}
        width={275}
        height={183}
        className="max-h-32 w-full rounded-br-lg rounded-tl-lg"
      />
      <div>
        <h3 className="font-zahra text-3xl mt-5 mb-2">{props.title}</h3>
        <p className="text-[18px] text-black font-bold mb-4">
          {props.description}
        </p>
        <Link className="text-lg text-orange-600 font-bold " href={props.link}>
          {props.link} &rarr;
        </Link>
      </div>
    </div>
  );
};
export default Events;
