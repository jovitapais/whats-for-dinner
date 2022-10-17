const textarea = document.getElementById('textarea');
const tagsElement = document.getElementById('tags');

// textarea.focus();

function createTags(input) {
  // filter to remove an empty string
  // map to remove white space
  const tags = input.split(',').filter((tag) => tag.trim() !== '').map((tag) => tag.trim());

  // clear tagsElement and set it to empty string
  // before typing in the textarea
  tagsElement.innerHTML = '';
  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsElement.appendChild(tagEl);
  });
}

const randomSelect = () => {
  const times = 30;
  
//start random tag highlight

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      removeHighlightTag(randomTag);
    }, 100);
  }, 100);

  // stop at random tag
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
  tag.classList.add('highlight');
};

const removeHighlightTag = (tag) => {
  tag.classList.remove('highlight');
};
