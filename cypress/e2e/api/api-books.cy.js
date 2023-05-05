const apiUrl = "https://fakerestapi.azurewebsites.net/api/v1/Books/";

describe("GET /Books", () => {
    it("Get Books API", () => {
        cy.request({
            method: "GET",
            url: apiUrl})
            .then((response) => {
                expect(response.status).to.eq(200);
        })
    });

    it("Verify in request that all elements have key attributes", () => {
        cy.request({
            method: "GET",
            url: apiUrl})
            .its('body')
            .each(object => {
                expect(object).to.have.all.keys('id','title','description','pageCount','excerpt','publishDate');
            });    
        })

    it("Print headers on console", () => {
        cy.request({
            method: "GET",
            url: apiUrl })
            .then((response) => {
                expect(response.status).to.eq(200);
                console.log(response.headers)
            })
        })       
})