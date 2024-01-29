describe('Complete All Todo Items', () => {
  it('All Todo Items are completed', () => {
    cy.fixture('general.json').then((data) => {
      cy.visit(data.todoSite);
      const todoName = "Test"

      // Create several Todo Items
      for (let i = 1; i < 4; i++) {

        cy.get('[data-testid="text-input"]').click().type(todoName + i).type('{enter}');
      }

      // Click down arrow to complete all items
      cy.get('[data-testid="toggle-all"]').click();

      // Verify all todo list items are completed
      cy.get('.todo-list').find('li').each(($li, index) => {
        expect($li).to.have.class('completed');

        cy.wrap($li).find('[data-testid="todo-item-label"]').should($label => {
          const style = window.getComputedStyle($label[0]);
          expect(style.textDecoration).to.include('line-through');
        });
      });
    })
  })
})