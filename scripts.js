class Customer {
    constructor(customerName, phoneNumber, customerDOB) {
        this.customerName = customerName;
        this.phoneNumber = phoneNumber;
        this.customerDOB = customerDOB;
    }
}

class CustomerInteraction {

    static url = "fd023aa6e639420db2a0d89deb0603c3/customers";

    static showAllCustomers() {
        return $.get(this.url);
    }

    static specificHouse(id) {
        return $.get(this.url + `/${id}`);
    }

    static createCustomer(customer) {
        return $.post(this.url, customer);
    }

    static updateCustomer(customer) {
        return $.ajax({
            url: this.url + `/${customer._id}`,
            dataType: 'json',
            data: JSON.stringify(customer),
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    static removeCustomer(id) {
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        });
    }
}


class DOMManager {
    static customers;

    static showAllCustomers() {
        CustomerInteraction.showAllCustomers().then(customers => this.render(customers));
    }

    static createCustomer(name) {
        CustomerInteraction.createCustomer(new Customer(name))
        .then(() => {
            return CustomerInteraction.showAllCustomers();
        })
        .then((customers) => this.render(customers));
    }


    static removeCustomer(id) {
        CustomerInteraction.removeCustomer(id)
        .then(() => {
            return CustomerInteraction.showAllCustomers();
        })
        .then((customers) => this.render(customers));
    }


    static render(customers) {
        this.customers = customers;
        $('#customer_table').empty();
        for (let customer of customers) {
            $('#customer_table').prepend(
                `<div id="#{customomer._id}" class="card">
                    <div class="card-header"
                    <h3>${customer.name}</h3>
                    <button class="btn btn-danger" onClick='DOMManager.deleteCustomer('${customer.id}')">Delete</button>
                    </div>
                </div>`
            );
        }






    }



}


$('#create_customer').click(() => {
    DOMManager.createCustomer($('#create_customer').val());
    $('customer_name').val("");
})

DOMManager.showAllCustomers();

