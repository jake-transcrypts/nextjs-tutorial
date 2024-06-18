import { notFound } from 'next/navigation';

export default function ProductReviewDetails({ params }: { params: { productId: string; reviewId: string } }) {
  // Return 'not-found' page if reviewId is greater than 100
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }

  return (
    <div>
      Review Details for {params.productId} / {params.reviewId}
    </div>
  );
}
