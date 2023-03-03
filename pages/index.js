import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="main grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8 col-span-1">
          <div className="ads bg-white shadow-lg rounded-lg mb-8">
            <h1>ads</h1>
          </div>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            {/* <div className="searchBox bg-white shadow-lg mb-8">
              <form className='searchBox__form'>
                <input type='search'id='search' name='search' className='searchBox__form__input' />
                <button type="submit" id='submit' name='submit' className='searchBox__form__submit'>Search</button> 
              </form>
            </div> */}
            <PostWidget />
            <Categories />
                {/* ads arbitrage */}
                <div className='ads bg-white shadow-lg rounded-lg p-8 pb-4 mb-8'>
                  <h1>Ads</h1>
                </div>
                <div className='ads bg-white shadow-lg rounded-lg p-8 pb-4 mb-8'>
                  <h1>ads</h1>
                </div>
                <div className='ads bg-white shadow-lg rounded-lg p-8 pb-4 mb-8'>
                  <h1>ads</h1>
                </div>
                <div className='ads bg-white shadow-lg rounded-lg p-8 pb-4 mb-8'>
                  <h1>ads</h1>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

