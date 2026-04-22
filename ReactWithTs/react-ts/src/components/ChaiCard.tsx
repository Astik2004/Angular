interface ChaiCard {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function ChaiCard({name,price,isSpecial=false}: ChaiCard) {
  return (
   <article>
    <h2>{name}</h2>
    <p>{price}</p>
    {isSpecial && <p>Special Offer!</p>}
   </article>
  );
}