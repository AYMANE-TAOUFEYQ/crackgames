import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="recent bg-white shadow-lg p-8 pb-4 mb-8">
      <h3 className="recent__title text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="recent__item flex items-center w-full mb-4">
          <div className="recent__item__image flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height="0"
              width="0"
              unoptimized
              className="recent__item__image--img align-middle"
              src={post.featuredImage.url}
            />
          </div>
          <div className="recent__item__details flex-grow ml-4">
            <Link href={`/post/${post.slug}`} className="recent__item__details__title text-md" key={index}>{post.title}</Link>
            <p className="recent__item__details__date text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
