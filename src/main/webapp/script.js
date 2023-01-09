let speed = prompt("Enter Speed :- ");
if(speed == null)
{
	speed = 150;
}
const n=13;
const array=[];
init();
function init()
{
	for(let i=0;i<n;i++)
	{
			array[i] = Math.random();
	}
	showBars();	
}

function play()
{
	const copy=[...array];
	const swaps = bubbleSort(copy);
	animate(swaps);
}
	

function animate(swaps)
{
	if(swaps.length==0)
	{
		showBars();
		return;
	}
	const [i,j] = swaps.shift();
	[array[i],array[j]] =[array[j],array[i]];
	showBars([i,j]);
	setTimeout(function(){
		animate(swaps);
	},speed)
}

function bubbleSort(array)
{
	const swaps=[];
	for(let i=0;i<array.length;i++)
	{
		for(let j=0;j<array.length;j++)
		{
			if(array[i]<array[j])
			{
				swaps.push([i,j]);
				let temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}
	return swaps;
}

function showBars(indices)
{
	container.innerHTML="";
	for(let i=0;i<array.length;i++)
	{
		const bar = document.createElement("div");
		bar.style.height = array[i]*100+"%";
		bar.classList.add("bar");
		if(indices && indices.includes(i))
		{
			bar.style.backgroundColor="red";
		}
		container.appendChild(bar);
	}	
}
