let customerList = [];
const $customer_Table = $('#tableappend');
let id = 0

class Customer {
    constructor(customerName, phoneNumber, customerDOB, Id) {
        this.customerName = customerName;
        this.phoneNumber = phoneNumber;
        this.customerDOB = customerDOB;
        this.id = id;
    }
}

function createCustomer() {
    const addedCustomer = new Customer($(`#customer_name`).val(), $(`#customer_phone`).val(), $(`#customer_birthdate`).val(), id)
    customerList.push(addedCustomer);
    id++
    };





function renderTable() {
    $customer_Table.empty();
    
    for (let i = 0; i < customerList.length; i++) {
        let passedValue = `${customerList[i].id}`;
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit-modal" >
            Edit
            </button>
            </td>
        </tr>')`
    )
    return passedValue
    }
    console.log(customerList);
}


function deleteCustomer(id) {
    const indexToDelete = customerList.findIndex(customer => customer.id===id)
    customerList.splice(indexToDelete, 1);
    renderTable();
}



function updateCustomer(id) {
    const indexToUpdate = customerList.findIndex(customer => customer.id ===id)
    customerList[indexToUpdate].customerName = $('#name-edit').val();
    customerList[indexToUpdate].phoneNumber = $('#tel-edit').val();
    customerList[indexToUpdate].customerDOB = $('#DOB-edit').val();
    renderTable();
    console.log(customerList);
}

function passIdValue() {
    let passedValue = $(customerList[i].id);
    return passedValue;
}