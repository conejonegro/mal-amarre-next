
import "semantic-ui-css/semantic.min.css";
import "@/scss/global.scss";
import Nav from "@/components/navigation";
import LoginContextProvider from "@/context/LoginContextProvider";

export default function App(props) {

  const { Component, pageProps } = props;

  return (
    <>
      <LoginContextProvider>  
          <Nav />
          <Component {...pageProps} />
        </LoginContextProvider> 
     </>
  );
}
