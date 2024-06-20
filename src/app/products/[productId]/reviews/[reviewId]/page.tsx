'use client';

import { notFound } from 'next/navigation';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ProductReviewDetails({ params }: { params: { productId: string; reviewId: string } }) {
  // Return 'not-found' page if reviewId is greater than 100
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }

  const randomNumber = getRandomInt(0, 5);

  if (randomNumber % 2 === 0) {
    throw new Error('Error: Something went wrong');
  }

  return (
    <div>
      Random Number: {randomNumber} <br />
      Review Details for {params.productId} / {params.reviewId}
    </div>
  );
}
