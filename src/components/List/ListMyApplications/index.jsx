import React from 'react'
import { FaMinus } from "react-icons/fa";


export const ListMyApplications = () => {
  return (
    <li>
        <div>
            <h3>José da Silva - Desenvolvedor Full Stack Jr</h3>
            <FaMinus size={32} color="#8490FF" />
        </div>
        <div>
            <p className='paragraph' >Detalhes da candidatura:</p>
            <p>E-mail: josedasilva@email.com</p>
        </div>

    </li>
  )
}
