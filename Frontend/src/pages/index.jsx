import { Card } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import './styles.css';

function Home() {
  const products = [];

  return (
    <>
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
                  <Card.Text>Preço: {product.preco}</Card.Text>
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