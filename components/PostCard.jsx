import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="postcard bg-white shadow-lg pb-12 mb-8">
    <Image
      className="postcard__image" 
      src={post.featuredImage.url} 
      alt="post.author.name"
      height="0"
      width="0"
      unoptimized
      loader={grpahCMSImageLoader}
    />
    
    <div className='postcard__details'>

      <p className='postcard__details__title'>
        {post.title}
      </p>

      <p className='postcard__details__description'>
        {post.excerpt}
      </p>
      
      <div className='postcard__details__bottom'>
        <div className='postcard__details__bottom__detail'>
          <p className='postcard__details__bottom__detail__author'>BY <span className='orange'>{post.author.name}</span></p>
          <p className='postcard__details__bottom__detail__date'>ON <span className='orange'>{moment(post.createdAt).format('MMM DD, YYYY')}</span></p>

        </div>
        <p className='postcard__details__bottom__readMore orange'>Read More...</p>
      </div>
      
    </div>
    <Link href={`/post/${post.slug}`} className='postcard__link'></Link>
  </div>
);

export default PostCard;