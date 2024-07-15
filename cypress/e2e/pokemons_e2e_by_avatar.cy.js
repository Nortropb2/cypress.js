import * as data from "../helpers/poke_default_data.json"


describe('e2e покупка аватара на сайте pokemonbattle.ru', function () {

    it('e2e покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru');
        cy.get(':nth-child(1) > .auth__input').type(data.login);
        cy.get('#password').type(data.password);
        cy.get('.auth__button').click();
        cy.get('.header__btns > :nth-child(4)').click();
        cy.get('.available > button').first().click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('asdf');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
    })
}) 