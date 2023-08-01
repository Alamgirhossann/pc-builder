import Head from "next/head";
import AllNews from "@/components/UI/AllNews";
import dynamic from "next/dynamic";
import RootLayout from "@/components/Layout/Layout";

const Home = ({ alldata }) => {
  const BannerComponent = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>PC BUILDER</title>
        <meta name="description" content="This is pc builder made by next-js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerComponent />
      <AllNews alldata={alldata} />
    </>
  );
};
export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-server-sand.vercel.app/pcData");
  const data = await res.json();
  const showRandomData = (dataArray, numberOfItemsToShow) => {
    const selectedData = [];
    while (selectedData.length < numberOfItemsToShow) {
      const randomIndex = Math.floor(Math.random() * dataArray.length);
      if (!selectedData.includes(randomIndex)) {
        selectedData.push(randomIndex);
      }
    }
    const randomDataItems = selectedData.map((index) => dataArray[index]);
    return randomDataItems;
  };

  const filteredData = showRandomData(data, 6);
  return {
    props: {
      alldata: filteredData,
    },
    // revalidate: 10,
  };
};
