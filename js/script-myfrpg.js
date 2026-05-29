// ======================== GLOBAL VARIABLES ======================== //

const races = {
  human: {
    name: "Human",
    description: "Arrivals to Eldora rather than its originators, humans are defined by their resilience, adaptability, and relentless drive to find purpose in the unknown. They are builders, leaders, and dreamers—quick to shape the world around them, even when it is not their own. Their kingdoms rise from ambition and belief, fueled by a desire to endure, to belong, and to leave a lasting mark in a land that once stood beyond their reach. Versatile and resourceful, humans excel at strategy and cooperation, though their pride and impatience often place them at odds with both allies and rivals. Yet it is this same drive that has allowed them to stand alongside others in moments that demanded unity and resolve. In times when the fate of the world hung uncertain, humans proved capable not only of ambition, but of courage, sacrifice, and shared purpose—becoming a people not just defined by what they seek, but by what they choose to protect.",
    raceImage1: "img/human-kingdom.png",
    raceImage2: "img/human-battle.png",
    raceImage3: "img/human-battle.png",
    racialBonuses: {
      bonus1: {
        name: "Adaptive Potential",
        description: "+1 to chosen attribute"
      },
      bonus2: {
        name: "Second Wind",
        description: "Once per encounter, recover 20% HP and Stamina when dropping below 80% HP"
      },
      bonus3: {
        name: "Fast Learner",
        description: "+10% XP gain to chosen proficiency"
      }
    }
  },

  elf: {
    name: "Elf",
    description: "The Elves were the first to awaken beneath the starlit boughs of Eldora, their spirits intertwined with the rhythm of nature and the flow of magic.Graceful, ancient, and contemplative, they craft living cities and art that endure for millennia.Their wisdom is matched only by their melancholy, for long life teaches both wonder and sorrow.Elves revere balance and consequence, believing every action ripples through eternity.In war, they move like whispers of wind and light — precise, silent, and devastating — favoring archery, magic, and misdirection over brute force.",
    raceImage1: "img/elf-kingdom.png",
    raceImage2: "img/elf-battle.png",
    raceImage3: "img/elf-battle.png",
    racialBonuses: {
      bonus1: {
        name: "Eldertide Grace",
        description: "+2 DEX or +2 WIS"
      },
      bonus2: {
        name: "Ancient Blessing",
        description: "Once per encounter, add a d6 saving throw to any proficiency check"
      },
      bonus3: {
        name: "Keen Senses",
        description: "+75% Chance to detect hidden traps, weak illusions, or movement in foggy areas or dark rooms"
      }
    },
  },

  dwarf: {
    name: "Dwarf",
    description: "Forged in the deep places of the world, Dwarves are children of stone and flame. Their subterranean halls echo with the songs of forges and the oaths of kin. Honor, craftsmanship, and loyalty define their way of life, and their creations — be they weapons or monuments — endure as testaments to their pride. Their resilience is legendary, but their stubbornness can harden into isolation. They worship the Great Forge, believing each soul to be a spark struck from its divine fire. In battle, they are immovable, fighting with disciplined formations, unmatched craftsmanship, and an unyielding will.",
    raceImage1: "img/dwarf-kingdom.png",
    raceImage2: "img/dwarf-battle.png",
    raceImage3: "img/dwarf-battle.png",
    racialBonuses: {
      bonus1: {
        name: "Stoneborn Fortitude",
        description: "+2 CON"
      },
      bonus2: {
        name: "Stoneblood",
        description: "Temporarily reduce all damage taken by 20% and 50% resistance to knockback or stagger for 5 seconds"
      },
      bonus3: {
        name: "Iron Grip",
        description: "-75% Chance to be disarmed or slip when hanging on ledges, vines, cliffs, ropes or enemy limbs"
      }
    },
  },

  hearthkin: {
    name: "Hearthkin",
    description: "Once nomads of the open plains, Hearthkin now dwell in quiet villages where laughter and warmth define their days. They live simply yet deeply, finding joy in family, good harvests, and stories shared by the hearth. Though small in stature, their courage runs deep — born from generations of surviving in the shadows of greater powers. Their belief in hearth spirits and humble virtues gives them strength unseen. On the battlefield, they rely on wit and agility, striking from cover or laying clever traps, proving that heart often outweighs might.",
    raceImage1: "img/hearthkin-kingdom.png",
    raceImage2: "img/hearthkin-battle.png",
    raceImage3: "img/hearthkin-battle.png",
    racialBonuses: {
      bonus1: {
        name: "Quick Witted",
        description: "+2 DEX or +2 INT"
      },
      bonus2: {
        name: "Fortunate Twist",
        description: "Once per encounter, turn a failed roll into a partial success"
      },
      bonus3: {
        name: "Nimblefoot",
        description: "+15% to dodge and stealth"
      }
    },
  },
  catlan: {
    name: "Catlan",
    description: "Descendants of a distant and unknown origin, the Catlans blend instinct, grace, and intellect in equal measure. Displaced and unrooted, they move through the world as hunters, wanderers, and quiet observers—guided less by law and more by intuition and experience. Their communities are bound by trust and shared understanding rather than rigid structure, valuing awareness of both self and surroundings above all else. Some speak of a guiding presence in the night sky, not as a god, but as something felt rather than known—an instinctive pull that shapes their path. In battle, Catlans are swift and unpredictable, moving like shifting shadows—striking with precision before vanishing from reach.",
    raceImage1: "img/catlan-kingdom.png",
    raceImage2: "img/catlan-battle.png",
    raceImage3: "img/catlan-battle.png",
    racialBonuses: {
      bonus1: {
        name: "Feral",
        description: "+2 STR or +2 DEX"
      },
      bonus2: {
        name: "Pounce",
        description: "Leap attack that spans 2 distance modifiers, deals 25% of attack damage, and 50% chance to stagger enemies"
      },
      bonus3: {
        name: "Night Vision",
        description: "Can see clearly in low-light and partial darkness"
      }
    },
  },
};

