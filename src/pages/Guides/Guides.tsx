import FadeIn from "react-fade-in";

export default function Guides() {
  return (
    <FadeIn delay={100}>
      <div className="jumbotron">
        <h1 className="fs-3xl s:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-4 mt-0">
          Curated Developer Guides
        </h1>

        <p>
          This is a list of high quality guides on specific topics gathered for
          your learning pleasure. This list of community tutorials is an
          experimental directory{" "}
          <strong>starting with only CSS, Git, and a bit of JavaScript</strong>,
          but will be expanded to cover more overall topics. Enjoy diving in!
        </p>

        <p>
          If you want a post of yours featured here, make sure it is{" "}
          <em>high quality</em> and clearly includes all relevant keywords in
          the title and the first paragraph of the post. We want to maximize for
          readability, even when skimming.
        </p>

        <hr />

        <h2>
          <a id="css-guides" href="#css-guides" aria-label='css-guides'> </a>
          CSS Guides
        </h2>

        <h3>
          <a id="css-align-guides" href="#css-align-guides" aria-label='css-align-guides'> </a>
          <a href="https://dev.to/css-align-guides">CSS Align Guides</a>
        </h3>

        <p>
          Oh my, one of the trickier topics! If you're still confused after
          reading these great guides, it's not your fault, it's CSS.
        </p>

        <h3>
          <a id="css-animation-guides" href="#css-animation-guides" aria-label='css-animation-guides'> </a>
          <a href="https://dev.to/css-animation-guides">CSS Animation Guides</a>
        </h3>

        <p>
          Animation in CSS is one of the most powerful things you can master for
          excellent UX development. Just don't overdo it!
        </p>

        <h3>
          <a id="css-background-guides" href="#css-background-guides"> </a>
          <a href="https://dev.to/css-background-guides">
            CSS Background Guides
          </a>
        </h3>

        <p>
          CSS Backgrounds can be a great way to add a splash of color to your
          pages, but there are a lot of options!
        </p>

        <h3>
          <a id="css-border-guides" href="#css-border-guides"> </a>
          <a href="https://dev.to/css-border-guides">CSS Border Guides</a>
        </h3>

        <p>
          Understanding all things border from <code>border-style</code> to{" "}
          <code>border-size</code> and using them all together.
        </p>

        <h3>
          <a id="css-box-sizing-guides" href="#css-box-sizing-guides"> </a>
          <a href="https://dev.to/css-box-sizing-guides">
            CSS Box Sizing Guides
          </a>
        </h3>

        <p>
          Box sizing can be a challenging overall topic. Fear not, however! All
          your questions will be answered in these great posts!
        </p>

        <h3>
          <a id="css-display-guides" href="#css-display-guides"> </a>
          <a href="https://dev.to/css-display-guides">CSS Display Guides</a>
        </h3>

        <p>
          Remember that different HTML elements come with default display
          properties! Please find all your display needs below.
        </p>

        <h3>
          <a id="css-flex-guides" href="#css-flex-guides"> </a>
          <a href="https://dev.to/css-flex-guides">CSS Flex Guides</a>
        </h3>

        <p>
          Flexbox and flex properties are incredibly useful and can be mixed
          with other CSS layout approaches!
        </p>

        <h3>
          <a id="css-filter-guides" href="#css-filter-guides"> </a>
          <a href="https://dev.to/css-filter-guides">CSS Filter Guides</a>
        </h3>

        <p>
          There is a lot you can do with CSS filters, from blurs to colors and
          more. It is worth understanding the possibilities here!
        </p>

        <h3>
          <a id="css-font-guides" href="#css-font-guides"> </a>
          <a href="https://dev.to/css-font-guides">CSS Font Guides</a>
        </h3>

        <p>
          Understanding <code>font-family</code>, <code>font-size</code> and
          more. Please leave a comment if you find any posts here helpful. These
          guides also include tips on loading fonts and handling fonts in
          general.
        </p>

        <h3>
          <a id="css-grid-guides" href="#css-grid-guides"> </a>
          <a href="https://dev.to/css-grid-guides">CSS Grid Guides</a>
        </h3>

        <p>
          Grid is a powerful concept. Read these guides carefully, there is a
          lot to learn!
        </p>

        <h3>
          <a id="css-margin-guides" href="#css-margin-guides"> </a>
          <a href="https://dev.to/css-margin-guides">CSS Margin Guides</a>
        </h3>

        <p>
          There is no right or wrong way to do CSS margins, but there are a lot
          of iffy ways!
        </p>

        <h3>
          <a id="css-opacity-guides" href="#css-opacity-guides"> </a>
          <a href="https://dev.to/css-opacity-guides">CSS Opacity Guides</a>
        </h3>

        <p>
          Let's be transparent: Opacity is an important part of a CSS tookkit.
        </p>

        <h3>
          <a id="css-outline-guides" href="#css-outline-guides"> </a>
          <a href="https://dev.to/css-outline-guides">CSS Outline Guides</a>
        </h3>

        <p>
          A CSS Outline is drawn <em>outside</em> the borders of the CSS. These
          are tricky concepts, please read the guides thoroughly.
        </p>

        <h3>
          <a id="css-overflow-guides" href="#css-overflow-guides"> </a>
          <a href="https://dev.to/css-overflow-guides">CSS Overflow Guides</a>
        </h3>

        <p>
          CSS Overflow will determine whether content clips or scrolls, etc.
          It's important to get right when you're not sure the size of the
          content you're dealing with.
        </p>

        <h3>
          <a id="css-padding-guides" href="#css-padding-guides"> </a>
          <a href="https://dev.to/css-padding-guides">CSS Padding Guides</a>
        </h3>

        <p>There's a lot of nuance in effective CSS padding.</p>
      </div>
    </FadeIn>
  );
}
