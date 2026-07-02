console.log("todays we are going to cover js");

// fetch 

// promises

//let promise=new Promise((resolve,reject)=>{
 //   resolve("resolve");
// })
// console.log(promise);

// promise.then((res)=>{
//     console.log("resolve promise execute",res)
// }).catch(()=>{
//    console.log("promise reject")
// })

async function getAllData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    }catch (error) {}
}
// getAllData();

//  CRUD (create(post), read(get),  update(put), delete(delete))

async function createData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            body:JSON.stringify({
                name:"shanti",
                age:19
            }),
            headers:{
               "Content-Type":"application/json"
            }
        });
        const data = await response.json();
        console.log(data)
    }catch(error) {}
}
// createData();

async function getDataById(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/99");
        const data = await response.json();
        console.log(data);
    }catch(error) {}
}
// getDataById();

async function updateData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/88",{
            method:"PUT",  //PATCH
            body:JSON.stringify({
                name:"shanti",
                age:19
            }),
            headers: {
                "content-type":"application/json"
            }
        });
        const data = await response.json();
        console.log(data)
    }catch(error) {}
}
// updateData();

async function deleteData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/77",{
          method:"DELETE",  
        });
        const data = await response.json();
        console.log(data) 
    } catch(error){}
}
// deleteData();

// String interpolation
console.log("hii" + 3);

let str = `this is Qlith ${2026}`;
console.log(str);

// MATH Object
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.sqrt(35));
console.log(Math.SQRT1_2);
console.log(Math.min(21,24,23,2007));
console.log(Math.max(21,23,24,2007));
console.log(Math.random(7));
console.log(Math.floor(5.5));
console.log(Math.ceil(18.00008));