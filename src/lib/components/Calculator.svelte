<script>
let total = 0
// function to calculate the total worth of the project
const calculate = () => {
  // amount variable to get time and pay values and multiply 
const amount = document.getElementById('time').valueAsNumber * document.getElementById('pay').valueAsNumber;
// check that amount is correct
console.log(amount);
// gst variable to multiply the amount by 5% to get how much gst to add 
const gst = amount * 0.05;
// check that gst is correct
console.log(gst);
// materials variable to incorporate into the final cost
const materials = document.getElementById('mat').valueAsNumber;
// total value 
total = amount + gst + materials;
// check that total is correct
console.log(total);
};
</script>

<section class="w-96 h-[400 px] m-auto my-28 p-2 bg-tertiary-500 rounded text-center">
  <h1 class="h2 text-secondary-500">Calculate how much you project is worth!</h1>
  <div class="text-center">
  <p class="text-black">Hours it took to make:</p>
  <input type="number"  id="time" class="text-black m-2" value="0">
  <p class="text-black">Pay per hour:</p>
  <input type="number" id="pay" class="text-black m-2" value="0">
  <p class="text-black">Cost of materials:</p>
  <input type="number" id="mat" class="text-black m-2" value="0">
  <p class="text-black">tax is 5%</p>
  </div>
  <button type="submit" class="btn btn-lg variant-filled-primary m-2" on:click={calculate}> submit</button>
  <p class=" h3 text-black">your project is worth: {total}$</p>
</section>