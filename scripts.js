let customerList = [];
const $customer_Table = $('#tableappend');

class Customer {
    constructor(customerName, phoneNumber, customerDOB,) {
        this.customerName = customerName;
        this.phoneNumber = phoneNumber;
        this.customerDOB = customerDOB;
    }
}

function createCustomer() {
    const addedCustomer = new Customer($(`#customer_name`).val(), $(`#customer_phone`).val(), $(`#customer_birthdate`).val())
    customerList.push(addedCustomer);
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
            <button Class="btn btn-danger" text="Delete">Delete</button>
            </td>
        </tr>')`
        
    )
    }
}




console.log(customerList);