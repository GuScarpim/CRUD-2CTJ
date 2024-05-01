import { Fragment } from 'react';
import Container from 'react-bootstrap/esm/Container';
import NavBar from '../../components/NavBar';
import Table from '../../components/Table';

function CreateProducts() {
  return (
    <Fragment>
      <Container>
        <NavBar />
        <Table />
      </Container>
    </Fragment>
  );
}

export default CreateProducts;