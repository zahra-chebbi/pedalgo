import Image from "next/image";

type StoryProps = {
  image: string;
  title: string;
  description: string;
};
const Story = (props: StoryProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Image
        src={props.image}
        alt={props.title}
        width={200}
        height={200}
        className=""
      />
      <div>
        <h3 className="font-zahra text-3xl ">{props.title}</h3>
        <p className="text-[18px] text-black font-bold my-4 ">
          {props.description}
        </p>
      </div>
    </div>
  );
};
export default Story;
