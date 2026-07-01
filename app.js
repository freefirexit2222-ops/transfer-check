const hotels = [
{
name:"SATAYA",
guests:[
"Robert",
"Anna",
"Peter",
"David"
]
},
{
name:"CASA BLUE",
guests:[
"Ahmed",
"Ali",
"Sara",
"Mona"
]
},
{
name:"JAZ LAMAYA",
guests:[
"John",
"Adam",
"Mark"
]
}
];

let present=0;

function loadHotels(){

const container=document.getElementById("hotelList");

container.innerHTML="";

hotels.forEach((hotel,index)=>{

container.innerHTML+=`

<div class="hotel" onclick="openHotel(${index})">

🏨 ${hotel.name}

(${hotel.guests.length})

</div>

`;

});

}

function openHotel(i){

const container=document.getElementById("hotelList");

container.innerHTML=`

<input
class="search"
placeholder="Search passenger..."
onkeyup="searchPassenger(event,${i})">

<div id="guestList"></div>

`;

renderGuests(i);

}

function renderGuests(i){

const guestList=document.getElementById("guestList");

guestList.innerHTML="";

hotels[i].guests.forEach(name=>{

guestList.innerHTML+=`

<div class="passenger">

${name}

<button onclick="check(this)">✅</button>

</div>

`;

});

}

function check(btn){

btn.parentElement.classList.toggle("present");

updateStats();

}

function updateStats(){

present=document.querySelectorAll(".present").length;

document.getElementById("present").innerHTML=present;

}

function searchPassenger(e,i){

const value=e.target.value.toLowerCase();

const guestList=document.getElementById("guestList");

guestList.innerHTML="";

hotels[i].guests
.filter(x=>x.toLowerCase().includes(value))
.forEach(name=>{

guestList.innerHTML+=`

<div class="passenger">

${name}

<button onclick="check(this)">✅</button>

</div>

`;

});

}

loadHotels();
