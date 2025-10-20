// Fetch the JSON data containing pet details
const petpromise = await fetch("./pets.json");
// Wait for the JSON file to load and parse the data
const pets = await petpromise.json();

// Select the HTML <template> and create a wrapper div
const template = document.querySelector("#animal-card");
const wrapper = document.createElement("div");

// Function to decide how to display pet age text
function decideAgeText(age) { // added (age) as a parameter
  if (!age) {
    return "Less than a year old";
  }
  return age > 1 ? `${age} years old` : "1 year old";
}

// Loop through each pet in the data
pets.forEach(pet => {
  // Clone the template structure
  const clone = template.content.cloneNode(true);

  // Fill in the pet data from JSON
  clone.querySelector("h3").textContent = pet.name;
  clone.querySelector("p").textContent = pet.description;
  clone.querySelector("img").src = pet.photo;

  // Calculate age
  const age = new Date().getFullYear() - pet.birthYear;
  const ageText = decideAgeText(age);

  // Update text inside the clone
  clone.querySelector(".age").textContent = `(${ageText})`;
  clone.querySelector(".species").textContent = `Species: ${pet.species}`;

  clone.querySelector(".name").textContent=`${pet.name}`;

  clone.querySelector(".primary-btn").href=`https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}`;

  // Add the filled template to the wrapper
  wrapper.appendChild(clone);
});

// Finally, add all pet cards to the .animals div
document.querySelector(".animals").appendChild(wrapper);


const filterButtons=document.querySelectorAll(".filter-nav a")
filterButtons.forEach(el=>{
    el.addEventListener("click",e=>handlefilterclick(e))
})

function handlefilterclick(e){
   let target=e.target;

   e.preventDefault()
   filterButtons.forEach(el=>el.classList.remove("active"))
    target.classList.add("active")

    filterpets(target.dataset.filter)
}

function filterpets(species){
    const allpets=document.querySelectorAll(".animal-card");

    if(species==="all"){
        allpets.forEach(el=>{
            el.style.display="block"
        })
    } else {
        allpets.forEach(el=>{
            if(el.querySelector(".species").textContent==`Species: ${species}`){
                el.style.display=""
            } else {
                el.style.display="none"
            }
        })
    }
}