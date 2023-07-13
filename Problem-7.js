//Check performance for the task

const starttime = performance.now();

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

const endtime = performance.now();

console.log(`Now this value is : ${endtime - starttime}`);
