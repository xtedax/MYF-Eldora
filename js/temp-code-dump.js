const playerImages = {
  kolDragar: {
    male: [
      "img/koldragar-male1.png",
      "img/koldragar-male2.png",
      "img/koldragar-male3.png",
      "img/koldragar-male4.png",
      "img/koldragar-male5.png",
      "img/koldragar-male6.png"
  ],
    female: [
      "img/koldragar-female1.png",
      "img/koldragar-female2.png",
      "img/koldragar-female3.png",
      "img/koldragar-female4.png",
      "img/koldragar-female5.png",
      "img/koldragar-female6.png"
    ]
  },
  valenreach: {
    male: [
      "img/valenreach-male1.png",
      "img/valenreach-male2.png",
      "img/valenreach-male3.png",
      "img/valenreach-male4.png",
      "img/valenreach-male5.png",
      "img/valenreach-male6.png",
    ],
    female: [
      "img/valenreach-female1.png",
      "img/valenreach-female2.png",
      "img/valenreach-female3.png",
      "img/valenreach-female4.png",
      "img/valenreach-female5.png",
      "img/valenreach-female6.png"
    ]
  },
  luminaria: {
    male: [
      "img/luminaria-male1.png",
      "img/luminaria-male2.png",
      "img/luminaria-male3.png",
      "img/luminaria-male4.png",
      "img/luminaria-male5.png",
      "img/luminaria-male6.png",
    ],
    female: [
      "img/luminaria-female1.png",
      "img/luminaria-female2.png",
      "img/luminaria-female3.png",
      "img/luminaria-female4.png",
      "img/luminaria-female5.png",
      "img/luminaria-female6.png"
    ],
  }
};



// Confirm selection
confirmBtn.addEventListener('click', () => {
  if (!selectedFaction) {
    alert("Please choose a faction first.");
    return;
  }

  localStorage.setItem(
    "playerChoices",
    JSON.stringify(playerChoices)
  );

  console.log("Saved!");
  console.log(playerChoices);

  window.location.href = "index.html";
});

// Back button simply redirects to the previous page without affecting playerChoices
backBtn.addEventListener('click', () => {
  window.location.href = "myfrpg-race-select.html";
});





// ===== IMAGE LOCK/UNLOCK SYSTEM & SAVE RACE CHOICE - SELECTED RACE PAGE  ===== //

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

    // SAVE CLICKED FACTION KEY
    selectedFaction = item.dataset.faction;
    console.log("Selected Faction:");
    console.log(selectedFaction);

    // SAVE FACTION DATA TO PLAYERCHOICES
    playerChoices.faction = {
      key: selectedFaction,
      ...factions[selectedFaction]
    };
    console.log("Player Choices:");
    console.log(playerChoices);

  });

});

// Handle click outside gallery items
document.addEventListener('click', (e) => {

  // If the click is on a gallery item or the confirm/back buttons, do nothing (let those handlers manage it)
  if (
    e.target.closest('.gallery-item') ||
    e.target.closest('#confirmBtn') ||
    e.target.closest('#backBtn')
  ) {
    return;
  }

  // If we have a locked item, unlock it and clear the selection
  if (lockedItem) { // <-- This check prevents uncaught errors
    lockedItem.classList.remove('locked');
    lockedItem.removeAttribute('background'); // Optional: Clear data-text on unlock
    lockedItem = null;
    selectedFaction = "";
    delete playerChoices.faction;
    console.log("Faction Deselected");
  }
});

// Confirm selection and open the Identity Modal
confirmBtn.addEventListener('click', () => {
  // 1. Guard check to ensure a choice was actually locked in
  if (!selectedFaction) {
    alert("Please choose a faction first.");
    return;
  }

  // 2. Save the local staging choices payload
  localStorage.setItem(
    "playerChoices",
    JSON.stringify(playerChoices)
  );

  console.log("Saved local state frame!", playerChoices);

  // 3. REPLACED REDIRECT: Reveal the identity setup modal UI element
  const identityModal = document.getElementById("identity-modal");
  if (identityModal) {
    identityModal.classList.remove("hidden");
  }
});

// Find the back button inside the modal and make it close the modal frame
const modalBackBtn = document.querySelector(".identity-modal .modal-footer .continue-btn:first-child");

if (modalBackBtn) {
  modalBackBtn.addEventListener('click', () => {
    const identityModal = document.getElementById("identity-modal");
    if (identityModal) {
      identityModal.classList.add("hidden");
    }
  });
}

// ============================================================================ //