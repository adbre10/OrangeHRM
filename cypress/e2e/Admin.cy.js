/// <reference types="cypress" />


describe("Admin tab - User management", ()=>{
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("Add a new user and check, incorrect password, Alert shown", ()=>{
        cy.fixture('loginData').then((myData)=>{
            //log in
            cy.myLogin(myData.userRegistered, myData.correctPass)
            //Go to Admin section
            cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
            //check username no exist
            cy
                .get(':nth-child(2) > .oxd-input').type("omarcito")
                .get('.oxd-form-actions > .oxd-button--secondary').click()
            cy.get('.orangehrm-horizontal-padding > .oxd-text').contains("No Records Found")

            //Add new User
            cy.get('.orangehrm-header-container > .oxd-button').click()
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click().type('{downarrow}').wait(1000).type('{enter}')   
            cy.get('.oxd-autocomplete-text-input > input').type("Peter").wait(1000).type('{downarrow}').wait(1000).type('{enter}')
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click().type("enable").wait(1000).type('{enter}')   
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Omarcito").wait(1000)
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
            cy.get('.oxd-button--secondary').click().wait(6000)

            //searck omarcito
            cy
                .get(':nth-child(2) > .oxd-input').type("omarcito")
                .get('.oxd-form-actions > .oxd-button--secondary').click()
                .get('.orangehrm-horizontal-padding > .oxd-text').contains("(1) Record Found")
            
                //Delete created user
            cy
                .get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click().wait(2000)
                .get('.oxd-button--label-danger').click()

        })
    })  

})