/// <reference types="Cypress" />

class ProductsPage{

    clickFirstProduct(){
        return cy.get('a[href="/product_details/1"]').click()
    }

    verifyProductDetailsIsDisplayed(){
        return cy.get('.product-information').should('be.visible')
    }

    verifySpecificProductDetailIsDisplayed(productDetail){
        return cy.get('.product-information').should('contain', productDetail)
    }

}

export default ProductsPage