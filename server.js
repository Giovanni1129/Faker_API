const express = require('express'),
app= express(),
port= 8000,
server = app.listen(port,()=> console.log(`listening on port${port}`));
const faker = require('faker');

class User {
    constructor(){
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.random.number();
        this.companyName = faker.company.companyName();
        this.address = { 
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(), 
        };
    }
}

app.get("/api/user/new", (req, res) => {
    res.send(new User);
})

app.get("/api/company/new", (req,res) => {
    res.send(new Company);
})

app.get("/api/company/user", (req,res) => {
    res.send({user: new User, company: new Company});
})