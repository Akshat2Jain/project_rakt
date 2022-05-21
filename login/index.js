let container = document.getElementById('container')

toggle = () => {
	
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

const btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{
    window.open((href = "./rakt/dash.html"), (target = "blank"));
	console.log("cliclk")
})