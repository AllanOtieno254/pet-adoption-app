# 🐾 PET ADOPTION WEBSITE
<img width="1920" height="1080" alt="cats" src="https://github.com/user-attachments/assets/d2d63be3-cfda-439f-9e43-153cf0596357" />

Welcome to the **Pet Adoption Web App**, a simple, interactive, and responsive website that allows users to explore different pets (dogs, cats, and rabbits) available for adoption.  
This project uses **HTML, CSS, and JavaScript** to dynamically load data from a local `pets.json` file and display pet profiles in a beautiful card layout.  
Users can also filter pets by type using an intuitive navigation bar.

---

## 🌟 Overview

The **Pet Adoption Website** was created to simulate a real-world pet adoption portal.  
It allows users to:
- View all pets dynamically fetched from a JSON file.
- Filter pets by species (Dogs, Cats, or Rabbits).
- View pet details such as name, age, species, and description.
- Navigate with clean and modern UI styling.

This project demonstrates the use of **fetch API**, **template cloning**, **dynamic DOM manipulation**, and **CSS Grid** for responsive layouts.

---

## 📁 Folder Structure


---

## 🧱 Technologies Used

- **HTML5** – For semantic web structure  
- **CSS3** – For layout, colors, transitions, and responsive design  
- **JavaScript (ES6)** – For fetching JSON data, cloning templates, and DOM manipulation  
- **JSON** – For structured pet data storage  

---

## ⚙️ How It Works

1. The `script.js` file fetches pet data from `pets.json` using the `fetch()` API.
2. Each pet object is dynamically inserted into a card layout by cloning an HTML `<template>`.
3. Each card displays:
   - Pet name
   - Age (calculated from birth year)
   - Species
   - Description
   - “Adopt” button linking to the pet’s details
4. The navigation bar allows filtering:
   - All Pets
   - Dogs
   - Cats
   - Rabbits
5. The filter updates the visible pet cards without reloading the page.

---

## 💻 Code Explanation

### 📜 HTML

Defines the structure of the page including:
- Hero section with welcoming text  
- Filter navigation bar  
- Empty `.animals` container for dynamic cards  
- `<template>` used for cloning pet cards dynamically

### 🎨 CSS

Handles all styling including:
- Layouts (CSS Grid and Flexbox)
- Colors, hover effects, and transitions
- Responsive design for both mobile and desktop devices

### ⚡ JavaScript

Performs the following tasks:
- Fetches and parses the `pets.json` file asynchronously
- Clones and populates the template with pet data
- Calculates pet age automatically
- Filters pets based on user’s selection
- Adds event listeners to filter links for interactive navigation

---
##  Javascript core logic

const petpromise = await fetch("./pets.json");
const pets = await petpromise.json();

const template = document.querySelector("#animal-card");
const wrapper = document.createElement("div");

function decideAgeText(age) {
  if (!age) return "Less than a year old";
  return age > 1 ? `${age} years old` : "1 year old";
}

pets.forEach(pet => {
  const clone = template.content.cloneNode(true);
  clone.querySelector("h3").textContent = pet.name;
  clone.querySelector("p").textContent = pet.description;
  clone.querySelector("img").src = pet.photo;

  const age = new Date().getFullYear() - pet.birthYear;
  const ageText = decideAgeText(age);

  clone.querySelector(".age").textContent = `(${ageText})`;
  clone.querySelector(".species").textContent = `Species: ${pet.species}`;
  clone.querySelector(".name").textContent = `${pet.name}`;
  clone.querySelector(".primary-btn").href = `https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}`;

  wrapper.appendChild(clone);
});

document.querySelector(".animals").appendChild(wrapper);


## 🐶 Sample Pet Data (`pets.json`)

```json
[
  { 
    "id": "asjdlkf7982134zio",
    "name": "Meowsalot",
    "photo": "https://learnwebcode.github.io/pet-adoption-data/photos/meowsalot.webp",
    "species": "cat",
    "birthYear": "2019",
    "description": "Meowsalot is a talkative friend that loves to play and is great with children."
  },
  {
    "id": "bnvmzxcv11111111a",
    "name": "Barksalot",
    "photo": "https://learnwebcode.github.io/pet-adoption-data/photos/golden.webp",
    "species": "dog",
    "birthYear": "2022",
    "description": "Barksalot is a sweetheart that loves to play and is great with children."
  }
]
