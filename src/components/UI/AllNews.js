import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllNews = ({ alldata }) => {
  console.log(alldata);

  // if (!filteredData.length) {
  //   <p>loading...</p>;
  // }
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        # DEVICE LISTS
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
                  alt="news image"
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
              <Link href={`/homeProduct/${data?.id}`}>
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
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllNews;
