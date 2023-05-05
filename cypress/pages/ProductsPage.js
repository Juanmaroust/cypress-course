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

    fillSearchProductInput(product){
        const searchProductInput = cy.get('#search_product')
        searchProductInput.clear()
        searchProductInput.type(product)
        return this
    }

    clickSubmitSearch(){
        return cy.get('#submit_search').click()
    }

    verifyAllProductsMatchWithSearch(product){
        const productInformation = cy.get('.productinfo.text-center')
        const i = 0
        while(i < productInformation){
            productInformation[i].should('contain', product)
            i = i + 1
        }
        return
    }

}

export default ProductsPage