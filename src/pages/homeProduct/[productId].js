import { Col, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layout/Layout";

const productDetailPage = ({ singleData }) => (
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
          <p>Rating: {singleData?.averageRating}</p>
        </div>
      </Col>
    </Row>
  </>
);
export default productDetailPage;

productDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/pcData");
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params.productId);
  const res = await fetch(`http://localhost:5000/pcData/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      singleData: data,
    },
  };
};
