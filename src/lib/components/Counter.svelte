<script>
  // number of rows completed
let rowsCompleted = 0 ;


  // use arrow function to increase rows completed by 1
const increaseRow = () => {
 rowsCompleted += 1
 // check that rows completed is increased by 1
console.log(rowsCompleted);
  };

  //use arrow function to decrease rows completed by 1
 const decreaseRow = () => {
rowsCompleted -= 1
// check that rows completed is decreased by 1
console.log(rowsCompleted);
  };
  //reset the counter to 0
 const resetCounter = () => {
  rowsCompleted = 0
  // check that rows completed is reset to 0
  console.log('row counter is reset!')
  }
</script>
<section class="w-96 h-96 m-auto my-28 p-2 bg-tertiary-500 rounded text-center">
  <h1 class="h1 text-secondary-500">Rows Completed</h1>
  <div class="flex flex-row justify-center m-4">
    <button on:click={increaseRow} class="btn btn-sm variant-filled-primary">+</button>
    <p class="p-2 h1">{rowsCompleted}</p>
    <button on:click={decreaseRow} class="btn btn-sm variant-filled-primary">-</button>
  </div>
  <div class=" m-2">
    <button on:click={resetCounter} class="btn btn-md variant-filled-primary">reset</button>
  </div>
</section>