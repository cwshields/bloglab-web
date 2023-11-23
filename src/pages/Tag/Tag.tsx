export default function Tag(props: any) {
  const { name, description } = props[0];

  return (
    <>
      <div>#{name}</div>
      <div>{description}</div>
    </>
  );
}
