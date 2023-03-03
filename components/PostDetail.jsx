import React from 'react';

import moment from 'moment';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return (
              <div>
                <p key={index} className="postDetail__details__paragraph">
                  {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
                </p>

                <div className='postDetail__ads mb-4 relative overflow-hidden shadow-md mb-6'>
                  ads
                </div>
              </div>
        );
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="postDetail bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <div className='postDetail__ads relative overflow-hidden shadow-md'>
          ads
        </div>

        <div className="postDetail__image relative overflow-hidden shadow-md">
          <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover shadow-lg" />
        </div>

        <div className="postDetail__details px-4 lg:px-0">

          <div className="postDetail__details__info flex items-center w-full">
              <p className="postDetail__details__info__author">BY <span className='orange'>{post.author.name}</span></p>
              <p className="postDetail__details__info__date">ON <span className='orange'>{moment(post.createdAt).format('MMM DD, YYYY')}</span></p>
          </div>

          <h1 className="postDetail__details__title">{post.title}</h1>
          
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>

        <div className='postDetail__link'>
          <a className='postDetail__link__Download' target='_blank' id='for download your app' href={post.linkForDownload}>DOWNLOAD</a>
          <a className='postDetail__link__LoadingPage' target='_blank' id='for get your coins' href={post.linkForLoadingPage}>GET YOUR COINS NOW</a>
        </div>
      </div>

    </>
  );
};

export default PostDetail;
