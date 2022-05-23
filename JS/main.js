let dropElement=document.querySelector(".main");
let table=document.querySelector(".table");
let upload=document.querySelector(".icon");
let input=document.querySelector("input");
let xmark=document.querySelector(".mark");
let xbutton=document.querySelector(".xbutton")

xbutton.onclick=function(){
    table.remove()
}
upload.onclick=function(){
   input.click();
}
function deleterow(order) {
    table.deleteRow(`${order}`);
  }


input.onchange=function(e){
    upoladimage(e.target.files);
}
// console.log(table.lastElementChild);

dropElement.ondragover=function(e) {
    e.preventDefault();
}
let count=1;
dropElement.ondrop=function(e) {
    e.preventDefault();
    upoladimage(e.dataTransfer.files);
 
}
function upoladimage(files)
{

    [...files].forEach(file=>{
        let reader=new FileReader();
        reader.onloadend=function(e){
         //    console.log(e.target);
        //  console.log(file.name);
        //  console.log(file.size);
        //  console.log(e.target.result);
      
         
         let tr=`<tr>
         <th scope="row">${count++}</th>
         <td>
             <img src="${e.target.result}" alt="image" width="200px">
         </td>
         <td>${file.name}</td>
         <td>${file.size}</td>
         <td><i class="fa-solid fa-xmark mark"></i><td>
       </tr>
       `
   
// if (count==2) {
//     let secondtable=`
//     <thead>
//     <tr>
//       <th scope="col">id</th>
//       <th scope="col">image</th>
//       <th scope="col">title/th>
//       <th scope="col">size</th>
//       <th scope="col" class="xbutton">X</th>
//     </tr>
//   </thead>
//     `
// }

       table.lastElementChild.innerHTML +=tr;
        }
      


        reader.readAsDataURL(file);
    })
 
}

function deletedata(row){
    function Geeks() {
        document.getElementById(row).remove();
    }
}

