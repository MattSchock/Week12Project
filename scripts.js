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
            <button class="btn btn-primary" text="Delete" onClick="updateCustomer(${customerList[i].id})">Update</button>
            </td>
        </tr>')`
        
    )
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
    customerList[indexToUpdate].customerName =$('#customer_name').val();
    customerList[indexToUpdate].phoneNumber = $('#customer_phone').val();
    customerList[indexToUpdate].customerDOB = $('#customer_birthdate').val();
    renderTable();
}

