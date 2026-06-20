const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
const update = () => {
const target = +counter.getAttribute("data-target");
const current = +counter.innerText;

const speed = target / 80;

if(current < target){
counter.innerText = Math.ceil(current + speed);
setTimeout(update, 20);
}else{
counter.innerText = target;
}
};

update();
});