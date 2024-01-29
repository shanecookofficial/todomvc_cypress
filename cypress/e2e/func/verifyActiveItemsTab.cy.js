describe('Verify Active Items Tab', () => {
  it('Only active items are shown in the active items tab', () => {
    cy.fixture('general.json').then((data) => {
      cy.visit(data.todoSite);
      const todoName = "Test"

      // Create several Todo Items
      for (let i = 1; i < 4; i++) {

        cy.get('[data-testid="text-input"]').click().type(todoName + i).type('{enter}');
      }

      // Click down arrow to complete all items
      cy.get('[data-testid="toggle-all"]').click();

      // Select a random todo item
      const randomNum = Math.floor(Math.random() * 3);
      cy.get('[data-testid="todo-item-toggle"]').eq(randomNum).click();

      // Click the completed tab
      cy.get('a[href="#/active"]').click();


      // Verify the randomly completed item is present
      cy.get('[data-testid="todo-item"]').contains(todoName + (randomNum + 1)).should('exist');
    })
  })
})