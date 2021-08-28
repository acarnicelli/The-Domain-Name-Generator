/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // My code
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".us", ".io"];

  pronoun.forEach(pronoun => {
    adj.forEach(adj => {
      noun.forEach(noun => {
        domain.forEach(domain => {
          console.log(pronoun + adj + noun + domain);
        });
      });
    });
  });

  console.log("Hello Rigo from the console!");
};
