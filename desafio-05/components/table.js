import React from "react";

export default function Table({ items = [] }) {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Título</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