const raceLinks = {
  human: "myfrpg-race-select-humans.html",
  elf: "myfrpg-race-select-elves.html",
  dwarf: "myfrpg-race-select-dwarves.html",
  hearthkin: "myfrpg-race-select-hearthkin.html",
  catlan: "myfrpg-race-select-catlans.html"
};

const playerChoices = {};

let selectedRace = "";
let lockedItem = null;

const racialBonuses = {};

const gameText = document.querySelector('.gameText'); // Target the dynamic text container
const galleryItems = document.querySelectorAll('.gallery-item'); // Select all gallery items
const galleryItemsStartingZones = document.querySelectorAll('.gallery-item-startingzones'); // Select all starting zone gallery items
const lockSelect = document.querySelectorAll('.lockSelect'); // Select locked items
const mainInfoText = document.getElementById("mainInfoText");
const mainInfoText2 = document.getElementById("mainInfoText2");
const extraInfoText = document.getElementById("extraInfoText");
const extraInfoText2 = document.getElementById("extraInfoText2");
const confirmBtn = document.getElementById("confirmBtn");
const backBtn = document.getElementById("backBtn");
const humansStartingZone = document.querySelector('.humansStartingzone');
const elvesStartingLineage = document.querySelector('.elvesStartingLineage');
const dwarvesStartingLegacy = document.querySelector('.dwarvesStartingLegacy');
const hearthkinStartingClan = document.querySelector('.hearthkinStartingClan');
const catlansStartingGrounds = document.querySelector('.catlansStartingGrounds');
const centerText = document.querySelector('.centerText');

// ================================================================== //


// ======================== PAGE LOADING EFFECT ============================== //
// This script adds a "loaded" class to the body element once the page has fully loaded, triggering a fade-in effect defined in CSS. The body starts with an opacity of 0, and when the "loaded" class is added, it transitions to full opacity over 0.3 seconds, creating a smooth fade-in effect for the entire page content.

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
// =========================================================================== //


// ==================== GALLERY ITEM POPULATION - CHOOSE RACE PAGE ========================== //
galleryItems.forEach(item => {

  const raceKey = item.dataset.race;
  const raceData = races[raceKey];

  if (!raceData) return;

  // Image population
  const images = item.querySelectorAll("img");

  images[0].src = raceData.raceImage1;
  images[1].src = raceData.raceImage2;
  images[2].src = raceData.raceImage3;

  // Name population
  item.querySelector(".image-name").textContent =
    raceData.name;

  // Description population
  item.querySelector(".describe-main").innerHTML =
    `<p>${raceData.description}</p>`;

  // Racial bonuses population
  let bonusesHTML = "";

  for (const bonusKey in raceData.racialBonuses) {

    const bonus =
      raceData.racialBonuses[bonusKey];

    bonusesHTML += `
      <span class='racials'>
        <strong>${bonus.name}:</strong>
      </span>
      ${bonus.description}<br>
    `;
  }

  item.querySelector(".describe-extra").innerHTML =
    bonusesHTML;

});

// ========================================================================================== //


// ==================== GALLERY ITEM POPULATION - SELECTED RACE PAGE ========================== //
galleryItems.forEach(item => {

  const factionKey = item.dataset.faction;
  const factionData = factions[factionKey];

  if (!factionData) return;

  // Image population
  const images = item.querySelectorAll("img");

  images[0].src = factionData.factionImage;


  // Name population
  item.querySelector(".image-name").textContent =
    factionData.name;

  // Description population
  item.querySelector(".describe-main2").innerHTML =
    `<p>${factionData.description}</p>`;

  // Faction bonuses population
  item.querySelector(".describe-extra2").innerHTML =
    `<p>${factionData.bonusDescription}</p>`;

});

