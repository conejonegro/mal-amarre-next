
import "semantic-ui-css/semantic.min.css";
import "@/scss/global.scss";

import Nav from "@/components/navigation";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />;
    </div>
  )
}
