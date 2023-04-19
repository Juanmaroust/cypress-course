import HomePage from "../../pages/HomePage";
import SearchResultsPage from "../../pages/SearchResultsPage";
import ProductPage from "../../pages/ProductPage";

it("Find an element by text using contains", function(){
  cy.visit('www.automationpractice.com/index.php');
  //   cy.contains('Dresses').trigger('MSPointerDown').click();
  cy.contains('Dresses').click({force: true});
  cy.get('.category-name').should('contain','Dresses')
  cy.contains('T-shirts').click({force: true});
  cy.get('.category-name').should('contain','T-shirts')
  cy.contains('Women').click({force: true});
  cy.get('.category-name').should('contain','Women')

//   /* ==== Generated with Cypress Studio ==== */
//   cy.get('.sfHoverForce > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click();
// //   cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click();
//   cy.get('.sfHover > .submenu-container > :nth-child(1) > a').click();
//   cy.get('.category-name').click();
//   cy.get('.category-name').should('have.text', '\n                                Casual Dresses                            ');
//   /* ==== End Cypress Studio ==== */

})

it("Scroll to footer and print 'Information' section", function(){
    cy.visit('www.automationpractice.com/index.php');
    cy.get('#block_various_links_footer').scrollIntoView().find('ul li').each(($li)  => {
        cy.wrap($li).log($li.text())
        // cy.log(cy.wrap($li).text())
    })
    // cy.log(text2.text())
    // })
    // cy.get('ul>li').each(() => {...})
})

it("Search Dress and compare results found with actual results", function(){
  const home = new HomePage()
  const results = new SearchResultsPage()
  home.visit()
  home.searchElement("Blue Dress")
  home.submitSearch()
  results.compareResultsFoundWithActualResults()



})

it.only("Search Dress and get price, quantity and size", function(){
  const home = new HomePage()
  const results = new SearchResultsPage()
  const product = new ProductPage()
  home.visit()
  home.searchElement("Black Dress")
  home.submitSearch()
  results.clickFirstProduct()
  product.getProductPrice()
  product.getProductQuantity()
  product.getProductSize()


})
