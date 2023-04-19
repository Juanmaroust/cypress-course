/// <reference types="Cypress" />

class HomePage{
    visit(){
        cy.visit('http://automationexercise.com');
    }

    homeLogoIsVisible(){
        return cy.get('img[alt="Website for automation practice"]').should('be.visible');

    }

    clickLoginButton(){
        return cy.get('.fa.fa-lock').click();
    }

    verifySignUpMessage(){
        return cy.get('.signup-form').should('contain', 'New User Signup!');
    }

    verifyLoginMessage(){
        return cy.get('.signup-form').should('contain', 'Login to your account');
    }

    fillName(value){
        const signUpName = cy.get('input[name="name"]')
        signUpName.clear()
        signUpName.type(value)
        return this
    }

    fillEmailAddress(value){
        const signUpEmail = cy.get('input[data-qa="signup-email"]');
        signUpEmail.clear()
        signUpEmail.type(value)
        return this

    }

    clickSignUpButton(){
        return cy.get('button[data-qa="signup-button"]').click();
    }

    verifyDeleteAccountMessage(){
        return cy.get('a[href="/delete_account"]').should('be.visible')
    }

    clickDeleteAccount(){
        return cy.get('a[href="/delete_account"]').click()
    }

    verifyAccountDeletedMessage(){
        return cy.get('h2[data-qa="account-deleted"]').should('contain', 'Account Deleted!')
    }
}

export default HomePage