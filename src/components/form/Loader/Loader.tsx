import { LoaderItem, LoaderWrapper } from "./styles";

const Loader = () => (
  <LoaderWrapper>
    {[...Array(3)].map((_, index) => (
      <LoaderItem key={window.crypto.randomUUID()} index={index} />
    ))}
  </LoaderWrapper>
);

export default Loader;