// ========================================================================================== //


// ======================== GALLERY CLICK TEXT EFFECT - CHOOSE RACE PAGE ======================== //
// When the user clicks on an image (or its name), this script changes the
// text inside the `.gameText` element. Each gallery item has its own message
// stored in the `data-text` attribute. Clicking a new image replaces the text.
// Clicking outside or another image resets or changes the message accordingly.

// Loop through each gallery item and attach click event listeners
galleryItems.forEach(item => {
  const describeMain = item.querySelector('.describe-main');
  const describeExtra = item.querySelector('.describe-extra');

  // When an image is clicked, update the text display
  item.addEventListener('click', () => {
    if (!describeMain || !describeExtra) return;
    mainInfoText.parentElement.classList.add("fade-out");
    extraInfoText.parentElement.classList.add("fade-out");

    setTimeout(() => {
      mainInfoText.innerHTML = describeMain.innerHTML;
      extraInfoText.innerHTML = describeExtra.innerHTML;
      centerText.style.textAlign = "left";

      mainInfoText.parentElement.classList.remove("fade-out");
      mainInfoText.parentElement.classList.add("fade-in");
      extraInfoText.parentElement.classList.remove("fade-out");
      extraInfoText.parentElement.classList.add("fade-in");

      setTimeout(() => {
        mainInfoText.parentElement.classList.remove("fade-in");
        extraInfoText.parentElement.classList.remove("fade-in");
      }, 300);
    }, 200);
  });
});
// =========================================================================== //


// ======================== GALLERY CLICK TEXT EFFECT - SELECTED RACE PAGE ======================== //
// When the user clicks on an image (or its name), this script changes the
// text inside the `.gameText` element. Each gallery item has its own message
// stored in the `data-text` attribute. Clicking a new image replaces the text.
// Clicking outside or another image resets or changes the message accordingly.

// Loop through each gallery item and attach click event listeners
galleryItems.forEach(item => {
  const describeMain2 = item.querySelector('.describe-main2');
  const describeExtra2 = item.querySelector('.describe-extra2');

  // When an image is clicked, update the text display
  item.addEventListener('click', () => {
    if (!describeMain2 || !describeExtra2) return;
    mainInfoText2.parentElement.classList.add("fade-out");
    extraInfoText2.parentElement.classList.add("fade-out");

    setTimeout(() => {
      mainInfoText2.innerHTML = describeMain2.innerHTML;
      extraInfoText2.innerHTML = describeExtra2.innerHTML;
      centerText.style.textAlign = "left";

      mainInfoText2.parentElement.classList.remove("fade-out");
      mainInfoText2.parentElement.classList.add("fade-in");
      extraInfoText2.parentElement.classList.remove("fade-out");
      extraInfoText2.parentElement.classList.add("fade-in");

      setTimeout(() => {
        mainInfoText2.parentElement.classList.remove("fade-in");
        extraInfoText2.parentElement.classList.remove("fade-in");
      }, 300);
    }, 200);
  });
});
// =========================================================================== //


// ============== RESET TEXT WHEN CLICKING ANYWHERE ON THE PAGE - CHOOSE RACE PAGE ============== //
// Reset text when user clicks anywhere else on the page
document.addEventListener('click', (e) => {
  // Check if the clicked element is NOT a gallery item
  if (!e.target.closest('.gallery-item' || '.gallery-item-startingzones')) {
    // Fade-out before updating
    mainInfoText.parentElement.classList.add("fade-out");
    extraInfoText.parentElement.classList.add("fade-out");

    setTimeout(() => {
      // Reset the default messages
      mainInfoText.innerHTML = 'The people you descend from shape the strength within you';
      extraInfoText.innerHTML = 'Racial Strenghts and Passives';
      centerText.style.textAlign = "center"; // Re-center the text

      // Fade back in
      mainInfoText.parentElement.classList.remove("fade-out");
      mainInfoText.parentElement.classList.add("fade-in");
      extraInfoText.parentElement.classList.remove("fade-out");
      extraInfoText.parentElement.classList.add("fade-in");

      // Clean up fade-in class
      setTimeout(() => {
        mainInfoText.parentElement.classList.remove("fade-in");
        extraInfoText.parentElement.classList.remove("fade-in");
      }, 300);
    }, 200);
  }
});
// =========================================================================== //


