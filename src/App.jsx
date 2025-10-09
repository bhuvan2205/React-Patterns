import Layout from "./components/layout";
import ScreenSplitter from "./components/screen-splitter";

const LeftSide = () => {
  return (
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
      numquam temporibus dolore? Saepe id cumque eos eligendi similique odio
      eveniet quisquam quia enim dolores eum qui et natus earum minus sunt
      magnam explicabo, adipisci eius numquam recusandae dicta! Laboriosam saepe
      dolores officiis quidem fugit veritatis id voluptatem? Unde molestias
      error, sed aut temporibus, obcaecati eos ipsam similique possimus nisi
      magni excepturi quae aperiam atque! Ex commodi corrupti quas ipsum saepe
      quisquam. Soluta voluptatum omnis tempora quam molestiae voluptas
      temporibus tempore laudantium nam rerum, ab sint. Fugiat autem sed odit
      minima voluptas aspernatur illo facere? Sapiente soluta, tempora totam
      dolore perferendis veritatis aut cupiditate, libero obcaecati itaque magni
      consequuntur eius ratione.
    </div>
  );
};

const RightSide = () => {
  return (
    <div>
      <h1 className="text-3xl text-red-300">Right Side</h1>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, voluptates
      dolor laborum necessitatibus, voluptatem sunt ipsum aliquid magnam ullam
      officiis numquam ratione velit amet nemo ex quaerat vel est omnis. Modi
      totam repudiandae nam placeat, ad sint accusantium unde earum quos nobis
      magni eligendi voluptas obcaecati sapiente expedita pariatur maxime
      deserunt? Tempora iusto distinctio quisquam laboriosam ducimus autem quod
      ex ipsa minus consequuntur fugit similique ab itaque, adipisci doloremque
      aspernatur accusantium ea molestiae dolor blanditiis omnis quibusdam
      sequi! Amet, temporibus? Nobis modi, doloribus libero aliquid molestias,
      doloremque dolor tempore qui, ipsum accusamus harum nostrum ducimus
      accusantium tenetur repellat dolorum quia.
    </div>
  );
};

function App() {
  return (
    <>
      <Layout>
        <ScreenSplitter Left={LeftSide} Right={RightSide} />
      </Layout>
    </>
  );
}

export default App;
