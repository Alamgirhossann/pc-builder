import { Card, Col, Row } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBuild } from "@/redux/api/productSlice";
import { useRouter } from "next/router";

const CategoryData = ({ alldata, router }) => {
  const routing = useRouter();
  const dispatch = useDispatch();
  const handleAddProduct = (data) => {
    dispatch(addToBuild(data));
    routing.push("/PcBuilder");
  };
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #Featured Categories Data
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {alldata?.map((data) => (
          <Col key={data.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={data?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="product image"
                />
              }
            >
              <p> Product Name: {data?.productName}</p>

              <div>
                <p>Category: {data?.category}</p>
                <p>Price: {data?.price}</p>
                <p>Status: {data?.status}</p>
              </div>
              <p style={{ fontSize: "15px" }}>Rating: {data?.averageRating}</p>
              {router.pathname === "/category/[categoryParams]" && (
                <Link href={`/categoryDetail/${data?.id}`}>
                  <p
                    style={{
                      fontSize: "15px",
                      marginTop: "20px",
                      backgroundColor: "black",
                      color: "white",
                      width: "100%",
                      padding: "2px 5px ",
                      fontWeight: "300",
                      letterSpacing: "3px",
                      textAlign: "center",
                    }}
                  >
                    Detail <ArrowRightOutlined />
                  </p>
                </Link>
              )}

              {router.pathname === "/builderCategory/[id]" && (
                <button
                  onClick={() => handleAddProduct(data)}
                  className=" bg-black text-white px-1 rounded-md"
                >
                  Add To Builder
                </button>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CategoryData;
