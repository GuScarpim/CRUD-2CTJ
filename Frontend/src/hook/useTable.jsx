import { useState, useEffect } from 'react';
import axios from 'axios';

import Form from '../components/Form';
import { Button, Modal } from 'react-bootstrap';

// Este hook personalizado chamado useTable encapsula a lógica relacionada à obtenção, criação, edição e exclusão de produtos, bem como controla a exibição do modal e fornece funções auxiliares para formatar preços.

function useTable() {
  // Define estados para controlar a exibição do modal, título do modal, conteúdo do modal, ação do modal, lista de produtos e estado de carregamento.
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [child, setChild] = useState(<></>);
  const [childAction, setChildAction] = useState(<></>);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Define o endereço base para as requisições HTTP.
  const baseUrl = 'http://localhost:3000';

  // Função para submeter o formulário de edição ou criação de produto.
  const onSubmit = (data, id) => {
    if (id) {
      editProduct(data, id);
    } else {
      createProduct(data);
    }
  };

  // Função assíncrona para obter os produtos da API.
  async function getProducts() {
    setIsLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/produtos`);
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
    } finally {
      setIsLoading(false);
    }
  }

  // Função assíncrona para editar um produto existente.
  async function editProduct(data, id) {
    try {
      await axios.put(`${baseUrl}/produtos/${id}`, data);
      showModal(false);
      getProducts();
    } catch (error) {
      console.error('Erro ao editar produto:', error);
    }
  }

  // Função assíncrona para criar um novo produto.
  async function createProduct(data) {
    setIsLoading(true);
    try {
      await axios.post(`${baseUrl}/produtos`, data);
      getProducts();
      showModal(false);
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    } finally {
      setIsLoading(false);
    }
  }

  // Função assíncrona para excluir um produto existente.
  async function deleteProduct(id) {
    setIsLoading(true);
    try {
      await axios.delete(`${baseUrl}/produtos/${id}`);
      getProducts();
      showModal(false);
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    } finally {
      setIsLoading(false);
    }
  }

  // Função para lidar com a exclusão de um produto, mostrando um modal de confirmação.
  const handleDelete = (id, item) => {
    const children = (
      <ul>
        <li>{item.nome}</li>
        <li>{item.descricao}</li>
        <li>{item.preco}</li>
        <li>{item.estoque}</li>
      </ul>
    );
    setTitle('Você tem certeza que deseja excluir?');
    setChild(children);
    showModal(true);
    setChildAction(
      <Modal.Footer>
        <Button variant="secondary" onClick={() => showModal(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => deleteProduct(id)}>
          Confirmar
        </Button>
      </Modal.Footer>
    );
  };

  // Função para lidar com a edição de um produto, mostrando um modal de edição.
  const handleEdit = (id, item) => {
    const children = (
      <Form
        nome={item.nome}
        descricao={item.descricao}
        estoque={item.estoque}
        preco={item.preco}
        onSubmit={(data) => onSubmit(data, id)}
      />
    );
    setTitle('Editar ' + item.nome);
    setChild(children);
    showModal(true);
  };

  // Função para lidar com a criação de um novo produto, mostrando um modal de criação.
  const handleCreate = () => {
    const children = (
      <Form
        nome=""
        descricao=""
        estoque=""
        preco=""
        onSubmit={(data) => onSubmit(data)}
      />
    );

    setTitle('Cadastrar');
    setChild(children);
    showModal(true);
  };

  // Função para controlar a exibição do modal.
  const showModal = (isTrue) => {
    setChildAction(<></>);
    setShow(isTrue);
  };

  // Função para formatar o preço em moeda brasileira.
  function formatPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  // Chamada do hook useEffect para obter os produtos assim que o componente é montado.
  useEffect(() => {
    getProducts();
  }, []);

  // Retorna um objeto contendo todas as funções e estados que podem ser utilizados por outros componentes.
  return {
    handleEdit,
    onSubmit,
    handleDelete,
    showModal,
    handleCreate,
    formatPrice,
    childAction,
    isLoading,
    products,
    show,
    title,
    child
  };
}

export default useTable;
