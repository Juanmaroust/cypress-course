import HomePage from "../../pages/HomePage";
import SignUpPage from "../../pages/SignUpPage";

const homePage = new HomePage();
const signUpPage = new SignUpPage();

describe('Test Cases 1-10', () => {
  beforeEach(() => {
    homePage.visit();
    
  })

  it('Test Case 1: Register user and delete it', () => {
    homePage.homeLogoIsVisible();
    homePage.clickSignupLoginButton();
    homePage.verifySignUpMessage();
    homePage.fillName("Juan");
    homePage.fillSignUpEmailAddress("Juan@test.com");
    homePage.clickSignUpButton();
    signUpPage.verifyEnterAccountInformationMessage();
    signUpPage.fillTitle();
    signUpPage.fillPassword("JuanTesting");
    signUpPage.fillDateOfBirth('14', 'February', '1996');
    signUpPage.clickSignUpForNewsletterCheckBox();
    signUpPage.clickReceiveSpecialOffersFromParternersCheckBox();
    signUpPage.fillFirstName("Juan");
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

})