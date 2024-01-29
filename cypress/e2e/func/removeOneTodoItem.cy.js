/*
Objective: Verify that hovering over a todo item and clicking the 'x' removes it.

Test Steps:

1. Add a todo item.
2. Hover over the item.
3. Click the 'x' that appears.

Expected Result: The item should be removed from the list.
*/

describe('Remove One Todo Item', () => {
  it('The single todo item is removed', () => {
    cy.fixture('general.json').then((data) => {
      cy.visit(data.todoSite);
      const todoName = "Test 1"

      // Add todo item
      cy.get('[data-testid="text-input"]').click().type(todoName).type('{enter}');

      // Click the x button (unable to hover in cypress, the element is visible if the element has the state of :hover)
      cy.get('[data-testid="todo-item-button"]').invoke('attr', 'style', 'display: block').click();

      // Verify there are no todo items
      cy.get('[data-testid="todo-list"]').should('be.empty');
    })
  })
})