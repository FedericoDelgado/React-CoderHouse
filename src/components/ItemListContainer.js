import './ItemListContainer.css';

function ItemListContainer({greeting}) {
  return (
    <section className='ItemList'>
      <h2>{greeting}</h2>
    </section>
  );
}

export default ItemListContainer;