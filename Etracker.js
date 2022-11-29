//bringing form in the js;
document.getElementById("form").addEventListener('submit',addItem);
function addItem(event){
    event.preventDefault();
    const obj={
        Amount:document.getElementById("Amount").value,
        Description:document.getElementById("Description").value,
        Category:document.getElementById("Category").value,
    }
  localStorage.setItem(obj.Amount,JSON.stringify(obj));
  addExpenseToUi(obj);
}
//Adding new Elements in UI
function addExpenseToUi(obj){
       const tbody=document.getElementById("Expenses");
       const row=document.createElement('tr');
       row.id=obj.Amount;
       row.innerHTML=`<td>${obj.Amount}</td>
                     <td>${obj.Description}</td>
                     <td>${obj.Category}</td>
                     <td><button onclick="edit(${obj.Amount})">Edit</button></td>
                     <td><button onclick="remove(${obj.Amount})">Remove</button></td>`;
                     tbody.appendChild(row);
}
function edit(key){
   let jsonobj=localStorage.getItem(key);
   let obj=JSON.parse(jsonobj);
   console.log(obj);
   document.getElementById("Amount").value=obj.Amount;
   document.getElementById("Description").value=obj.Description;
   document.getElementById("Category").value=obj.Category;
   const parent=document.getElementById("Expenses");
   const child=document.getElementById(key);
   parent.removeChild(child);
}
function remove(key){
    localStorage.removeItem(key);
    const parent=document.getElementById("Expenses");
    const child=document.getElementById(key);
    parent.removeChild(child);
}
