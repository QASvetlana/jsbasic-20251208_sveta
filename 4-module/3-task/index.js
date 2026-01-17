function highlight(table) {
 for (let i = 0; i < table.rows.length; i++) {
let row = table.rows[i]; 
let cells = row.cells; 
let gender = cells[2];
let age = Number(cells[1].textContent);
let status = cells[3];
  


 if (status.hasAttribute('data-available') && status.dataset.available === 'true') {
    row.classList.add('available'); 
} else if (status.hasAttribute('data-available') && status.dataset.available === 'false') {
    row.classList.add('unavailable'); 
} else if (!status.hasAttribute('data-available')) {
    row.hidden = true;
}


 if (gender.textContent === 'm')  {
    row.classList.add('male'); 
} else if (gender.textContent === 'f') {
    row.classList.add('female'); 
}
   

     if (age < 18)  {
    row.style.textDecoration = 'line-through';
     }
 }}


