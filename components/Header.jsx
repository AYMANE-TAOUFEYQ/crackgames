import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { getCategories } from '../services';



const Header = () => {
  const [categories, setCategories] = useState([]);

  const location = useRouter();
  const { asPath } = location;
  const splitLocation = asPath.split("/category/");

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="w-full inline-block  py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="container__logo">Crack <span className='container__logo--orange'>Games</span></span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents container__category">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className={`md:float-right mt-2 align-middle ml-4 container__category--link ${splitLocation[1] === category.slug ? 'orange' : 'white'}`}>{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
