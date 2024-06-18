export default function Docs({ params }: { params: { slug: string[] } }) {
  // [[...slug]]/feature/subfeature.tsx
  if (params.slug?.length === 2) {
    return (
      <div>
        Viewing docs for feature {params.slug[0]} and subfeature {params.slug[1]}
      </div>
    );
    // [[...slug]]/feature.tsx
  } else if (params.slug?.length === 1) {
    return <div>Viewing docs for feature {params.slug[0]}</div>;
  }

  // Default for [[...slug]]
  return <div>Docs</div>;
}
