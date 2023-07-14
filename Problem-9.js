// copy to clipboard
const copyToClipboard = (data) => {
  const textarea = document.createElement("textarea");
  textarea.value = data;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

const handleCopy = function () {
  const element = document.getElementById("text");
  copyToClipboard(element.innerText);
};
