
describe('petStore API Inventory Testing', () => {

    it('Delete a user', () => {
        const username = Cypress.env('username')
        cy.request('DELETE', '/user/' + username).as('deleteUser');
        cy.get('@deleteUser').then(deleteUser => {
            expect(deleteUser.status).to.equal(200)
        })
    })
})

// describe('PetStore API User Deletion', () => {
//     it('Delete a user with username "isan00"', () => {
//         // Kunjungi halaman swagger PetStore
//         cy.visit('https://www.saucedemo.com/v1/');

//         // Cari input field untuk username dan masukkan "isan00"
//         cy.get('input[name="user-name"]').type('standard_user');
//         cy.get('input[name="password"]').type('secret_sauce');



//         // Klik tombol "Execute"
//         cy.get('input.btn_action').click();

//         // Verifikasi bahwa permintaan berhasil dihapus
//         cy.get('.response-col_status').should('contain', '200');
//         cy.get('.response-col_description').should('contain', 'OK');
//     });
// });
