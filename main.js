String.prototype.counter = function() {
  return this.split(/\s+/).length;
  
};
window.onload = function() {
  const header = document.querySelector('h1');
  const text = document.querySelector('p');
  text.insertAdjacentHTML('afterend', '<a href="https://forcemipsum.com/">The Text Source</a>');
  header.insertAdjacentHTML('afterend', `<div>word counter: ${text.innerHTML.counter()}</div>`);
  const adjust = (word) => {
    if (word.length > 8 && word.endsWith('.')) {
      return '<span style = "background-color: yellow">' + word + '</span><div></div>';
    } else if (word.length > 8) {
      return '<span style="background-color: yellow">' + word + '</span>';
    } else if (word.endsWith(".")) {
      return word + "<div></div>";
    } else if (word.endsWith("?")) {
        return word.replace("?", "🤔");
    } else if (word.endsWith("!")) {
        return word.replace("!", "😲");
    } else {
        return word;
    };
  };
  text.innerHTML = text.innerText.trim().split(' ').map(adjust).join(' ');
};