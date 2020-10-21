
// function b() {
//   return new Promise((resove, reject) => {
//     setTimeout(() => {
//       resove(6)
//     }, 1000);
//   })
// }

function b() {
  return 6
}

async function a() {
  console.log(3);
  console.log('a', await b());
  console.log(4);
}

a()
