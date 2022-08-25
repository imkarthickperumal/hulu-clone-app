import Head from "next/head";
import Header from "../components/Header"
import Nav from "../components/Nav"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      {/* Header  */}
      <Header/>

      {/* NavBar */}
      <Nav/>
      
      {/* Results */}
    </div>
  );
};

export default Home;
