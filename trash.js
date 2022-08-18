// class Customer {
//     constructor(customerName, phoneNumber, customerDOB) {
//         this.customerName = customerName;
//         this.phoneNumber = phoneNumber;
//         this.customerDOB = customerDOB;
//         this.customers = []
//     }
// }

// class CustomerInteraction {

//     static url = "https://crudcrud.com/api/fd023aa6e639420db2a0d89deb0603c3/customers";

//     static showAllCustomers = async () => {
//         const response = await fetch("https://crudcrud.com/api/fd023aa6e639420db2a0d89deb0603c3/customers")
//         const data = await response.json();
//         // Customer.customers.push(new Customer($(`${customer._id}-`)));
//     }
    

//     static specificHouse(id) {
//         return $.get(this.url + `/${id}`);
//     }

//     static createCustomer(customer) {
//         fetch('https://crudcrud.com/api/fd023aa6e639420db2a0d89deb0603c3/customers', {
//             headers: { "Content-Type": "application/json; charset=utf-8" },
//             method: 'POST',
//             body: JSON.stringify({
//             name: 'Write Tests',
//             done: false
//         })
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
// }



//     static updateCustomer(customer) {
//         return $.ajax({
//             url: this.url + `/${customer._id}`,
//             dataType: 'json',
//             data: JSON.stringify(customer),
//             contentType: 'application/json',
//             type: 'PUT'
//         });
//     }

//     static removeCustomer(id) {
//         return $.ajax({
//             url: this.url + `/${id}`,
//             type: 'DELETE'
//         });
//     }
// }


// class DOMManager {
//     static customers;

//     static showAllCustomers() {
//         CustomerInteraction.showAllCustomers().then(customers => this.render(customers));
//     }

//     static createCustomer(name) {
//         CustomerInteraction.createCustomer(new Customer(name))
//         .then(() => {
//             return CustomerInteraction.showAllCustomers();
//         })
//         .then((customers) => this.render(customers));
//     }


//     static removeCustomer(id) {
//         CustomerInteraction.removeCustomer(id)
//         .then(() => {
//             return CustomerInteraction.showAllCustomers();
//         })
//         .then((customers) => this.render(customers));
//     }


//      static render(customers) {
//         this.customers = customers;
//         $('#customer_table').empty();
//         for (let customer of customers) {
//             $('#customer_table').prepend(
//                 `<div id="#{customomer._id}" class="card">
//                     <div class="card-header"
//                     <h3>${customer.name}</h3>
//                     <button class="btn btn-danger" onClick='DOMManager.deleteCustomer('${customer.id}')">Delete</button>
//                    </div>
//                 </div>`
//            );
//          }






//     }



// }


// $('#create_customer').click(() => {
//     DOMManager.createCustomer($('#create_customer').val());
//     $('customer_name').val("");
// })

// DOMManager.showAllCustomers();

