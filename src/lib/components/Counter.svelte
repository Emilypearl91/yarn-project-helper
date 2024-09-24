<script>
  // number of rows completed
let rowsCompleted = {
  finishedRow: 0
};


  // use arrow function to increase rows completed by 1
const increaseRow = () => {
 rowsCompleted.finishedRow += 1
 // check that rows completed is increased by 1
console.log(rowsCompleted.finishedRow);
  };

  //use arrow function to decrease rows completed by 1
 const decreaseRow = () => {
  if (rowsCompleted.finishedRow >= 1 ) {
rowsCompleted.finishedRow -= 1;
// check that rows completed is decreased by 1
console.log(rowsCompleted.finishedRow);}
  };
  //reset the counter to 0
 const resetCounter = () => {
  rowsCompleted.finishedRow = 0
  // check that rows completed is reset to 0
  console.log('row counter is reset!')
  };
  // arrow function to save rows completed to local storage
  const saveRow = () => {
    // save rowCompleted to local storage
    
    //check that rowCompleted is saved
    console.log('row counter is saved!')
  };
</script>
<section class="w-96 h-96 m-auto my-28 p-2 bg-tertiary-500 rounded text-center">
  <h1 class="h1 text-secondary-500">Rows Completed</h1>
  <div class="flex flex-row justify-center m-4">
    <button on:click={increaseRow} class="btn btn-sm variant-filled-primary">+</button>
    <p class="p-2 h1">{rowsCompleted.finishedRow}</p>
    <button on:click={decreaseRow} class="btn btn-sm variant-filled-primary">-</button>
  </div>
  <div class=" m-2">
    <button on:click={resetCounter} class="btn btn-md variant-filled-primary">reset</button>
    <button on:click={saveRow} class="btn btn-md variant-filled-primary">save</button>
  </div>
</section>