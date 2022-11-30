const { I } = inject();
// Add in your custom step files

Given('I go into automation website', () => {
  I.amOnPage('/')
});

Then('I should see the home page',()=>{
  I.see('Selenium Ruby')
})

Given('I go to registeration page',()=>{
  I.amOnPage('/my-account')
})

When('I enter valid username and password',()=>{
  I.fillField('//input[@id="reg_email"]','dt@gmail.com')
  I.fillField('//input[@id="reg_password"]','db123@#$?')
  I.click('//input[@name="register"]')
  I.waitForNavigation({})
})

Then('I should see the user is registered',()=>{
  I.see('Hello')
})