let feedback = [

{
id:1,
rating:5,
message:"😊 You are a good leader.",
date:"10 Jun 2026"
},

{
id:2,
rating:4,
message:"👍 Improve communication skills.",
date:"12 Jun 2026"
},

{
id:3,
rating:5,
message:"⭐ Great teamwork!",
date:"18 Jun 2026"
},

{
id:4,
rating:3,
message:"Need more confidence.",
date:"20 Jun 2026"
}

];

const container=document.getElementById("feedbackContainer");
const search=document.getElementById("searchBox");
const filter=document.getElementById("ratingFilter");

function stars(rating){

let star="";

for(let i=1;i<=5;i++){

star+=i<=rating?"★":"☆";

}

return star;

}

function display(data){

container.innerHTML="";

if(data.length==0){

container.innerHTML="<div class='empty'>No Feedback Found</div>";
return;

}

data.forEach(item=>{

container.innerHTML+=`

<div class="card">

<div class="rating">

${stars(item.rating)}

</div>

<div class="message">

${item.message}

</div>

<div class="date">

${item.date}

</div>

<button class="delete" onclick="remove(${item.id})">

Delete

</button>

</div>

`;

});

}

function remove(id){

feedback=feedback.filter(f=>f.id!=id);

applyFilters();

}

function applyFilters(){

let data=[...feedback];

let text=search.value.toLowerCase();

data=data.filter(f=>f.message.toLowerCase().includes(text));

if(filter.value!="all"){

data=data.filter(f=>f.rating==filter.value);

}

display(data);

}

search.addEventListener("keyup",applyFilters);

filter.addEventListener("change",applyFilters);

display(feedback);