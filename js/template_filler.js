/*
Wrap all rendering logic inside DOMContentLoaded to ensure:
- HTML templates are present in the DOM-Document Object Model
- The DOM is fully loaded before running the script
- Containers exist when we try to select them
*/
document.addEventListener('DOMContentLoaded', () => {
      
  /* 1.Func to render a template array into a container
  renderItems
    * - Clones a <template> element for each data item and inserts it into the page.
    *
    * @templateId, string  :        the ID of the <template> in your HTML
    * @containerSelector, string :  the CSS selector for the target container
    * @data, array :                the array of data objects
    * @fillFn, func  :              callback(fn) to populate each clone with data

  */
  function renderItems(templateId, containerSelector, data, fillFn) {
    // Find the <template> in the DOM
    const tpl = document.getElementById(templateId);
    // Find the container element where items will be appended
    const container = document.querySelector(containerSelector);
    // wipe old content so not double-render
    container.innerHTML = '';
    // Loop over each data object
    data.forEach(item => {
      // Clone the <template> content
      const clone = tpl.content.cloneNode(true);
      // Use the provided fillFn to insert data into the clone
      fillFn(clone, item);
      // Append the populated clone to the container
      container.appendChild(clone);
    });
  }    

  // 2. Fill project cards
  renderItems('project-item-template', '.projects-grid', projects, (clone, p) => {
    // Set the image src and alt
    clone.querySelector('img').src = p.img;
    clone.querySelector('img').alt = p.alt;
    // Set the title text
    clone.querySelector('h3').textContent = p.title;
    // Set the description text
    clone.querySelector('p').textContent = p.desc;
    // Configure the "View Project" link
    const a = clone.querySelector('a.project-button');
    a.href = p.url;

    if (p.status === 'completed') {
     // only give it a real href if completed
     a.href = p.url;
   } else {
     // otherwise remove the element entirely
     a.remove();
   }

    // Grab the badge span
    const badge = clone.querySelector('.status-badge');
    
    // remove any old status classes
    badge.classList.remove('completed', 'on-going', 'scheduled');

    badge.textContent = {
      'completed': 'Completed',
      'on-going':  'On Going',
      'scheduled': 'Scheduled'
    }[p.status];

    // Add a status-specific class
    badge.classList.add(p.status);  // adds 'completed', 'on-going' or 'scheduled'
    });
    
  // 3. Fill skills
  renderItems('skill-item-template', '.skills-grid', skills, (clone, s) => {
    clone.querySelector('img').src = s.img;
    clone.querySelector('img').alt = s.alt;
    clone.querySelector('p').textContent = s.name;
  });
});