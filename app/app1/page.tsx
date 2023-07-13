import Image from "next/image";
import SkillList from "../components/SkillList";
import Block from "../components/Block";

export default function Home() {
  return (
    <div>
      <Block />
      <h1>hello app1</h1>
      <SkillList />
      <Block></Block>
    </div>
  );
}
