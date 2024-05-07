import { Card } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import useTable from '../hook/useTable';
import './styles.css';
import FullScreenLoader from '../components/FullScreenLoader/fullScreenLoader';

function Home() {
  const { products, isLoading, formatPrice } = useTable();
  // Teste para utilizar LocalStorage
  // const teste = window.localStorage.clear('number');
  // const [number, setNumber] = React.useState(teste);

  // const count = () => {
  //   const countNumber = number + 1
  //   window.localStorage.setItem('number', countNumber);
  //   setNumber(countNumber);
  // }

  return (
    <>
      {/* Exemplo utilizando localStorage */}
      {/* <button onClick={count}>Submit</button>
      <h1>{number}</h1> */}
      {isLoading && <FullScreenLoader />}
      <NavBar />
      <section className='container section-main'>
        {products.map((product) => {
          return (
            <Card key={product._id}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/33550/cows-curious-cattle-agriculture.jpg?auto=compress&cs=tinysrgb&w=280" alt="Vacas" />
              <Card.Body>
                <Card.Title>{product.nome}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product.descricao}</Card.Subtitle>
                <div className="d-flex justify-content-between">
                  <Card.Text>Preço: {formatPrice(product.preco)}</Card.Text>
                  <Card.Text>Estoque: {product.estoque}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </section>
    </>
  );
}

export default Home;