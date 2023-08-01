import { GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://pc-builder-server-sand.vercel.app/",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
