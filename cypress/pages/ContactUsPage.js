/// <reference types="Cypress" />

class ContactUsPage{

    verifyGetInTouchMessage(){
        return cy.get('.contact-form').should('contain', 'Get In Touch');
    }

    fillName(value){
        const contactUsName = cy.get('input[name="name"]')
        contactUsName.clear()
        contactUsName.type(value)
        return this
    }

    fillEmailAddress(value){
        const contactUsEmail = cy.get('input[data-qa="email"]');
        contactUsEmail.clear()
        contactUsEmail.type(value)
        return this
    }

    fillSubject(value){
        const contactUsSubject = cy.get('input[data-qa="subject"]');
        contactUsSubject.clear()
        contactUsSubject.type(value)
        return this
    }

    fillMessage(value){
        const contactUsMessage = cy.get('textarea[data-qa="message"]');
        contactUsMessage.clear()
        contactUsMessage.type(value)
        return this
    }

    uploadPicture(){
        const p = 'Picture.png'
        cy.get('input[name="upload_file"]').selectFile({
            contents: Cypress.Buffer.from('fixtues'),
            fileName: p,
        })
    }

    clickSubmitButton(){
        return cy.get('input[data-qa="submit-button"]').click()
    }
    
    verifySuccessfulMessage(){
        cy.get('.alert-success').should('contain', 'Success! Your details have been submitted successfully.')
    }

    clickHomeButton(){
        return cy.get('.btn.btn-success').click();
    }

}

export default ContactUsPage