import { getRandomIndices } from '../../utils'

describe('Verify Clear Complete Button', () => {
  it('The Clear Complete button removed all completed items', () => {
    cy.fixture('general.json').then((data) => {
      cy.visit(data.todoSite);
      const todoName = "Test"

      // Create several Todo Items
      const randomNum = Math.floor(Math.random() * 10) + 1;
      for (let i = 1; i <= randomNum; i++) {
        cy.get('[data-testid="text-input"]').click().type(todoName + i).type('{enter}');
      }

      // Verify the total number of items matches the number displayed on the counter
      cy.get('.todo-count').invoke('text').then((text) => {
        const numberFromText = parseInt(text.match(/\d+/)[0], 10);
        expect(numberFromText).to.equal(randomNum);
      });

      // Complete a random number of items
      cy.get('[data-testid="todo-item"]').then(listItems => {
        const totalItems = listItems.length;
        const randomCount = Math.floor(Math.random() * totalItems) + 1;
        const randomIndices = getRandomIndices(randomCount, totalItems);

        randomIndices.forEach(index => {
          // Check the checkbox within the randomly selected item
          cy.wrap(listItems).eq(index).find('input[type="checkbox"]').click();
        });

        cy.get('.todo-count').invoke('text').then((text) => {
          const numberFromText = parseInt(text.match(/\d+/)[0], 10);
          expect(numberFromText).to.equal(randomNum - randomCount);
        });

        // Click the Clear Completed button
        cy.get('.clear-completed').click();

        // Verify all of the completed items are removed 
        cy.get('[data-testid="todo-list"]').find('li').should('have.length', randomNum - randomCount);
      });
    });
  });
});
