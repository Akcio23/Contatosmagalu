import React from 'react'
import Edit from './Edit'
import Delete from './Delete'

interface ContactProps {
    contacts?: {
        email: string,
        departament: string
        position:string,
        number:string,
        _id: string
    }[]
}

const Contacts = (props: ContactProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[70%] justify-items-center m-2">
            {props.contacts && props.contacts.length > 0 ? (
                props.contacts.map((contacts) => (
                    <div key={contacts._id} className=' w-[90%] bg-slate-100 p-1 rounded-lg border-1 border-blue-600 flex flex-col gap-1 text-center' >
                        <h1 className='text-base'>Email: {contacts.email}</h1>
                        <h2 className='text-base'>Departamento: {contacts.departament}</h2>
                        <h2 className='text-base'>Setor: {contacts.position}</h2>
                        <h2 className='text-base'>Telefone: {contacts.number.length > 0 ? (contacts.number):('...')}</h2>
                        <div className='flex flex-row justify-around'>
                        <Edit/>
                        <Delete/>
                        </div>
                        
                    </div>
                ))
            ) : (<p>Nenhum contato encontrado </p>)}

        </div>
    )
}

export default Contacts