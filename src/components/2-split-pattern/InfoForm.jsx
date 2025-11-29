import { LayerSchema } from "../1-layer-pattern/layer";
import Layers from "../1-layer-pattern/layers";
import Form from "./Form";
import Split from "./split";

const InfoForm = () => {
  return (
    <Split fraction="1/2">
      <Layers gutter={LayerSchema.medium}>
        <h3>General Information</h3>
        <span>All the information you provide via this form public.</span>
      </Layers>
      <Form />
    </Split>
  );
};

export default InfoForm;
