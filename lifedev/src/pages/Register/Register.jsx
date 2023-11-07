import React, { useState } from 'react'
const [displayName, setDisplayName] = useState('')
const [emailUsiario, setEmailUsuario] = useState('')
const [senhaUsuaroi, setSenhaUsurario] = useState('')
const [confirmaSenha, setConfirmaSenha] = useState('')
const [erro, setErro] = useState('')

const Register = () => {
  return (
    <div>
      <h1>Cadastro de Life Developers</h1>
      <form>
        <label>
          <span>Nome: </span> <input type="text" name="displayName" placeholder="Digite seu Nome de usuário" required />
          
        </label>
        <label>
          <span>Email: </span> <input type="email" name="emailUsiario" placeholder="Digite seu Email" required />
          
        </label>
        <label>
          <span>Senha: </span> <input type="passwords" name="senhaUsuaroi" placeholder="Digite sua senha" required />
          
        </label>
        <label>
          <span>Confirme a senha: </span> <input type="password" name="confirmaSenha" placeholder="Confirme sua senha" required />
          
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register