const SkillList = () => {
  return (
    <ul className="bg-red-200">
      {["js", "html", "css"].map((skill) => (
        <li>{skill}</li>
      ))}
    </ul>
  );
};
export default SkillList;
