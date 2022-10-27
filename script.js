let div=document.createElement("div");
div.setAttribute("class", "main");
let formgroup=document.createElement("div");
formgroup.setAttribute("class", "form-group");

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id", "main");
input.setAttribute("placeholder","Enter the ID of Brewerie");
input.style.width="520px";

let button=document.createElement("button"); 
button.setAttribute("type","button");
button.classList.add("btn","btn-warning");
button.innerHTML="Search";
button.style.marginLeft="200px";
button.style.marginTop="20px";
button.addEventListener("click", foo);

var result=document.createElement("div");
result.setAttribute("id","id");
formgroup.append(input,button,result);


div.append(formgroup); 
document.body.append(div);

async function foo(){
    try {
        let id=document.getElementById("main").value;
    console.log(id);
    let res=await fetch(`https://api.openbrewerydb.org/breweries/${id}`);
    let res1= await res.json();
    console.log(res1);
    result.innerHTML=`Name: ${res1.name} <div> type: ${res1.brewery_type}</div>
     <div> address: ${res1.street}, ${res1.city}, ${res1.state}, ${res1.postal_code},${res1.country}. </div>  
    <div> Phone.No: ${res1.phone}</div> <div> Website: ${res1.website_url}</div> `
    } catch (error) {
        console.log(Error)
        
    }

    }
