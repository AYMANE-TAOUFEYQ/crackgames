import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const AdjacentPostCard = ({ post, position }) => (
  <div className='adjacentpostcard bg-white shadow-lg pb-12 mb-8'>
    <Image
      className="adjacentpostcard__image" 
      src={post.featuredImage.url} 
      alt="post.author.name" 
      height="140"
      width="140"
      unoptimized
      loader={grpahCMSImageLoader}
    />

    <div className='adjacentpostcard__details'>

      <p className='adjacentpostcard__details__title'>
        {post.title}
      </p>

      <p className='adjacentpostcard__details__description'>
        {post.excerpt}
      </p>


      <div className='adjacentpostcard__details__bottom'>
        <div className='adjacentpostcard__details__bottom__detail'>
        <p className='postcard__details__bottom__detail__author'>BY <span className='orange'>{post.author.name}</span></p>
          <p className='adjacentpostcard__details__bottom__detail__date'>ON <span className='orange'>{moment(post.createdAt).format('MMM DD, YYYY')}</span></p>
        </div>

        {position === 'LEFT' && (
            <p className='adjacentpostcard__details__bottom__readMore orange'>previous</p>
        )}
        {position === 'RIGHT' && (
            <p className='adjacentpostcard__details__bottom__readMore orange'>next</p>
        )}

      </div>

    </div>

    <Link href={`/post/${post.slug}`} className='adjacentpostcard__link'></Link>


  </div>
);


export default AdjacentPostCard;