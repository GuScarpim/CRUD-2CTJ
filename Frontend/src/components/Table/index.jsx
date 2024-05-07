/* eslint-disable react/no-children-prop */
import { Fragment } from 'react';

import Modal from '../Modal';
import { IoMdCreate } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import Table from 'react-bootstrap/Table';

import './styles.css';
import useTable from '../../hook/useTable';
import { Button } from 'react-bootstrap';
import FullScreenLoader from '../FullScreenLoader/fullScreenLoader';

function MyTable() {
  const {
    handleEdit,
    handleDelete,
    showModal,
    handleCreate,
    formatPrice,
    isLoading,
    childAction,
    products,
    show,
    title,
    child
  } = useTable();

  return (
    <Fragment>
      {isLoading && <FullScreenLoader />}
      <Modal show={show} handleClose={() => showModal(false)} children={child} title={title} childAction={childAction} />
      <Button variant="primary" onClick={handleCreate} className='button-new'>
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
          {/* Listando todos os produtos na tabela */}
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.descricao}</td>
                <td>{formatPrice(item.preco)}</td>
                <td>{item.estoque}</td>
                <td className='content-actions'>
                  <IoMdCreate onClick={() => handleEdit(item._id, item)} />
                  <MdDelete onClick={() => handleDelete(item._id, item)} />
                </td>
              </tr>);
          })}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default MyTable;