import ContactUsPage from "../../pages/ContactUsPage";
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import SignUpPage from "../../pages/SignUpPage";

const homePage = new HomePage();
const signUpPage = new SignUpPage();
const contactUsPage = new ContactUsPage();
const productsPage = new ProductsPage();

describe('Test Cases 1-10', () => {
  beforeEach(() => {
    homePage.visit();
    
  })

  it('Test Case 1: Register user and delete it', () => {
    let r = (Math.random() + 1).toString(36).substring(7);
    homePage.homeLogoIsVisible();
    homePage.clickSignupLoginButton();
    homePage.verifySignUpMessage();
    homePage.fillName(r);
    homePage.fillSignUpEmailAddress(r + "@test.com");
    homePage.clickSignUpButton();
    signUpPage.verifyEnterAccountInformationMessage();
    signUpPage.fillTitle();
    signUpPage.fillPassword("Testing");
    signUpPage.fillDateOfBirth('14', 'February', '1996');
    signUpPage.clickSignUpForNewsletterCheckBox();
    signUpPage.clickReceiveSpecialOffersFromParternersCheckBox();
    signUpPage.fillFirstName(r);
    signUpPage.fillLastName("Testing");
    signUpPage.fillCompany("Company X");
    signUpPage.fillFirstAddress("Street 1234");
    signUpPage.fillSecondAddress("Av. 1425");
    signUpPage.fillCountry("United States");
    signUpPage.fillState("Florida");
    signUpPage.fillCity("Orlando");
    signUpPage.fillZipCode("1234");
    signUpPage.fillMobileNumber("123456789");
    signUpPage.clickCreateAccountButton();
    signUpPage.verifyAccountCreatedMessage();
    signUpPage.clickContinueButton();
    homePage.verifyDeleteAccountMessage();
    homePage.clickDeleteAccount();
    homePage.verifyAccountDeletedMessage();
  })

  it('Test Case 2: Successful Login', () => {
    homePage.homeLogoIsVisible();
    homePage.clickSignupLoginButton();
    homePage.verifyLoginMessage();
    homePage.fillLoginEmailAddress("Juan1@test.com");
    homePage.fillLoginPassword("JuanTesting1");
    homePage.clickLoginButton();
    homePage.verifyLoggedInAsUserMessage();
  })

  it('Test Case 3: Unsuccessful Login', () => {
    homePage.homeLogoIsVisible();
    homePage.clickSignupLoginButton();
    homePage.verifyLoginMessage();
    homePage.fillLoginEmailAddress("Fail@test.com");
    homePage.fillLoginPassword("asdasdsadsadasd");
    homePage.clickLoginButton();
    homePage.verifyUnsuccessfulLoginMessage();
  })

  it('Test Case 4: Logout User', () => {
    homePage.homeLogoIsVisible();
    homePage.clickSignupLoginButton();
    homePage.verifyLoginMessage();
    homePage.fillLoginEmailAddress("Juan1@test.com");
    homePage.fillLoginPassword("JuanTesting1");
    homePage.clickLoginButton();
    homePage.verifyLoggedInAsUserMessage();
    homePage.clickLogoutButton();
    homePage.verifyLoginMessage();
  })

  it('Test Case 5: Register User with existing email', () => {
    homePage.homeLogoIsVisible();
    homePage.clickSignupLoginButton();
    homePage.verifySignUpMessage();
    homePage.fillName("Juan");
    homePage.fillSignUpEmailAddress("Juan1@test.com");
    homePage.clickSignUpButton();
    signUpPage.verifyInvalidEmailAddressMessage();
  })

  it('Test Case 6: Contact Us Form', () => {
    homePage.homeLogoIsVisible();
    homePage.clickContactUsButton();
    contactUsPage.verifyGetInTouchMessage();
    contactUsPage.fillName("Juan");
    contactUsPage.fillEmailAddress("Juan@Testing.com");
    contactUsPage.fillSubject("New Subject");
    contactUsPage.fillMessage("New Message");
    contactUsPage.uploadPicture();
    contactUsPage.clickSubmitButton();
    contactUsPage.verifySuccessfulMessage();
    contactUsPage.clickHomeButton();
    homePage.homeLogoIsVisible();
  })

  it('Test Case 7: Verify Test Cases Page', () => {
    homePage.homeLogoIsVisible();
    homePage.clickTestCasesButton();
    homePage.verifyCenterMessage("Test Cases");

  })

  it('Test Case 8: Verify All Products and product detail page', () => {
    homePage.homeLogoIsVisible();
    homePage.clickProductsButton();
    homePage.verifyCenterMessage("All Products");
    productsPage.clickFirstProduct();
    productsPage.verifyProductDetailsIsDisplayed();
    productsPage.verifySpecificProductDetailIsDisplayed("Blue Top");
    productsPage.verifySpecificProductDetailIsDisplayed("Category: Women > Tops");
    productsPage.verifySpecificProductDetailIsDisplayed("Rs. 500");
    productsPage.verifySpecificProductDetailIsDisplayed("Availability: In Stock");
    productsPage.verifySpecificProductDetailIsDisplayed("Condition: New");
    productsPage.verifySpecificProductDetailIsDisplayed("Brand: Polo");
    
  })
})