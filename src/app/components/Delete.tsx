'use client'
import React from 'react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const Delete = () => {
    const teste = () =>{
        alert("Isso ira fazer alguma coisa")
    }
  return (
    <div>
         <Button onClick={teste} style={{ backgroundColor: 'red', color: 'white', border: 'none',}}>
                <Image
                    src={"/excluir.png"}
                    width={20}
                    height={10}
                    alt="Excluir.icon"
                />
            </Button>
    </div>
  )
}

export default Delete