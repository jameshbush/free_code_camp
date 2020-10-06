import React from "react";
import { initializeTestRunner } from "../../utils/scripts/injectFCCTests";
import "./styles.scss";

class TechnicalDocumentation extends React.Component {
  componentDidMount = () => initializeTestRunner();

  render() {
    return (
      <div className="flex-container">
        <p id="test-info">(Page width must be {">"} 865px for tests to pass)</p>

        <div id="Topic_0"></div>
        <nav id="navbar" className="docs-navbar">
          <header>
            <h5>Topics</h5>
          </header>
          <a href="#Topic_1" className="nav-link">
            Topic 1
          </a>
          <a href="#Topic_2" className="nav-link">
            Topic 2
          </a>
          <a href="#Topic_3" className="nav-link">
            Topic 3
          </a>
          <a href="#Topic_4" className="nav-link">
            Topic 4
          </a>
          <a href="#Topic_5" className="nav-link">
            Topic 5
          </a>
        </nav>
        <main id="main-doc">
          <section id="Topic_1" className="main-section">
            <header className="sub-header">Topic 1</header>

            <p className="lorem-ipsum">
              Rerum unde omnis est voluptatum ipsam unde. Ut aliquid numquam itaque expedita. Blanditiis odio totam quos
              omnis ab ab quibusdam qui. Necessitatibus voluptate et id ad rerum ullam magnam consequatur. Nihil sit
              quaerat officiis. Rerum minima harum quo totam et doloremque dolorem.
            </p>
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
            </ul>
            <code>console.log("Hello, World!")</code>
            <p className="lorem-ipsum">
              Est et nisi maiores voluptates architecto blanditiis aut aperiam. Repudiandae aperiam velit consequatur
              ut. Labore incidunt deleniti minus fuga similique quo nulla.
            </p>
          </section>
          <section id="Topic_2" className="main-section">
            <header className="sub-header">Topic 2</header>

            <p className="lorem-ipsum">
              Rerum itaque et sed soluta in cumque earum iure. Voluptates similique dolore dolores vitae autem odit
              aspernatur perferendis. Corporis cumque id quo ea cupiditate ex. Quidem necessitatibus error et qui et
              dolorum sed. Quia vitae soluta voluptatem ut. Exercitationem velit non ut et eveniet ipsam.
            </p>
            <code>console.log("Hello, World!")</code>
            <p className="lorem-ipsum">
              Rerum quis natus non esse labore sint aut. Quia iure aliquid vitae dolores totam. Voluptas iste
              repudiandae natus. Officiis veritatis consequatur tempore et.
            </p>
          </section>
          <section id="Topic_3" className="main-section">
            <header className="sub-header">Topic 3</header>

            <p className="lorem-ipsum">
              Dolorem optio dolores fugit nostrum illo dolor. Error itaque et quaerat quidem voluptatum delectus quia
              vero. Placeat id ratione non pariatur qui in. Labore reprehenderit vitae ut dolor eum modi aut. Est eaque
              mollitia porro sapiente reprehenderit voluptatem deleniti.
            </p>
            <code>console.log("Hello, World!")</code>
            <p className="lorem-ipsum">
              Proin vitae mauris justo. Fusce ac elementum est. Donec mattis lacus lacus, quis egestas leo scelerisque
              nec. Quisque blandit volutpat tincidunt. Integer tincidunt condimentum sem, eget gravida velit ullamcorper
              eget. Donec vel augue at sem aliquam vulputate. Vestibulum at magna semper nibh placerat venenatis.
              Curabitur ultricies diam ut euismod congue. Duis porttitor nulla eros, id vehicula enim varius ut. Duis
              tristique interdum nisi eu finibus. Etiam efficitur posuere augue nec aliquet.
            </p>
          </section>
          <section id="Topic_4" className="main-section">
            <header className="sub-header">Topic 4</header>

            <p className="lorem-ipsum">
              Aliquam porttitor felis quis risus vehicula, ut tempor augue suscipit. Pellentesque sit amet ex a quam
              mollis ultrices. Pellentesque tempor interdum mauris, ut fermentum lacus sagittis in. In et sodales
              tortor, interdum aliquam elit. Cras vitae ligula ac risus condimentum auctor vehicula eleifend neque.
              Praesent vulputate leo id ante finibus tempus. In tempus mi eget neque varius mollis. Mauris id lacus
              consequat, bibendum ipsum eget, faucibus magna. Donec feugiat diam ut dolor tincidunt, id commodo erat
              efficitur. Aliquam euismod pharetra eros, ut efficitur dolor pellentesque tincidunt. Donec vitae libero et
              risus porta ornare vitae non ex. Praesent nec dictum ligula. Nam fringilla rutrum placerat. Nam nibh
              risus, vulputate eu tempor et, venenatis eget nulla. Quisque posuere lacus et lectus consequat fermentum.
            </p>
            <code>console.log("Hello, World!")</code>
            <p className="lorem-ipsum">
              Phasellus metus enim, sollicitudin vel faucibus vitae, ullamcorper quis tellus. Fusce a lectus sed leo
              finibus mollis. Cras ante velit, dapibus ac ultricies ut, ullamcorper id arcu. Nullam egestas condimentum
              maximus. Nam ac auctor purus. Ut sodales orci aliquet, laoreet quam id, tempus diam. Fusce eget libero
              vulputate nisi hendrerit hendrerit. Ut rhoncus urna tellus, sit amet convallis nulla mattis et. Cras
              accumsan faucibus nibh, id tincidunt arcu laoreet vitae. Etiam sit amet dui eros. Nam eu ipsum nec tortor
              rhoncus congue. Nullam dictum et tortor sed efficitur.
            </p>
          </section>
          <section id="Topic_5" className="main-section">
            <header className="sub-header">Topic 5</header>

            <p className="lorem-ipsum">
              Phasellus at tortor arcu. Nam lorem lectus, hendrerit vel vehicula in, semper et neque. Donec urna magna,
              suscipit in mattis sit amet, bibendum convallis risus. Curabitur ullamcorper tristique ligula. Suspendisse
              sit amet arcu at metus venenatis euismod. Curabitur interdum massa arcu, ac mollis lectus tincidunt
              tempus. Etiam vitae sapien rutrum, sagittis elit id, ultricies justo. Nulla eget elit ut purus porta
              egestas sit amet eget tortor. Aliquam ut tellus id eros accumsan posuere.
            </p>
            <code>console.log("Hello, World!")</code>
            <p className="lorem-ipsum">
              Phasellus vestibulum sit amet est in rhoncus. Pellentesque auctor bibendum massa, vitae facilisis nulla
              mattis non. Vivamus mollis euismod nisi, eget aliquam lacus suscipit vel. Pellentesque sagittis metus
              sapien, vitae fermentum nulla lobortis et. Nam sit amet dictum risus. Quisque sem orci, pellentesque non
              justo mollis, tincidunt lacinia mi. Etiam lobortis, libero vitae tincidunt semper, quam neque tincidunt
              felis, in commodo dui diam non augue. Cras gravida quam sed orci molestie, a elementum neque ornare. Fusce
              fringilla augue eu orci placerat, vel rhoncus neque finibus. Mauris vitae ligula in est porta auctor at at
              tellus. Morbi arcu dui, malesuada in iaculis sit amet, elementum ac orci. Morbi semper, sem vulputate
              varius malesuada, nibh mi ornare felis, ut porttitor nisi libero vitae nisi. Duis faucibus iaculis dui eu
              semper. Aenean sodales turpis ante, in lobortis dui laoreet non. Mauris pulvinar quis mi bibendum
              efficitur. Nulla iaculis consectetur erat, ac rutrum risus interdum nec.
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export { TechnicalDocumentation };
