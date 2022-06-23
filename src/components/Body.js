import './Body.css';
import Card from './Card';

function Body() {
  return (
    <section className='cuerpo'>
        <Card product='Gpu' price='$250' img=''/>
        <Card product='Monitor' price='$120'/>
        <Card product='Gabinete' price='$88'/>
        <Card product='Silla Gammer' price='$210'/>
    </section>
  );
}

export default Body;
