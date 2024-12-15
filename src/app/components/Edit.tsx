'use client'
import React from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';

const Edit = () => {
    const teste = () =>{
        alert("isso irá fazer alguma coisa!")
    }
  return (
    <div>
         <Button onClick={teste} style={{ backgroundColor: '#FFA500', color: 'white', border: 'none',}}>
        <Image
          src={"/escrever.png"}
          width={20}
          height={15}
          alt="Editar"
        />
      </Button>
    </div>
  )
}

export default Edit