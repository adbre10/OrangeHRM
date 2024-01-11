/// <reference types="cypress" />


describe("Login checks", ()=>{
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("No registered user, Alert shown", ()=>{
        cy.fixture('loginData').then((myData)=>{
            cy.myLogin(myData.userNotRegistered, myData.incorrectPass)
            //cy.myLogin("a", "a")
            //Check alert message is shown:     
            cy.get('.oxd-alert-content > .oxd-text').contains("Invalid credentials")
        })
    })    

    it("Registered user, incorrect password, Alert shown", ()=>{
        cy.fixture('loginData').then((myData)=>{
            cy.myLogin(myData.userRegistered, myData.incorrectPass)
            //cy.myLogin("a", "a")
            //Check alert message is shown:     
            cy.get('.oxd-alert-content > .oxd-text').contains("Invalid credentials")
        })
    })  

   
 //More test should be created or at least analyzed, as no user or password, fields length, some basic sql injection...

 it("Registered user, correct password, logged in", ()=>{
    cy.fixture('loginData').then((myData)=>{
        cy.myLogin(myData.userRegistered, myData.correctPass)
        //cy.myLogin("a", "a")
        //Check alert message is shown:     
        cy.get('.oxd-userdropdown-name').contains(myData.UserLogged)
    })
}) 

})