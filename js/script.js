const btnLink = document.querySelectorAll('.company');
const content = document.querySelectorAll('.job-description');

const phonex = document.getElementById('phonex');
const aiked = document.getElementById('aiked');
const tdk = document.getElementById('tdk');
const fitstan = document.getElementById('fitstan');

const phonexJob = document.getElementById('phonex-job');
const aikedJob = document.getElementById('aiked-job');
const tdkJob = document.getElementById('tdk-job');
const fitstanJob = document.getElementById('fitstan-job');

let currentJob = aikedJob;

phonex.onclick = ()=>{
  currentJob.classList.add('hidden');
  phonexJob.classList.remove('hidden');
  currentJob = phonexJob;
  console.log(currentJob);
}

tdk.onclick = ()=>{
  currentJob.classList.add('hidden');
  tdkJob.classList.remove('hidden');
  currentJob = tdkJob;
}

fitstan.onclick = ()=>{
  currentJob.classList.add('hidden');
  fitstanJob.classList.remove('hidden');
  currentJob = fitstanJob;
}

aiked.onclick = ()=>{
  currentJob.classList.add('hidden');
  aikedJob.classList.remove('hidden');
  currentJob = aikedJob;
}
