const form = document.getElementsByTagName('form')[0];
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', addComment);

function addComment(e) {
  e.preventDefault();
  const suggestions = document.querySelector('#suggestions');
  const div = document.createElement('div');
  div.className = 'list-suggestion';
  const h3 = document.createElement('h3');
  h3.innerHTML = input.value;
  const comment = document.createElement('p');
  comment.innerHTML = textarea.value;
  div.appendChild(h3);
  div.appendChild(comment);
  suggestions.appendChild(div);
  input.value = '';
  textarea.value = '';
}
