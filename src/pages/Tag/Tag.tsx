export default function Tag(props: any) {
  const { name, description } = props[0];

  return (
    <>
      <div className="bloglab-card">
        <h2>#{name}</h2>
      </div>
      <div>
        <div>{description}</div>
      </div>
    </>
  );
}
