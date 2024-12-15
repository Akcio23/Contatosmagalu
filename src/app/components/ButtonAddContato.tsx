'use client'
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';


interface Forms {
  departament: string;
  email: string;
  sector:string;
  number:string
}

const ButtonAddContato = () => {
  const [departament, setDepartament] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [sector, setSector] = useState<string>('')
  const [number, setNumber] = useState<string>('')

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createContat = async (event: React.FormEvent<HTMLFormElement>) => {
    const data:Forms={email,departament,sector,number}
    alert('teste')
    // Logic for saving to the database

  }

  return (
    <div>
      <button onClick={handleShow} className='text-white border-b-2'>Adicionar Contato</button>
      <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={true}

      >
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Contato</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form className='flex flex-col gap-3' onSubmit={createContat}>

            <label htmlFor="email">Email :</label>
            <input type="email"
              placeholder='magalu@magazineluiza.com.br'
              id='email'
              className='border-2 rounded-lg p-1'
              onChange={(e) => { setEmail(e.target.value) }} />

            <label htmlFor="departament">Departamento :</label>
            <input type="text"
              placeholder='CD 300'
              id='departament'
              className='border-2 rounded-lg p-1'
              onChange={(e)=>{setDepartament(e.target.value)}} />


            <label htmlFor="sector">Setor :</label>
            <input type="text"
              placeholder='Posição de entrega CD 300'
              id='sector'
              className='border-2 rounded-lg p-1'
              onChange={(e)=>{setSector(e.target.value)}} />

            <label htmlFor="number">Telefone :</label>
            <input type="text"
              placeholder='(16)12345-6789'
              id='number'
              className='border-2 rounded-lg p-1'
              onChange={(e)=>{setNumber(e.target.value)}} />
              
            <button type='submit' className='bg-green-600 text-white rounded-md p-2'>Salvar contato</button>
          </form>

        </Modal.Body>
      </Modal>

    </div>

  )
}

export default ButtonAddContato