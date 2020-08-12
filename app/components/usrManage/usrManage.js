const tb = document.getElementById('table_body');
const addUser = document.getElementById('add_user');
const caEmail = document.getElementById('ca_email');
const caPassword = document.getElementById('ca_password');
const caPopUp = document.getElementById('create_account_popup');

function addRowToTable(tableBody,email,password){
    let newRow = 
    `<tr>
        <td>${email}</td>
        <td>User</td>
        <button>Delete</button>
        <button>Edit</button>
    </tr>`
    tableBody.append(newRow)
}
if(addUser){
    addUser.addEventListener('click',()=>{
        caPopUp.open=true;
    })
}