/* eslint-disable react/prop-types */
import { Button, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'; // Importe o useForm

import './styles.css';

function MyForm({ nome, descricao, preco, estoque, handleClose, onSubmit }) {
  const { register, handleSubmit, setValue } = useForm(); // Inicialize o useForm

  // Define os valores iniciais dos campos quando o componente é montado
  useEffect(() => {
    setValue('nome', nome);
    setValue('descricao', descricao);
    setValue('preco', preco);
    setValue('estoque', estoque);
  }, [nome, descricao, preco, estoque, setValue]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Nome do produto"
          {...register('nome')} // Associa o campo 'nome' ao React Hook Form
          autoFocus
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          {...register('descricao')} // Associa o campo 'descricao' ao React Hook Form
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Preço</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Preço"
          {...register('preco')} // Associa o campo 'preco' ao React Hook Form
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Estoque</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Quantidade no estoque"
          {...register('estoque')} // Associa o campo 'estoque' ao React Hook Form
        />
      </Form.Group>
      <div className='form-content'>
        <Button variant="secondary" type="submit">
          Cancelar
        </Button>
        <Button variant="primary" type="submit" onClick={handleClose}>
          Salvar
        </Button>
      </div>
    </Form>
  );
}

export default MyForm;
