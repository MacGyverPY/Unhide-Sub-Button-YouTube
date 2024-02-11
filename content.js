// content.js

// Function to change 'invisible' elements to 'visible'
function changeVisibility(mutationsList, observer) {
  const invisibleElements = document.querySelectorAll('.invisible');
  invisibleElements.forEach(element => {
    element.style.visibility = 'visible';
  });
}

// Create a Mutation Observer to watch for changes in the DOM
const observer = new MutationObserver(changeVisibility);

// Start observing changes in the entire document body, including its descendants
observer.observe(document.body, { childList: true, subtree: true });
