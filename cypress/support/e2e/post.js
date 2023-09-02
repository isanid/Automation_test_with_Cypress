describe('petStore API Inventory Testing', () => {

    it('Create a User - POST', () => {
        let body = {
            "id": 2,
            "username": Cypress.env('username'),
            "firstName": "isan",
            "lastName": "ri",
            "email": "isan@gmail.com",
            "password": "12345",
            "phone": "098232",
            "userStatus": 1
        }

        cy.request('POST', '/user', body).as('createUser');
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.equal(200)
        })
    })



})