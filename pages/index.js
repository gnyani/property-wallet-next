import Link from "next/link";
import Layout from "../components/layout";

const Index = () => (
  <Layout>
    <Link href="/about">
      <a title="About Page">About Pages</a>
    </Link>{" "}
    <Link href="/faqs">
      <a title="Faq Page">FAQs</a>
    </Link>
    <p>Hello Next.js</p>
  </Layout>
);

export default Index;
