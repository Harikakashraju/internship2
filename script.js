document.addEventListener('DOMContentLoaded', () => {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const resetButton = document.getElementById('resetButton');
    const successMessage = document.createElement('div');
    successMessage.className = 'successMessage';
    successMessage.innerHTML=`Dragged succesfully`;


  
    let draggedItem = null;
  
    // Event listener for drag start on items
    container1.addEventListener('dragstart', (event) => {
      draggedItem = event.target;
      event.target.classList.add('dragging');
    });
  
    // Event listener for drag end on items
    container1.addEventListener('dragend', (event) => {
      event.target.classList.remove('dragging');
    });
  
    // Event listener for drag over on the drop zone
    container2.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
  
    // Event listener for drop on the drop zone
    container2.addEventListener('drop', (event) => {
      event.preventDefault();
      container2.appendChild(draggedItem);
      draggedItem = null;
      container2.appendChild(successMessage);
    });
  
    // Event listener for reset button click
    resetButton.addEventListener('click', () => {
      container2.innerHTML = '';
      container2.removeChild(successMessage);
      container1.innerHTML = `
        <div class="item" draggable="true">Item 1</div>
        <div class="item" draggable="true">Item 2</div>
        <div class="item" draggable="true">Item 3</div>
        <div class="item" draggable="true">Item 4</div>
        <div class="item" draggable="true">Item 5</div>
      `;
    });
  });
  