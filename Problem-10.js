// destructuring alieses

const WebDev = {
  languages: "JavaScript",
  founded: 1995,
  Company: "Netscape Corporation",
};

const { languages: languName, Company: Name } = WebDev;

console.log(languName);
