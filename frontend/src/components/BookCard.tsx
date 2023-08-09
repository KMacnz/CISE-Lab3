import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = (props: {
    book: {
        _id: "string";
        title: string;
        author: string;
        description: string;
    };
}) => {
  const book = props.book;

  return (
    <div className='card-container'>
      <Image
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        width={300}
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link href={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;