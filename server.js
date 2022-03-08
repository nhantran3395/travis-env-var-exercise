import 'dotenv/config';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log('Microservices rock!');
    console.log(process.env.UDACITY_PROGRAM);
    await sleep(5000);
  }
}

main();
