'use strict';

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const parent = input.parentElement;

    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);

    const name = input.name;
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

    label.textContent = capitalized;

    input.placeholder = capitalized;

    parent.insertBefore(label, input);
  });
});
