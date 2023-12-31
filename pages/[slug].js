import Layout from "@components/Layout";
import Container from "@components/Container";
import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";
import Head from "next/head";
import { formatDate } from "utils/utils";

// ADDING REACTMARKDOWN
import ReactMarkdown from "react-markdown";

// ADDING FUNCTION FETCHING
export async function getServerSideProps({ params: { slug } }) {
  const reqDetail = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/posts?slug=" + slug
  );
  const single = await reqDetail.json();

  // ADDING LOGIC FOR NOT FOUND PAGE
  if (!single.length)
    return {
      notFound: true,
    };

  return {
    props: {
      single: single.length > 0 ? single[0] : {},
    },
  };
}

export default function Detail({
  // ADDING DISTRUCTURING DETAIL POST
  single: {
    title,
    slug,
    category,
    published_at,
    author,
    thumbnail,
    headline,
    content,
  },
}) {
  return (
    <Layout>
      <Head>
        <title>Detail &mdash; Epictetus</title>
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <PostMetaTitle
            slug={slug}
            category={category.name}
            date={formatDate(published_at)}
            title={title}
            center
          />
          <PostAuthor
            authorName={author.name}
            authorJob={author.job}
            authorAvatar={process.env.NEXT_PUBLIC_APIURL + author.avatar.url}
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <img
            src={process.env.NEXT_PUBLIC_APIURL + thumbnail.formats.large.url}
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <p className="text-xl mb-4">{headline}</p>
          <ReactMarkdown className="mb-4">{content}</ReactMarkdown>
        </div>
      </Container>
    </Layout>
  );
}
