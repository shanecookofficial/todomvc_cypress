describe('Initial Site Load', () => {
  it('ToDoMVC loads with a blank todo list', () => {
    // Open the TodoMVC site
    cy.visit('https://todomvc.com/examples/react/dist/')

    // Check that the todo list is initially empty

    // Todo input box is present
    cy.get('input.new-todo#todo-input[data-testid="text-input"]').should('exist');

    // toggle-all-container is not present (only present when todo-list is not empty)
    cy.get('[data-testid="toggle-all"]').should('not.exist');

    // todo-list is empty
    cy.get('[data-testid="todo-list"]').should('be.empty');

    // footer is not present (only present when todo-list is not empty)
    cy.get('[data-testid="footer"]').should('not.exist');
  })
})