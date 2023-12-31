// import Link from 'next/navigation';

import Link from "next/link";

export default function PostMetaTitle({ category, title, date, slug, center }) {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 ${center ? "text-center" : ''}`}>
        {slug ?
          <Link legacyBehavior href={slug}><a>{title}</a></Link>
            :
            <>{title}</>
        }
      </h2>
    </>
  );
}
