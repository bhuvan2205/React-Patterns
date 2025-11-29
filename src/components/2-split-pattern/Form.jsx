import React from "react";
import Layers from "../1-layer-pattern/layers";
import { LayerSchema } from "../1-layer-pattern/layer";

const Form = () => {
  return (
    <form>
      <Layers gutter={LayerSchema.small}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="border" />
      </Layers>

      <Layers gutter={LayerSchema.small}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" className="border" />
      </Layers>

      <button className="bg-gray-200 px-2 py-1">Submit</button>
    </form>
  );
};

export default Form;
