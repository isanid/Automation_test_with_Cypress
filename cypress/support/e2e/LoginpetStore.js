describe('petStore API Inventory Testing', () => {
    it('Login a User - POST', () => {
        let body = {
            "id": 2,
            "username": Cypress.env('username'),
            "firstName": "isan",
            "lastName": "ri",
            "email": "isan@gmail.com",
            "password": Cypress.env('password'),
            "phone": "098232",
            "userStatus": 1
        }

        cy.request('POST', '/user', body).as('createUser');
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.equal(200)
        })
    })

    const loginUser = {
        method: 'GET',
        url: '/user/login',
        qs: {
            username: Cypress.env('username'),
            password: Cypress.env('password')
        }
    }
    it('Login registered user', () => {
        cy.request(loginUser).as('loginUser')
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.equal(200)
        })
    })

})