// ============== RESET TEXT WHEN CLICKING ANYWHERE ON THE PAGE - SELECTED RACE PAGE ============== //
// Reset text when user clicks anywhere else on the page
document.addEventListener('click', (e) => {
  // Check if the clicked element is NOT a gallery item
  if (!e.target.closest('.gallery-item' || '.gallery-item-startingzones')) {
    // Fade-out before updating
    mainInfoText2.parentElement.classList.add("fade-out");
    extraInfoText2.parentElement.classList.add("fade-out");

    setTimeout(() => {
      // Reset the default messages
      if (humansStartingZone) {
        mainInfoText2.innerHTML = 'Each land holds its own stories, dangers, and opportunities';
        extraInfoText2.innerHTML = 'Origin Traits';
      } else if (elvesStartingLineage) {
        mainInfoText2.innerHTML = 'Each lineage carries an ancient bond—shaping how you see, feel, and move through the world.';
        extraInfoText2.innerHTML = 'Lineage Traits';
      } else if (dwarvesStartingLegacy) {
        mainInfoText2.innerHTML = 'Each path is a legacy forged in the wake of ruin—shaping how you endure, rise, or move through the world.';
        extraInfoText2.innerHTML = 'Legacy of the Forge';
      } else if (hearthkinStartingClan) {
        mainInfoText2.innerHTML = 'Each clan reflects a way of life—shaped by the home you build, the values you carry, and the people you stand beside.';
        extraInfoText2.innerHTML = 'Ways of the Hearth';
      } else if (catlansStartingGrounds) {
        mainInfoText2.innerHTML = 'Each hunting ground shapes your instincts—defining how you move, adapt, and survive in the wild.';
        extraInfoText2.innerHTML = 'Instincts of the Wild';
      }
      centerText.style.textAlign = "center"; // Re-center the text

      // Fade back in
      mainInfoText2.parentElement.classList.remove("fade-out");
      mainInfoText2.parentElement.classList.add("fade-in");
      extraInfoText2.parentElement.classList.remove("fade-out");
      extraInfoText2.parentElement.classList.add("fade-in");

      // Clean up fade-in class
      setTimeout(() => {
        mainInfoText2.parentElement.classList.remove("fade-in");
        extraInfoText2.parentElement.classList.remove("fade-in");
      }, 300);
    }, 200);
  }
});
// =========================================================================== //


// ===== IMAGE LOCK/UNLOCK SYSTEM & SAVE RACE CHOICE - CHOOSE RACE PAGE  ===== //

galleryItems.forEach(item => {

  item.addEventListener("click", function (e) {

    e.stopPropagation(); // Prevent document click from firing

    // Unlock previously selected image if different
    if (lockedItem && lockedItem !== item) {
      lockedItem.classList.remove('locked'); //"locked" is a CSS class I've created that applies the visual effect of being locked (e.g., a border or overlay)
    }

    // Lock the clicked image
    item.classList.add('locked');
    lockedItem = item;

    // SAVE CLICKED RACE KEY
    selectedRace = item.dataset.race;
    console.log("Selected Race:");
    console.log(selectedRace);

    // SAVE RACE DATA TO PLAYERCHOICES
    playerChoices.race = {
      key: selectedRace,
      ...races[selectedRace]
    };
    console.log("Player Choices:");
    console.log(playerChoices);

  });

});

// Handle click outside gallery items
document.addEventListener('click', (e) => {

  if (
    e.target.closest('.gallery-item') ||
    e.target.closest('#confirmBtn') ||
    e.target.closest('#backBtn')
  ) {
    return;
  }

  if (lockedItem) { // <-- This check prevents uncaught errors
    lockedItem.classList.remove('locked');
    lockedItem.removeAttribute('background'); // Optional: Clear data-text on unlock
    lockedItem = null;
    selectedRace = "";
    delete playerChoices.race;
    console.log("Race Deselected");
  }
});

// Confirm selection
confirmBtn.addEventListener('click', () => {
  if (!selectedRace) {
    alert("Please choose a race first.");
    return;
  }

  localStorage.setItem(
    "playerChoices",
    JSON.stringify(playerChoices)
  );

  console.log("Saved!");
  console.log(playerChoices);

  window.location.href = raceLinks[selectedRace];
});

// Back button simply redirects to the previous page without affecting playerChoices
backBtn.addEventListener('click', () => {
  window.location.href = "myfrpg-race-select.html";
});
// ============================================================================ //


// ======================== RESPONSIVE MODAL ======================== //
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("mobileModal");
  const closeBtn = document.querySelector(".close-btn");
  const modalMainText = document.getElementById("modalMainText");
  const modalExtraInfo = document.getElementById("modalExtraInfo");

  // Select all gallery items
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(item => {
    item.addEventListener("click", function () {
      // Pull the text from data attributes
      const mainText = item.querySelector('.describe-main').innerHTML;
      const extraText = item.querySelector('.describe-extra').innerHTML;

      // Insert the text into modal
      modalMainText.innerHTML = mainText;
      modalMainText.style.fontSize = "1.1rem";
      modalExtraInfo.innerHTML = extraText;
      modalExtraInfo.style.fontSize = "1.05rem";

      // Only open modal if screen width <= 768px
      if (window.innerWidth <= 1200) {
        modal.style.display = "block";
      }
    });
  });

  // Close logic
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
// ================================================================== //











