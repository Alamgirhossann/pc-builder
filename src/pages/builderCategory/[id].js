/* eslint-disable react-hooks/rules-of-hooks */

import RootLayout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import CategoryData from "@/components/UI/CategoryData";

const categoryProductDetail = ({ data }) => {
  const router = useRouter();
  console.log(router);
  return <CategoryData alldata={data} router={router} />;
};
export default categoryProductDetail;

categoryProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-sand.vercel.app/filter/${params.id}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data: data,
    },
  };
};
