
// ==========================================
// generate reviews==========================
// ==========================================
// for (let i=1; i<15; i++){
//   console.log(
//     `{
//       guest: ${i},
//       score: 5,
//       spot: ${i+2},
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
//     },{
//       guest: ${i},
//       score: 4,
//       spot: ${i+3},
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       content: "Really enjoyed my stay here"
//     },
//     {
//       guest: ${i},
//       score: 5,
//       spot: ${i+4},
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       content: "Top of the line experience. Lovely living areas!"
//     },`
//   )
// }

// ==========================================
// generate bookings ======================================
// ==========================================
function randomInRange(low,high){
  let x = high-low+1;
  return (Math.floor(Math.random() * x)) + low;
}
function getRandomDateAdjusts(){
  let inAdj = randomInRange(1,14);
  let outAdj = randomInRange(inAdj+1,inAdj+12)
  let mAdj = randomInRange(1,11);
  return [mAdj, inAdj,outAdj]
}
for (let i=1; i<17; i++){
  let b1 = getRandomDateAdjusts();
  let b2 = getRandomDateAdjusts();
  let b3 = getRandomDateAdjusts();
  console.log(
    `{
      guest: ${i},
      spot: ${i+2},
      checkIn: new Date(2020, ${b1[0]}, ${b1[1]}),
      checkOut: new Date(2020, ${b1[0]}, ${b1[2]}),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      guest: ${i},
      spot: ${i+3},
      checkIn: new Date(2020, ${b2[0]}, ${b2[1]}),
      checkOut: new Date(2020, ${b2[0]}, ${b2[2]}),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      guest: ${i},
      spot: ${i+4},
      checkIn: new Date(2020, ${b3[0]}, ${b3[1]}),
      checkOut: new Date(2020, ${b3[0]}, ${b3[2]}),
      createdAt: new Date(),
      updatedAt: new Date()
    },`
  )
}