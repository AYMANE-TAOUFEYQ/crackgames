import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getCategories } from '../services';

const Categories = () => {
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
    <div className="category bg-white shadow-lg rounded-lg p-8 pb-4 mb-8">
      <h3 className="category__title text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link className='category__link' key={index} href={`/category/${category.slug}`}>
          <span className={`category__link__span cursor-pointer ${splitLocation[1] === category.slug ? 'orange' : 'black'} block pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
