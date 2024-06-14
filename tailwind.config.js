// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: [],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }
// /** 
// @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       textColor :{
//         skin:{
//           base:'var(--color-text-base)'
//         }
//       },
//       fontFamily:{
//         skin:{
//           base:'var(--font-text-base)'
//         }
//       },
//       backgroundColor:{
//         skin:{
//           fill:'var(--color-fill)'
//         }
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
        },
      },
      fontFamily: {
        skin: {
          base: 'var(--font-text-base)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
        },
      },
    },
  },
  plugins: [],
};
