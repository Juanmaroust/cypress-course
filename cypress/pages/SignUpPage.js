/// <reference types="Cypress" />

class SignUpPage{
    verifyEnterAccountInformationMessage(){
        return cy.get('.login-form').should('contain', 'Enter Account Information')
    }

    fillTitle(){
        return cy.get('input[value="Mr"]').click()
    }

    fillPassword(value){
        const inputPassword = cy.get('input[data-qa="password"]')
        inputPassword.clear()
        inputPassword.type(value)
        return this
    }

    fillDateOfBirth(valueDay, valueMonth, valueYear){
        const daySelector = cy.get('select[data-qa="days"]')
        daySelector.select(valueDay)
        const monthSelector = cy.get('select[data-qa="months"]')
        monthSelector.select(valueMonth)
        const yearSelector = cy.get('select[data-qa="years"]')
        return yearSelector.select(valueYear)
    }

    clickSignUpForNewsletterCheckBox(){
        return cy.get('input[name="newsletter"]').click()
    }

    clickReceiveSpecialOffersFromParternersCheckBox(){
        return cy.get('input[name="optin"]').click()
    }

    fillFirstName(value){
        const firstName = cy.get('input[data-qa="first_name"]')
        firstName.clear()
        firstName.type(value)
        return this
    }

    fillLastName(value){
        const lastName = cy.get('input[data-qa="last_name"]')
        lastName.clear()
        lastName.type(value)
        return this
    }

    fillCompany(value){
        const inputCompany = cy.get('input[data-qa="company"]')
        inputCompany.clear()
        inputCompany.type(value)
        return this
    }

    fillFirstAddress(value){
        const inputAddress = cy.get('input[data-qa="address"]')
        inputAddress.clear()
        inputAddress.type(value)
        return this
    }

    fillSecondAddress(value){
        const inputAddress2 = cy.get('input[data-qa="address2"]')
        inputAddress2.clear()
        inputAddress2.type(value)
        return this
    }

    fillCountry(value){
        const inputCountry = cy.get('select[data-qa="country"]')
        return inputCountry.select(value)
    }

    fillState(value){
        const inputState = cy.get('input[data-qa="state"]')
        inputState.clear()
        inputState.type(value)
        return this
    }

    fillCity(value){
        const inputCity = cy.get('input[data-qa="city"]')
        inputCity.clear()
        inputCity.type(value)
        return this
    }

    fillZipCode(value){
        const inputZipCode = cy.get('input[data-qa="zipcode"]')
        inputZipCode.clear()
        inputZipCode.type(value)
        return this
    }

    fillMobileNumber(value){
        const inputMobileNumber = cy.get('input[data-qa="mobile_number"]')
        inputMobileNumber.clear()
        inputMobileNumber.type(value)
        return this
    }

    clickCreateAccountButton(){
        return cy.get('button[data-qa="create-account"]').click()
    }

    verifyAccountCreatedMessage(){
        return cy.get('h2[data-qa="account-created"]').should('contain', 'Account Created!')
    }

    clickContinueButton(){
        return cy.get('a[data-qa="continue-button"]').click()
    }

    verifyInvalidEmailAddressMessage(){
        return cy.get('.signup-form').should('contain', 'Email Address already exist!')
    }

}

export default SignUpPage