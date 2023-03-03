import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="author-post p-6 bg-opacity-20">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="120"
        width="120"
        className="author-post__image rounded-full"
        src={author.photo.url}
      />

    <h3 className="author-post__name">{author.name}</h3>
    
    <p className="author-post__bio">{author.bio}</p>
  </div>
);

export default Author;
