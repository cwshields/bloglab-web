import Tag from "../../types/Tag";

export default function TagList(props: any) {
  const { tags } = props;

  const setTagColor = (tag: string) => {
    if (tag === "life") {
      return "red";
    } else if (tag === "philosophy") {
      return "orange";
    } else if (tag === "advice") {
      return "green";
    } else if (tag === "jobs") {
      return "blue";
    } else if (tag === "society") {
      return "magenta";
    } else if (tag === "mystory") {
      return "violet";
    } else if (tag === "inspiration") {
      return "black";
    } else if (tag === "design") {
      return "aqua";
    } else if (tag === "baking") {
      return "brown";
    } else if (tag === "glorious") {
      return "yellow";
    } else if (tag === "selfhelp") {
      return "red";
    } else {
      return "gray"
    }
  };

  const tagsList = tags.map((tag: any) => ({
    value: tag,
    color: setTagColor(tag),
    // description: tagDescription,
  }));

  const classList = "tag ";

  return (
    <>
      {tags.map((tag: any, index: number) => (
        <div key={index} className={classList + tagsList[index].color}>
          #{tag}
        </div>
      ))}
    </>
  );
}
