// imports
import { useState, useEffect, useRef } from 'react';
import './style.css';
import Trash from '../assets/pngtree-rounded-flat-vector-icon-of-a-red-trash-can-vector-picture-image_9721363.png';
import API from '../services/api.js';

// função geral
function App() {


  // Essa linha define uma variável de estado ('users') para armazenar uma lista de usuários e fornece uma função ('setUsers') para atualizar essa lista no componente.
  const [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function createUsers() {
    await API.post('/user', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    }) 

    getUsers()
  }


  async function deleteUsers(id) {
    await API.delete(`/user/${id}`)


    getUsers()
  }


  // A função 'getUsers' é usada para buscar uma lista de usuários de uma API e atualizar o estado 'users' no componente React. Isso é útil quando você precisa carregar dados de um servidor externo e exibi-los no componente.
  async function getUsers() {
    const response = await API.get('/user');
    setUsers(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' placeholder='Nome' ref={inputName}/>
        <input name='idade' type='number' placeholder='Idade' ref={inputAge}/>
        <input name='email' type='email' placeholder='Email' ref={inputEmail}/>
        <button className='button' type="submit" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <p>Nome: {user.name}</p>
          <p>Idade: {user.age}</p>
          <p>Email: {user.email}</p>
          <button className='delete' onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Delete" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
