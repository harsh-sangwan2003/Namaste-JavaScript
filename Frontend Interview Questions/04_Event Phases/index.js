document.getElementById('grandparent').addEventListener("click",()=>{

    console.log("Grandparent");
},true) // Event capturing

document.getElementById('parent').addEventListener("click",()=>{

    console.log("Parent");
},true)

document.getElementById('child').addEventListener("click",()=>{

    console.log("Child");
},true)