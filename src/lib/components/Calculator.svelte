<script>
let total = 0
// function to calculate the total worth of the project
const calculate = () => {
  // amount variable to get time and pay values and multiply 
let amount = document.getElementById('time').valueAsNumber * document.getElementById('pay').valueAsNumber;
// check that amount is correct
console.log(amount);
// gst variable to multiply the amount by 5% to get how much gst to add 
let gst = amount * 0.05;
// check that gst is correct
console.log(gst);
// total value 
total = amount + gst;
// check that total is correct
console.log(total);
};
</script>

<section class="w-96 h-96 m-auto my-28 p-2 bg-tertiary-500 rounded text-center">
  <h1 class="h2 text-secondary-500">Calculate how much you project is worth!</h1>
  <div class="text-center">
  <input type="number"  id="time" placeholder="hours it took" class="text-black m-2" value="0">
  <input type="number" id="pay" placeholder="pay per hour" class="text-black m-2" value="0">
  <p class="text-black">tax is 5%</p>
  </div>
  <button type="submit" class="btn btn-lg variant-filled-primary m-2" on:click={calculate}> submit</button>
  <p class=" h3 text-black">your project is worth: {total}$</p>
</section>