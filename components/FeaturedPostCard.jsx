import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="post relative h-72">
    <div className="post__image shadow-md" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <p className='post__title text-shadow text-2xl text-center'>{post.title}</p>

    <div className='author'>
      <Image
        unoptimized
        alt={post.author.name}
        height="40"
        width="40"
        className="author__photo drop-shadow-lg rounded-full"
        src={post.author.photo.url}
      />
      <div className='author__name'>
          <p className="author__name--name inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}><span className="post__click cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FeaturedPostCard;

