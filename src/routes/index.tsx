import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import styles from './index.module.css';
// const materias = [
//   {
//     nombre: 'Materia A',
//     prerequisitos: []
//   },
//   {
//     nombre: 'Materia B',
//     prerequisitos: ['Materia A']
//   },
//   {
//     nombre: 'Materia C',
//     prerequisitos: ['Materia B']
//   }
// ];

// const Materia = component$<{nombre:string}>(({ nombre }) => {
//   return (
//     <div>
//       <p>{nombre}</p>
//     </div>
//   )}
//   );

//   const FlechaRequisitosPrevios = component$ (() => (
//     <svg>
//       <line x1="0" y1="0" x2="50" y2="50" stroke="black" />
//     </svg>
//   ));

export default component$(() => {
  return (
    <>
    <div class='section'>
      <div class="container">
      <h1>Carreras</h1>
      <p >En esta sección podrás encontrar las carreras universitarias y las materias de esta.</p>
      </div>
    </div>
    <div class="container">
      cargando...
    </div>
       {/* <table>
    <thead>
      <tr>
        <th>Semestre 1</th>
        <th>Semestre 2</th>
        <th>Semestre 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><Materia nombre={materias[0].nombre} /></td>
        <td><Materia nombre={materias[1].nombre} /><FlechaRequisitosPrevios /></td>
        <td><Materia nombre={materias[2].nombre} /><FlechaRequisitosPrevios /></td>
      </tr>
    </tbody>
  </table> */}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