/*
// Codes below are not being used right now but may be useful later

// ====== LOCK SELECT AND UNLOCK ON CLICK, AND UNLOCK WHEN CLICKING OUTSIDE ===== //

// Handle click on gallery items
lockSelect.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent document click from firing

    // Unlock previously selected image if different
    if (lockedItem && lockedItem !== item) {
      lockedItem.classList.remove('locked');
    }

    // Lock the clicked image
    item.classList.add('locked');
    chosenRace = item.dataset.race;
    lockedItem = item;

    console.log("Selected:", chosenRace);
  });
});

// Handle click outside gallery items
document.addEventListener('click', () => {
  if (lockedItem) { // <-- This check prevents uncaught errors
    lockedItem.classList.remove('locked');
    lockedItem.removeAttribute('background'); // Optional: Clear data-text on unlock
    chosenRace = null;
    lockedItem = null;
  }
});

// Confirm selection
confirmBtn.addEventListener('click', () => {
  if (!chosenRace) {
    alert("Please choose a race first.");
    return;
  }

  window.location.href = raceLinks[chosenRace];
});

backBtn.addEventListener('click', () => {
  window.location.href = "myfrpg-race-select.html";
});
// ========================================================================================== //

// ====== SAVE SELECTED RACE TO PLAYERCHOICES OBJECT AND LOCALSTORAGE ON CONFIRM BUTTON CLICK ===== //

galleryItems.forEach(item => {

  item.addEventListener("click", function () {

    // SAVE CLICKED RACE KEY
    selectedRace = item.dataset.race;
    console.log(selectedRace);

    // SAVE RACE DATA TO PLAYERCHOICES
    playerChoices.race = {
      key: selectedRace,
      ...races[selectedRace]
    };
    console.log(playerChoices);

  });

});

// Confirm button saves player choices to localStorage and logs a confirmation message
confirmBtn.addEventListener("click", function () {

  localStorage.setItem(
    "playerChoices",
    JSON.stringify(playerChoices)
  );

  console.log("Saved!");
  console.log(playerChoices);

});

// ============================================================================================== //

// ======================== SLIDESHOW (Character Select Page) ======================== //
// from https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return; // no slideshow on this page

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  console.log(slideIndex);
  slideIndexToClassName(slideIndex);
}

// Initialize slideshow only if present
if (document.getElementsByClassName("mySlides").length > 0) {
  showSlides(slideIndex);
}


// ======================== CLASS SELECTION ======================== //
function slideIndexToClassName(slideIndex) {
  const classMap = ["Warrior", "Rogue", "Wizard", "Ranger", "Cleric"];
  const classLoreShort = [
    "Forged in the crucible of Eldora's endless wars, Warriors are living bulwarks of steel and fury. They charge headlong into danger, shielding the weak and breaking enemy lines with unmatched strength.",
    "From the shadowed alleys of Serathorne to the ruins of fallen empires, Rogues thrive in the chaos between law and lawlessness. Masters of stealth, trickery, and precision, they strike where it hurts most.",
    "In Eldora, magic is power—and few wield it as dangerously as Wizards. Scholars of the arcane and architects of reality, they bend the fabric of the world with spell and scroll.",
    "Wanderers of the wilds, Rangers walk paths no others dare. With eyes sharp as eagle talons and the bond of beast and bow, they are Eldora's silent guardians of forest, fang, and freedom.",
    "Chosen by the gods or cursed by fate, Clerics channel divine will into radiant miracles. Whether healing the wounded or banishing darkness, they are the sacred flame in Eldora's darkest nights."
  ];

  const className = classMap[slideIndex - 1];
  const classDescribe = classLoreShort[slideIndex - 1];

  selectedClass = className.toLowerCase();

  const classNameEl = document.getElementById("className");
  const classDescribeEl = document.getElementById("classDescribe");

  if (classNameEl) classNameEl.textContent = className;
  if (classDescribeEl) classDescribeEl.textContent = classDescribe;

  updateCharacterDetails();
}


// ======================== GENDER & RACE ======================== //
function updateCharacterGender() {
  const genderRadios = document.getElementsByName("gender");
  if (!genderRadios.length) return;

  for (let radio of genderRadios) {
    if (radio.checked) {
      selectedGender = radio.value;
    }
  }

  console.log(selectedGender);
  updateCharacterDetails();
}

function updateCharacterRace() {
  const raceRadios = document.getElementsByName("race");
  if (!raceRadios.length) return;

  for (let radio of raceRadios) {
    if (radio.checked) {
      selectedRace = radio.value;
    }
  }

  console.log(selectedRace);
  updateCharacterDetails();
}


// ======================== UPDATE CHARACTER IMAGE ======================== //
function updateCharacterDetails() {
  const slides = document.getElementsByClassName("mySlides");
  if (!slides.length) return;

  const currentSlide = slides[slideIndex - 1];
  const img = currentSlide.querySelector(".characterImage");

  if (img) {
    img.src = `img/${selectedGender}-${selectedRace}-${selectedClass}.png`;
    img.alt = `Image of a ${selectedGender} ${selectedRace} ${selectedClass}`;
  }
}


// ======================== VIEW STATS BUTTON (Character Select Page) ======================== //
let selectedChampionImg = "";
let selectedChampionRaceClass = "";

const confirmBtn = document.getElementById("confirmBtn");

if (confirmBtn) {
  confirmBtn.addEventListener("click", () => {
    selectedChampionImg = `${selectedGender}-${selectedRace}-${selectedClass}`;
    selectedChampionRaceClass = `${selectedRace} ${selectedClass}`;
  });
}


// ======================== TRANSFER TO STATS PAGE ======================== //
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function transformRace(race) {
  const lower = race.toLowerCase();
  if (lower === "elf") return "Elven";
  if (lower === "dwarf") return "Dwarven";
  return capitalize(race);
}

if (confirmBtn) {
  confirmBtn.addEventListener("click", function () {
    if (selectedChampionImg && selectedChampionRaceClass) {
      let [race, charClass] = selectedChampionRaceClass.split(" ");

      const transformedRace = transformRace(race);
      const transformedClass = capitalize(charClass);

      const finalRaceClass = `${transformedRace} ${transformedClass}`;

      localStorage.setItem("selectedChampionImage", selectedChampionImg);
      localStorage.setItem("selectedChampionRaceClass", finalRaceClass);

      window.location.href = "myfrpg-stats-page.html";
    } else {
      alert("Please select a champion first!");
    }
  });
}


// ======================== STATS PAGE SCRIPT ======================== //
if (document.getElementById("championName")) {
  const selectedChampionImg = localStorage.getItem("selectedChampionImage");
  const selectedChampionRaceClass = localStorage.getItem("selectedChampionRaceClass");

  document.getElementById("championName").textContent =
    selectedChampionRaceClass ? selectedChampionRaceClass : "No Champion Selected";

  if (selectedChampionImg) {
    document.getElementById("championImage").src = "img/" + selectedChampionImg.toLowerCase() + ".png";
  }

  if (selectedChampionRaceClass) {
    extendedCharacterLore(selectedChampionRaceClass);
  }

  function extendedCharacterLore(className) {
    const classMap2 = ["Human Warrior", "Human Rogue", "Human Wizard", "Human Ranger", "Human Cleric", "Elven Warrior", "Elven Rogue", "Elven Wizard", "Elven Ranger", "Elven Cleric"];
    const classLoreLong = [
      `<span style="color:#f0d87a;"><strong>Origin:</strong></span> Human Warriors trace their lineage back to the fractured kingdoms of the Age of Iron, when rival clans battled endlessly over fertile lands and dwindling resources. With no innate magic like the Elves nor the endurance of Dwarves, humans forged their strength through relentless training, tactics, and sheer willpower.<br><br>
      <span style="color:#f0d87a;"><strong>Philosophy:</strong></span> For humans, the Warrior’s path is less about glory and more about survival. They believe discipline and adaptability make them dangerous—no matter the weapon, no matter the field, a Warrior finds a way to prevail. “A dull blade in steady hands,” they say, “cuts deeper than a master’s sword in careless grip.<br><br>
      <span style="color:#f0d87a;"><strong>Role in Human Realms:</strong></span> Human Warriors form the bulk of every king’s levy and the core of most mercenary companies. They are soldiers, bodyguards, gladiators, and sometimes rebels. While knights swear to crowns and noble houses, Warriors belong to the people—common men and women who pick up steel to protect their kin.`,

      `<span style="color:#f0d87a;"><strong>Origin:</strong></span> Human Rogues are born from necessity, not nobility. In crowded cities and war-torn kingdoms, survival often depends on quick thinking and quicker hands. Where a warrior wears steel, a rogue wears anonymity; where a wizard casts spells, a rogue weaves lies and silence. They thrive in the cracks of civilization, moving between merchant guilds, thieves’ dens, and royal courts with the same practiced ease.<br><br>
      <span style="color:#f0d87a;"><strong>Philosophy:</strong></span> Rogues believe that strength lies not in muscle, but in foresight and subtlety. Where others charge into battle, the Rogue slips around it, striking only when victory is assured. They live by unwritten codes of silence, loyalty, or betrayal—depending on which earns them the most coin or survival.<br><br>
      <span style="color:#f0d87a;"><strong>Role in Human Realms:</strong></span> Rogues thrive in cities and chaos alike. They are thieves, spies, assassins, scouts, and smugglers—often feared as shadows who serve no master but themselves. Yet in times of war, kings and rebels alike employ them, knowing a single dagger in the dark can do what a thousand soldiers cannot.`,

      `<span style="color:#f0d87a;"><strong>Origin:</strong></span> Human Wizards are heirs to a legacy born of relentless curiosity. Unlike other races, who may inherit magic as birthright or divine blessing, humans wrestled it from the very fabric of the world. Through centuries of trial, failure, and sacrifice, they unlocked secrets hidden in ancient tomes, shattered ruins, and the stars themselves.<br><br>
      <span style="color:#f0d87a;"><strong>Philosophy:</strong></span> To a Human Wizard, knowledge is the greatest weapon and the truest freedom. They see the world as a grand puzzle—each spell, each rune, each elemental force a fragment waiting to be mastered. But with power comes temptation, and many walk a razor’s edge between enlightenment and corruption.<br><br>
      <span style="color:#f0d87a;"><strong>Role in Human Realms:</strong></span> Wizards often stand as advisors to kings, lorekeepers of forgotten ages, or wanderers seeking forbidden truths. In battle, their command of flame, frost, and the arcane can turn tides where steel falters. Yet, among common folk, Wizards inspire awe and fear in equal measure—for their power is as unpredictable as it is vast.`,

      `<span style="color:#f0d87a;"><strong>Origin:</strong></span> The wilderness does not whisper to humans as it does to elves — yet some learn to listen all the same. Human Rangers are those who seek meaning in the silence between trees, who measure time by the migration of herds and the cycle of storms. They are not merely hunters or trackers; they are interpreters of the untamed, translating the language of the wild for those who cannot hear it.<br><br>
      <span style="color:#f0d87a;"><strong>Philosophy:</strong></span> The Human Ranger embodies independence and vigilance. They see the wild not as an enemy, but as a test of will and adaptability. Every path walked, every bow drawn, every beast befriended speaks to humanity’s gift of persistence. They believe that one who respects the wild may claim its strength, but one who exploits it will meet ruin.<br><br>
      <span style="color:#f0d87a;"><strong>Role in Human Realms:</strong></span> Rangers serve as pathfinders for armies, wardens of dangerous borders, and silent hunters of threats that lurk beyond torchlight. They often move unseen between kingdoms and wilderness, carrying messages or striking at foes before they reach settled lands. To many commoners, they are folk heroes, though their solitary lives set them apart.`,

      `<span style="color:#f0d87a;"><strong>Origin:</strong></span> Among humans, faith is woven into daily life — from the battlefield to the hearth. Clerics rise from this devotion, mortals who choose to serve as conduits of higher powers. Their gift is entrusted, not inherited, and their calling lies in embodying the pact between fragile humanity and the divine. Some heal with sacred words, others smite with relics and steel, but all walk with conviction that their every act carries eternal weight.<br><br>
      <span style="color:#f0d87a;"><strong>Philosophy:</strong></span> To a Human Cleric, faith is not simply worship — it is action. They believe the divine is made manifest only when mortals dare to uphold it: a prayer unspoken is powerless, but a hand that heals the wounded, a word that steels the fearful, or a strike that drives back corruption is sacred in itself. Their philosophy is less about dogma and more about embodiment — to live the creed, not just preach it.<br><br>
      <span style="color:#f0d87a;"><strong>Role in Human Realms:</strong></span> In human society, Clerics serve as healers, judges, and leaders of conscience. They bless harvests, rally armies, and steady villages in times of crisis. When kings falter or wars break nations, it is often the Cleric who restores order and hope.`,

      `<span style="color:#f0d87a;"><strong>Origin:</strong></span> An Elven Warrior is not merely trained — they are sculpted by centuries of discipline. To them, battle is not chaos but a dance, measured and deliberate, every strike carrying the weight of tradition. Their armor is not crude protection but a tapestry of craftsmanship, each etched symbol a story of victories long past.
      While humans fight to survive, elves fight to preserve. They are guardians of ancient forests, stewards of immortal legacies, and sentinels against the encroaching decay of time. To face an Elven Warrior is to face patience sharpened into steel — a foe who has studied war longer than most bloodlines have drawn breath.<br><br>
      <span style="color:#f0d87a;"><strong>Philosophy:</strong></span> For humans, the Warrior’s path is less about glory and more about survival. They believe discipline and adaptability make them dangerous—no matter the weapon, no matter the field, a Warrior finds a way to prevail. “A dull blade in steady hands,” they say, “cuts deeper than a master’s sword in careless grip.<br><br>
      <span style="color:#f0d87a;"><strong>Role in Human Realms:</strong></span> Human Warriors form the bulk of every king’s levy and the core of most mercenary companies. They are soldiers, bodyguards, gladiators, and sometimes rebels. While knights swear to crowns and noble houses, Warriors belong to the people—common men and women who pick up steel to protect their kin.`,

      `<span style="color:#f0d87a;"><strong>Origin:</strong></span> Human Rogues are born from necessity, not nobility. In crowded cities and war-torn kingdoms, survival often depends on quick thinking and quicker hands. Where a warrior wears steel, a rogue wears anonymity; where a wizard casts spells, a rogue weaves lies and silence. They thrive in the cracks of civilization, moving between merchant guilds, thieves’ dens, and royal courts with the same practiced ease.<br><br>
      <span style="color:#f0d87a;"><strong>Philosophy:</strong></span> Rogues believe that strength lies not in muscle, but in foresight and subtlety. Where others charge into battle, the Rogue slips around it, striking only when victory is assured. They live by unwritten codes of silence, loyalty, or betrayal—depending on which earns them the most coin or survival.<br><br>
      <span style="color:#f0d87a;"><strong>Role in Human Realms:</strong></span> Rogues thrive in cities and chaos alike. They are thieves, spies, assassins, scouts, and smugglers—often feared as shadows who serve no master but themselves. Yet in times of war, kings and rebels alike employ them, knowing a single dagger in the dark can do what a thousand soldiers cannot.`
    ];

    const index = classMap2.indexOf(className);
    const loreBox = document.getElementById("classDescribeLong");

    if (loreBox) {
      loreBox.innerHTML = index !== -1 ? classLoreLong[index] : "No lore available.";
    }
  }
}


/* ------------------------------- CODE DUMP -------------------------------//
//============= START - Update Character UI Based on Selection =============
function updateCharacterDetails() {
  // Change image source dynamically
  characterImage.src = `img/${selectedClass}-${selectedGender}.png`;
  characterImage.alt = `Image of a ${selectedGender} ${selectedClass}`;
}


// ======================== GALLERY HOVER TEXT EFFECT ======================== //
// When the user hovers over an image (or its name), this script changes the
// text content inside the `.gameText` element. Each gallery item has a unique
// message stored in its `data-text` attribute, which appears on hover.
// When the user moves the mouse away, the message resets to the default line.

const gameText = document.querySelector('.gameText'); // Target the dynamic text container
const galleryItems = document.querySelectorAll('.gallery-item'); // Get all gallery items

// Loop through each gallery item and attach hover event listeners
galleryItems.forEach(item => {
  const text = item.getAttribute('data-text'); // Extract the custom text from each item

  // When the mouse enters (hover starts), display the item's message
  item.addEventListener('mouseenter', () => {
    gameText.textContent = text;             // Show the message linked to the hovered image
    gameText.classList.add('visible');       // Trigger CSS transition for fade/zoom effect
  });

  // When the mouse leaves (hover ends), revert to the default message
  item.addEventListener('mouseleave', () => {
    gameText.textContent = 'Choose your Race'; // Reset message
    gameText.classList.remove('visible');   // Remove animation class
  });
});


// ======================== CLASS SELECTION ======================== //
function slideIndexToClassName(slideIndex) {
  const classMap = ["Warrior", "Rogue", "Wizard", "Ranger", "Cleric"];
  const classLoreShort = [
    "Forged in the crucible of Eldora's endless wars, Warriors are living bulwarks of steel and fury. They charge headlong into danger, shielding the weak and breaking enemy lines with unmatched strength.",
    "From the shadowed alleys of Serathorne to the ruins of fallen empires, Rogues thrive in the chaos between law and lawlessness. Masters of stealth, trickery, and precision, they strike where it hurts most.",
    "In Eldora, magic is power—and few wield it as dangerously as Wizards. Scholars of the arcane and architects of reality, they bend the fabric of the world with spell and scroll.",
    "Wanderers of the wilds, Rangers walk paths no others dare. With eyes sharp as eagle talons and the bond of beast and bow, they are Eldora's silent guardians of forest, fang, and freedom.",
    "Chosen by the gods or cursed by fate, Clerics channel divine will into radiant miracles. Whether healing the wounded or banishing darkness, they are the sacred flame in Eldora's darkest nights."
  ];

  const className = classMap[slideIndex - 1];
  const classDescribe = classLoreShort[slideIndex - 1];

  selectedClass = className.toLowerCase();

  const classNameEl = document.getElementById("className");
  const classDescribeEl = document.getElementById("classDescribe");

  if (classNameEl) classNameEl.textContent = className;
  if (classDescribeEl) classDescribeEl.textContent = classDescribe;

  updateCharacterDetails();
}
  

//============= END - Update Character UI Based on Selection =============
*/