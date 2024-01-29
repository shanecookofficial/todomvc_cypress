/*
Objective: Verify that a user can create a todo item.

Test Steps:

1. Click on the "What needs to be done" bar.
2. Type a todo item name.
3. Press Enter.

Expected Result: The new todo item should appear in the list.
*/

describe('Create a Todo Item', () => {
  it('A Todo Item was created', () => {
    cy.fixture('general.json').then((data) => {
      cy.visit(data.todoSite);
      const todoName = "Test 1"

      // Click on the "What needs to be done" bar

      // Type a todo item name

      // Press enter
      cy.get('[data-testid="text-input"]').click().type(todoName).type('{enter}');


      // Verify that a new item has been created

      // There should only be 1 li created
      cy.get('[data-testid="todo-list"]').find('li').should('have.length', 1);

      // The li should contain the text stored in the todoName variable
      cy.get('.view').first().find('[data-testid="todo-item-label"]').should('have.text', todoName);

    })
  })
})