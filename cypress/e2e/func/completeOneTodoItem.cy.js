/*
Objective: Verify that clicking the circle next to a todo item marks it as completed.

Test Steps:

1. Add a todo item.
2. Click the circle next to the item.

Expected Result: The item should be marked as completed and have a slash through it.
*/

describe('Complete One Todo Item', () => {
  it('The single todo item is complete', () => {
    cy.fixture('general.json').then((data) => {
      cy.visit(data.todoSite);
      const todoName = "Test 1"

      // Add todo item
      cy.get('[data-testid="text-input"]').click().type(todoName).type('{enter}');

      // Click the circle next to the item
      cy.get('[data-testid="todo-item-toggle"]').click()

      // Verify the todo item is complete
      cy.get('[data-testid="todo-item"]').should('have.class', 'completed');
      cy.get('[data-testid="todo-item-label"]').should($label => {
        const style = window.getComputedStyle($label[0]);
        expect(style.textDecoration).to.include('line-through');
      });
    })
  })
})