/*
Objective: Verify that the 'Completed' button filters and shows only completed items.

Test Steps:

1. Add and complete several todo items.
2. Click the 'Completed' button.

Expected Result: Only completed items should be visible.
*/

describe('Verify Completed Items Tab', () => {
  it('Only completed items are shown in the completed items tab', () => {
    cy.fixture('general.json').then((data) => {
      cy.visit(data.todoSite);
      const todoName = "Test"

      // Create several Todo Items
      for (let i = 1; i < 4; i++) {

        cy.get('[data-testid="text-input"]').click().type(todoName + i).type('{enter}');
      }

      // Select a random todo item
      const randomNum = Math.floor(Math.random() * 3);
      cy.get('[data-testid="todo-item-toggle"]').eq(randomNum).click();

      // Click the completed tab
      cy.get('a[href="#/completed"]').click();


      // Verify the randomly completed item is present
      cy.get('[data-testid="todo-item"]').contains(todoName + (randomNum + 1)).should('exist');
    })
  })
})