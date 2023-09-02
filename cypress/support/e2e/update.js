describe('petStore API Inventory Testing', () => {

    it('Update a user', () => {
        const username = Cypress.env('username')
        let body = {
            "id": 2,
            "username": Cypress.env('username'),
            "firstName": "isann",
            "lastName": "ri",
            "email": "isan@gmail.com",
            "password": "12345",
            "phone": "098232",
            "userStatus": 1
        }

        cy.request('PUT', '/user/' + username, body).as('updateUser')
        cy.get('@updateUser').then(updateUser => {
            expect(updateUser.status).to.equal(200)
        })

    })
})