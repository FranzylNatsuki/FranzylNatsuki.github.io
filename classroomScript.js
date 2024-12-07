// THIS IS FOR Classroom CONTENT!

const contentBoxes = document.querySelectorAll('.contentBox');

// Define unique content for each box by ID
const contentData = {
  1: {
      title: "lorem ipsum",
      content1: "lorem ipsum",
      content2: "lorem ipsum",
      content3: "lorem ipsum",
      content4: "lorem ipsum",
      imageUrl1: "lorem ipsum",
      imageUrl2: "lorem ipsum",
      imageUrl3: "lorem ipsum",
  },

  2: {
      title: "lorem ipsum",
      content1: "lorem ipsum",
      content2: "lorem ipsum",
      content3: "lorem ipsum",
      content4: "lorem ipsum",
      imageUrl1: "lorem ipsum",
      imageUrl2: "lorem ipsum",
      imageUrl3: "lorem ipsum",
  },
  3: {
      title: "lorem ipsum",
      content1: "lorem ipsum",
      content2: "lorem ipsum",
      content3: "lorem ipsum",
      content4: "lorem ipsum",
      imageUrl1: "lorem ipsum",
      imageUrl2: "lorem ipsum",
      imageUrl3: "lorem ipsum",
  },
  4: {
      title: "lorem ipsum",
      content1: "lorem ipsum",
      content2: "lorem ipsum",
      content3: "lorem ipsum",
      content4: "lorem ipsum",
      imageUrl1: "lorem ipsum",
      imageUrl2: "lorem ipsum",
      imageUrl3: "lorem ipsum",
  },
  5: {
      title: "lorem ipsum",
      content1: "lorem ipsum",
      content2: "lorem ipsum",
      content3: "lorem ipsum",
      content4: "lorem ipsum",
      imageUrl1: "lorem ipsum",
      imageUrl2: "lorem ipsum",
      imageUrl3: "lorem ipsum",
  },
  6: {
      title: "lorem ipsum",
      content1: "lorem ipsum",
      content2: "lorem ipsum",
      content3: "lorem ipsum",
      content4: "lorem ipsum",
      imageUrl1: "lorem ipsum",
      imageUrl2: "lorem ipsum",
      imageUrl3: "lorem ipsum",
  },
  7: {
      title: "lorem ipsum",
      content1: "lorem ipsum",
      content2: "lorem ipsum",
      content3: "lorem ipsum",
      content4: "lorem ipsum",
      imageUrl1: "lorem ipsum",
      imageUrl2: "lorem ipsum",
      imageUrl3: "lorem ipsum",
  },
  8: {
      title: "lorem ipsum",
      content1: "lorem ipsum",
      content2: "lorem ipsum",
      content3: "lorem ipsum",
      content4: "lorem ipsum",
      imageUrl1: "lorem ipsum",
      imageUrl2: "lorem ipsum",
      imageUrl3: "lorem ipsum",
  },
    // Add similar entries for each box up to contentBox8
};

// Function to handle box clicks
function handleBoxClick(event) {
    const box = event.currentTarget;
    const contentNum = box.id.replace('contentBox', '');

    if (event.target.classList.contains('close-button')) {
        resetBox(box);
    } else if (!box.classList.contains('enlarged')) {
        enlargeBox(box, contentNum);
    }
}

// Function to enlarge a box
function enlargeBox(box, contentNum) {
    // Enlarge the clicked box and update its content
    const { title, content1, content2, content3, content4, imageUrl1, imageUrl2, imageUrl3 } = contentData[contentNum];

    box.classList.add('enlarged');
    box.innerHTML = `
    <div class="boxInformation">
        <button class="close-button">&times;</button>
        <h2 style="margin: 0 auto; text-align: center;">${title}</h2>
        <h3 class="normalyap" style="margin: 20px;">${content1}</h3>
        <h3 class="normalyap" style="margin: 20px;">${content2}</h3>
        <h3 class="normalyap" style="margin: 20px;">${content3}</h3>
        <h3 class="normalyap" style="margin: 20px;">${content4}</h3>
        <div class="mobileimages" style="display: flex; justify-content: center; gap: 10px; align-items: center; margin: 15px;">
            <img src="${imageUrl1}" class="mobileimagesindiv">
            <img src="${imageUrl2}" class="mobileimagesindiv">
            <img src="${imageUrl3}" class="mobileimagesindiv">
        </div>
    </div>
    `;

    // Add event listener for the close button
    const closeButton = box.querySelector('.close-button');
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the box from being clicked again
        resetBox(box);
    });

      document.body.classList.toggle('body-overflow-hidden');

    // Disable all other boxes
    disableOtherBoxes(box);
}

// Function to reset a box
function resetBox(box) {
    box.classList.remove('enlarged');
    box.innerHTML = `<h2 id="contentBoxText${box.id.replace('contentBox', '')}"> Entry #${box.id.replace('contentBox', '')} </h2>`;
    enableAllBoxes();
              document.body.classList.toggle('body-overflow-hidden');
}

// Function to disable other boxes
function disableOtherBoxes(activeBox) {
    contentBoxes.forEach(box => {
        if (box !== activeBox) {
            box.classList.add('disabled'); // Optionally style the disabled state
            box.removeEventListener('click', handleBoxClick); // Remove click event
        }
    });
}

// Function to enable all boxes
function enableAllBoxes() {
    contentBoxes.forEach(box => {
        box.classList.remove('disabled');
        box.addEventListener('click', handleBoxClick); // Re-add click event
    });
}

// Attach event listener for each content box
contentBoxes.forEach(box => {
    box.addEventListener('click', handleBoxClick);
});
