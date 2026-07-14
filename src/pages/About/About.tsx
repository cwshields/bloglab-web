import FadeIn from "react-fade-in";

export default function About() {
  return (
    <FadeIn delay={100}>
      <div className="jumbotron">
        <h1>About BlogLab</h1>
        <p>
          <em>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </em>
        </p>

        <h2>Lorem Ipsum Dolor</h2>
        <p>
          Nam optio aspernatur blanditiis, sit pariatur itaque suscipit? Neque
          quisquam quam exercitationem ut sapiente laborum unde pariatur
          provident quis hic cum repellat veritatis, itaque velit optio quo,
          placeat consequuntur earum a maiores vitae obcaecati, dolorum
          perspiciatis?
        </p>

        <h2>Sit Amet Consectetur</h2>
        <p>
          Perspiciatis neque ullam nostrum architecto enim animi quidem
          expedita, aut odio cumque laboriosam deleniti consectetur, laudantium
          eveniet natus mollitia, adipisci minima alias tenetur porro nesciunt?
          Repellat voluptatem numquam deserunt facilis ab quidem distinctio.
        </p>
      </div>
    </FadeIn>
  );
}
