import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { magic } from "@/lib/magic";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserDetails = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (!isLoggedIn) {
        router.replace("/login");
        return;
      }
      const userData = await magic.user.getMetadata();
      setUser(userData);
    };
    getUserDetails();
  }, []);
  return (
    <Layout user={user}>
      <Component {...pageProps} />
    </Layout>
  );
}
