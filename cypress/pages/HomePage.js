/// <reference types="Cypress" />

class HomePage{
    visit(){
        cy.visit('http://automationexercise.com');
    }

    homeLogoIsVisible(){
        return cy.get('img[alt="Website for automation practice"]').should('be.visible');

    }

    clickSignupLoginButton(){
        return cy.get('.fa.fa-lock').click();
    }

    verifySignUpMessage(){
        return cy.get('.signup-form').should('contain', 'New User Signup!');
    }

    verifyLoginMessage(){
        return cy.get('.login-form').should('contain', 'Login to your account');
    }

    fillName(value){
        const signUpName = cy.get('input[name="name"]')
        signUpName.clear()
        signUpName.type(value)
        return this
    }

    fillSignUpEmailAddress(value){
        const signUpEmail = cy.get('input[data-qa="signup-email"]');
        signUpEmail.clear()
        signUpEmail.type(value)
        return this

    }

    fillLoginEmailAddress(value){
        const loginEmail = cy.get('input[data-qa="login-email"]');
        loginEmail.clear()
        loginEmail.type(value)
        return this

    }

    fillLoginPassword(value){
        const loginPassword = cy.get('input[data-qa="login-password"]')
        loginPassword.clear()
        loginPassword.type(value)
        return this
    }

    clickLoginButton(){
        return cy.get('button[data-qa="login-button"]').click();
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

    verifyLoggedInAsUserMessage(){
        return cy.get('.nav.navbar-nav').should('contain', 'Logged in as')
    }
}

export default HomePage