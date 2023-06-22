import SideNav from "../../components/SideNav/SideNav";

export default function Tag(props: any) {
  const { name, description } = props[0]
  
  return (
    <div className="container">
      <SideNav />
      <div>#{name}</div>
      <div>{description}</div>
    </div>
  );
}
