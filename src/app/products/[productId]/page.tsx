import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

// This function is used to dynamically generate metadata for the page
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  // Can make a async call to a database or an API to get the metadata
  const description = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Description for product ${params.productId}`);
    }, 3000);
  });

  return {
    title: `Product ${params.productId}`,
    description,
  };
};

export default function ProductDetails({ params }: Props) {
  return <div>Details about product {params.productId}</div>;
}
