
let = $myModal = $('#myModal');
let customerList = [];
const $customer_Table = $('#tableappend');
let id = 1
const apiUrl = "https://62fd71deb9e38585cd51f570.mockapi.io/customers"


function emptyApiArray() {
    if (customerList.length == 0) {
        id = 1;
        return id;
    }
}





const updateCustomerList = async () => {
    let customerList = [];
    const response = await fetch("https://62fd71deb9e38585cd51f570.mockapi.io/customers")
    const data = await response.json();
    customerList = data;
    console.log(customerList);
    return customerList;
}



class Customer {
    
    constructor(customerName, phoneNumber, customerDOB, Id) {
        this.customerName = customerName;
        this.phoneNumber = phoneNumber;
        this.customerDOB = customerDOB;
        this.id = id;
    }
}

function createCustomer() {
    const addedCustomer = new Customer($(`#customer_name`).val(), $(`#customer_phone`).val(), $(`#customer_birthdate`).val(), id);
    $.post(apiUrl, addedCustomer);
    customerList.push(addedCustomer);
    id++
    };





function renderTable() {
    $customer_Table.empty();
    updateCustomerList();
    for (let i = 0; i < customerList.length; i++) {
    $customer_Table.append(`
        $('<tr>')
        $('<td>${customerList[i].customerName}
        </td>
        <td>${customerList[i].phoneNumber}
        </td>
        <td>${customerList[i].customerDOB}
        </td>')
            <td>
            <button class="btn btn-danger" text="Delete" onClick="deleteCustomer(${customerList[i].id})">Delete</button>
            </td>
            <td>
            <button type="button" class="btn btn-primary" data-bs-target="#edit-modal" onClick="updateCustomer(${customerList[i].id})" >
            Edit
            </button>
            </td>
        </tr>')`
    )
    }
    console.log(customerList);
}


function deleteCustomer(id) {
    const indexToDelete = customerList.findIndex(customer => customer.id===id)
    $.ajax({
        url: apiUrl + `/${id}` ,
        type: 'DELETE'
    });

    customerList.splice(indexToDelete, 1);
    renderTable();
    emptyApiArray();
}



function updateCustomer(id) {
    const indexToUpdate = customerList.findIndex(customer => customer.id ===id)
    customerList[indexToUpdate].customerName = $('#customer_name').val();
    customerList[indexToUpdate].phoneNumber = $('#customer_phone').val();
    customerList[indexToUpdate].customerDOB = $('#customer_birthdate').val();
    $.ajax({
        url: apiUrl + `/${id}`,
        type: 'PUT',
        data: {'customerName': $('#customer_name').val(),
                'phoneNumber': $('#customer_phone').val(),
                'customerDOB': $('#customer_birthdate').val()  }

    })
    renderTable();
    console.log(customerList);
}




// function showModal(id) {
//     $myModal.append(`
//     <div class="modal" tabindex="-1" id="edit-modal">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title">Modal title</h5>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//             <label for="name-edit" class="form-label">Name</label>
//             <input type="text" class="form-control" id="name-edit">
//             <label for="tel-edit" class="form-label">Phone</label>
//             <input type="tel" class="form-control" id="tel-edit">
//             <label for="DOB-edit" class="form-label">DOB</label>
//             <input type="date" class="form-control" id="DOB-edit">
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           <button type="button" class="btn btn-primary" onClick="updateCustomer()">Save changes</button>
//         </div>
//       </div>
//     </div>
//   </div>
//   `)

//     console.log('dynamic id', id)
//     console.log(`<div class="modal" tabindex="-1" id="edit-modal">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title">Modal title</h5>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//             <label for="name-edit" class="form-label">Name</label>
//             <input type="text" class="form-control" id="name-edit">
//             <label for="tel-edit" class="form-label">Phone</label>
//             <input type="tel" class="form-control" id="tel-edit">
//             <label for="DOB-edit" class="form-label">DOB</label>
//             <input type="date" class="form-control" id="DOB-edit">
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           <button type="button" class="btn btn-primary" onClick="updateCustomer()">Save changes</button>
//         </div>
//       </div>
//     </div>
//   </div>`)
// }




// function passIdValue() {
//     let passedValue = $(customerList[i].id);
//     return passedValue;
// }