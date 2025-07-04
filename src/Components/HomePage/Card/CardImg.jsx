export function CardImg({book}) {
  return (
    <div className="w-full h-48 overflow-hidden rounded-lg mb-3">
      <img
        src={book.imageURL}
        alt={book.title}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
