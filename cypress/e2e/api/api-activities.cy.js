const apiUrl = "https://fakerestapi.azurewebsites.net/api/v1/Activities/";
var postObject = { 
    "id": 0,
    "title": "string",
    "dueDate": "2023-05-05T10:31:52.620Z",
    "completed": true
};
var listOfIds = [];

describe("GET /Activities", () => {
    it("Get Activities API", () => {
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
                expect(object).to.have.all.keys('id','title','completed','dueDate');
            });    
        })

    it("Create an a array with the list of all available Ids", () => {
        cy.request({
            method: "GET",
            url: apiUrl})
            .its('body')
            .each(object => {
                listOfIds.push(object.id);  
            });    
        })   

    it("Select a random Id in stored array and get the request for that specific Id", () => {
        cy.request({
            method: "GET",
            url: apiUrl + listOfIds[Math.floor(Math.random() * listOfIds.length)]})
            .then((response) => {
                expect(response.status).to.eq(200);
            })
        })       
})

describe("POST /activities", () => {
    it("Multiple post requests", () => {
        cy.request({
            method: "POST",
            url: apiUrl,
            body: postObject})
            .then((response) => {
                expect(response.status).to.eq(200);
        })
        postObject.id = 1
        cy.request({
            method: "POST",
            url: apiUrl,
            body: postObject})
            .then((response) => {
                expect(response.status).to.eq(200);
        })
        postObject.id = 2
        cy.request({
            method: "POST",
            url: apiUrl,
            body: postObject})
            .then((response) => {
                expect(response.status).to.eq(200);
        })
    });

})