import { Fragment } from 'react';

import Modal from '../Modal';

import { Button } from 'react-bootstrap';
import { IoMdCreate } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import Table from 'react-bootstrap/Table';

import './styles.css';

function MyTable() {
  return (
    <Fragment>
      <Modal />
      <Button variant="primary" onClick={() => {}} className='button-new'>
        Cadastrar
      </Button>
      <Table striped bordered hover variant="dark" className='table-container'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descricão</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>Descricão</td>
            <td>Preço</td>
            <td>Estoque</td>
            <td className='content-actions'>
              <IoMdCreate onClick={() => {}} />
              <MdDelete onClick={() => {}} />
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
}

export default MyTable;