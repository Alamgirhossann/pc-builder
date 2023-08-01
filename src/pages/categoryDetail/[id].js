import { Col, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layout/Layout";

const featuredProductDetail = ({ singleData }) => (
  <>
    <h1
      style={{
        textAlign: "center",
        fontSize: "50px",
        margin: "30px 0px",
      }}
    >
      YOUR SELECTED ITEM
    </h1>
    <Row
      style={{
        marginTop: "80px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
        <Image
          src={singleData?.image}
          alt="product_image"
          width={300}
          height={200}
        />
        <h1 style={{ fontSize: "20px" }}>
          Product Name: {singleData?.productName}
        </h1>
        <p>Category: {singleData?.category}</p>

        <div>
          <p>Price: {singleData?.price}</p>
          <p>Status: {singleData?.status}</p>
          <p>Description: {singleData?.description}</p>
          <p>Key Feature: {singleData?.features}</p>
          <p>Individual Rating: {singleData?.individualRating}</p>
          <p>Average Rating: {singleData?.averageRating}</p>

          <p>Reviews: {singleData?.reviews}</p>
        </div>
      </Col>
    </Row>
  </>
);
export default featuredProductDetail;

featuredProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-server-sand.vercel.app/pcData");
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params.id);
  const res = await fetch(
    `https://pc-builder-server-sand.vercel.app/pcData/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      singleData: data,
    },
  };
};
