import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

export const ListMyVagas = () => {
  return (
    <li>
      <div>
        <h3>Desenvolvedor Full Stack Jr</h3>
        <div>
          <span>
            <MdOutlineEdit />
          </span>
          <span>
            <FaRegTrashCan />
          </span>
        </div>
      </div>
    </li>
  );
};
