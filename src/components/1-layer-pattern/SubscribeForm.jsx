import Layers from "./layers";
import { LayerSchema } from "./layer";

const SubscribeForm = () => {
  return (
    <Layers gutter={LayerSchema.large}>
      <Layers gutter={LayerSchema.medium}>
        <h2>Subscribe to NewsLetter</h2>
        <p>
          Subscribe to the newsletter to receive updates about new products and
          other news.
        </p>
      </Layers>

      <Layers gutter={LayerSchema.large}>
        <Layers gutter={LayerSchema.small}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="border" />
        </Layers>

        <Layers gutter={LayerSchema.small}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="border" />
        </Layers>

        <button className="bg-gray-200 px-2 py-1">Subscribe</button>
      </Layers>
    </Layers>
  );
};

export default SubscribeForm;
