import { Redirect } from "@docusaurus/router";

// make default landing page as docs
export default function Home() {
  return (
    <Redirect to="/reactjs-tech-doc/docs/category/reactjs-documentations" />
  );
}
