export default function ProductReviewDetails({ params }: { params: { productId: string; reviewId: string } }) {
  return (
    <div>
      Review Details for {params.productId} / {params.reviewId}
    </div>
  );
}
