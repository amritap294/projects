let TC=document.querySelector(".ticket-container");
let allfilters=document.querySelectorAll(".filter");
let modelVisible=false;
let selectedPriorty;

for(let i=0;i<allfilters.length;i++){
    allfilters[i].addEventListener("click",filterHandler);
}

// function filterHandler(e){
//     let span=e.currentTarget.children[0];
//     let style=getComputedStyle(span);
//     TC.style.backgroundColor=style.backgroundColor;
// }

function filterHandler(e){

}

 let addbtn=document.querySelector(".add");
 addbtn.addEventListener("click",showticket);



// function showticket(e){
// //     let model=document.createElement("div");
// //     let p=document.createElement("p");
// //     p.innerText="hello";
// //     model.appendChild(p);
// //     console.log(model);
// // }


// 

function showticket(e){
   if(!modelVisible){
       
      let model=`<div class="modal">
      <div class="task-to-be-added" data-type="false" contenteditable="true">Enter Your Task</div>
      <div class="modal-priority-list">
        <div class="modal-pink-filter modal-filter active"></div>
        <div class="modal-blue-filter modal-filter"></div>
        <div class="modal-green-filter modal-filter"></div>
        <div class="modal-yellow-filter modal-filter"></div>
        
     </div>
</div>`;

      TC.innerHTML=TC.innerHTML+model;
      
      selectedPriorty="pink";
      let taskModel=document.querySelector(".task-to-be-added");
      taskModel.addEventListener("click",function(e){
      if(e.currentTarget.getAttribute("data-type")=="false"){
           e.currentTarget.innerText="";
           e.currentTarget.setAttribute("data-type","true");
        }
})

   modelVisible="true";
   taskModel.addEventListener("keypress",addTicket.bind(this,taskModel));
   let modelFilters=document.querySelectorAll(".modal-filter");
   for(let i=0;i<modelFilters.length;i++){
       modelFilters[i].addEventListener("click",selectPriorty);
   }

}

   }

//    it is the function in which we use to select any color box filter
   function selectPriorty(e){
       let activeFilters=document.querySelector(".modal-filter.active");
       activeFilters.classList.remove("active");
       selectedPriorty=e.currentTarget.classList[0].split("-")[1];
       e.currentTarget.classList.add("active");
   }

   function addTicket(taskModel,e){
     
      if(e.key=="Enter" && e.shiftKey== false && taskModel.innerText.trim() != " " ){
         let task=taskModel.innerText;
         let ticket=`<div class="ticket">
         <div class="ticket-color ticket-color-${selectedPriorty}"></div>
         <div class="ticket-id">#fbwkvk</div>
         <div class="task">${task}</div>
     </div>`;
          document.querySelector(".modal").remove();
          modelVisible=false;
          TC.innerHTML=TC.innerHTML+ticket;
       }
       else if(e.key == "Enter" && e.shiftKey == false ){
          e.preventDefault();    //it will help not to allow its default behaviour which to allow shiftKey
          alert("Error! Please Enter Your Task");
      }
   }