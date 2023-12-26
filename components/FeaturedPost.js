import Link from 'next/link';
import InfoPost from '@components/InfoPost';

export default function FeaturedPost(props) {
  return (
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link legacyBehavior href={props.slug}>
            <a>
            <img src={process.env.NEXT_PUBLIC_APIURL + props.thumbnail.formats.medium.url} className="rounded-xl w-full mb-4 md:mb-0" />
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            slug={props.slug}
            category={props.category.name}
            date={props.published_at}
            title={props.title}
            shortDescription={props.headline}
            authorAvatar={process.env.NEXT_PUBLIC_APIURL + props.author.avatar.url}
            authorName={props.author.name}
            authorJob={props.author.job}
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
