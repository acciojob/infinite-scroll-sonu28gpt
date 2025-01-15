//your code here!

let ol=document.getElementById('infi-list');
let main=document.querySelector('main');
let cnt=10;
for(let i=0;i<10;i++){
	ol.innerHTML+=`<li>
		item${i+1}
	</li>`;
	}
function render(){
	
	for(let i=cnt;i<cnt+2;i++){
	ol.innerHTML+=`<li>
		item${i+1}
	</li>`;
	}
	cnt=cnt+2;
}
ol.addEventListener('scrollend',()=>{
	render();
})

