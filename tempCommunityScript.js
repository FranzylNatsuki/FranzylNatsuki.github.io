// THIS IS FOR Community CONTENT!

const contentBoxes = document.querySelectorAll('.contentBox');

// Define unique content for each box by ID
const contentData = {
    3: {
        title: "PADAGAT: Panglimpyo sa Dagat (hosted by the DOST sa SU) [Committee Head]",
        content1: "I was once again invited by my friends from DOST sa SU to spearhead another project for the Silliman Community. This time it was a beach-cleanup that was also spontaneously done, in the weeks right after our first activity. I was the one taking care of the online presence of the event and handles some logistics stuff. I worked on the Publications and to check for all the letters and other papers for authorization. I worked with the likes of Trixter, Angela, and Aldrich.",
        content2: "My initial expectations would be that it would be extremely difficult to even ask for the permits and documents, hence why we just did it on Silliman Beach, there were a few other options but realizing that we are affiliated with the University would make it a lot smoother. Aldrich got busy with the actual asking and just assisted with logistics. Our permission from the Barangay was greenlit however the LGU unit that handles the trash collection for that event was a bit tricky. We had to write a letter for permission to their office which took a few days to finally be greenlit. I think my inexperience for real-world situations really showed because to me doing this kind of thing alone would be nigh on impossible.",
        content3: "This experience affected my fear of leaving my comfort zone. Being one of the hosts I also had a part in leading the program and considering that it was my first time I was a bit mentally lost. However the program was a success, the beach area itself was alright but most of the trash were further up-stream and was quite gnarly, but was taken care of. I saw the benefits of what we were able to accomplish for our environment and community. SU sa DOST was very welcoming and am hoping to be part of more of their events, I’m not a scholar but was planning to originally, I however did not take it because the financial and contractual aspects were not to my favor/preference.",
        content4: "Because of this activity, I am more open to being a part of more events as someone more than just a member. I want to try to be more open and try spearheading more events, especially with music since I feel like I know what other small musicians and creatives might want to experience.",
        imageUrl1: "PHOTOS/Community/8ca82e8e-c0bd-4fcb-9c26-a9f8a2da1398.png",
        imageUrl2: "PHOTOS/Community/58dbb35c-5256-4115-b8fd-c05319f1e53b.jpeg",
        imageUrl3: "PHOTOS/Community/Screenshot 2024-11-26 at 8.45.47 PM.png",
    },
    2: {
        title: "Entry #2: Pa-init, Pag-hatag ug ka-Init (hosted by the DOST sa SU) [Committee Head]",
        content1: "I was invited by my friends at DOST sa SU because they were doing some community work. The activity was aimed to elevate the morale of the personnel and staff working at the University despite the harsh conditions of the weather at that time. Because we had no school due to suspensions, I wanted to go since my friends would also be there. I was a head along with my friends, we arranged the time and our flow of event. ",
        content2: "It was a 10-man group so we didn’t have much man power. The bad weather didn’t stop us however. My initial expectations would that it would be a little awkward since there are only a few of us, however I found the event as fun and rewarding. Although we were a little shy in the beginning, the smiles of the people whom we have given snacks to made us push on. The funds were actually raised from 0, it was only sent out to some people the night before and we actually were able to come up with 900php. This was just enough to get a box of meat bread with around 50 pieces, and got some coffee and paper cups for them. However, hilariously we weren’t able to get those wooden stirring sticks for their coffees.",
        content3: "This experience affected the way that I saw my anxiety for social gatherings. Especially with people who aren’t in my class that I became closer with. I also learned that initiative is really what the world needs because there many simple gifts or acts we can do for the people around us but we end up not initiating any action at all. I benefited because it helped me put into perspective what it takes to be active and feel the positive impact of our initiatives.",
        content4: "Because of this activity I am more positive about setting time from my schedule to help out the community and to do good in the world. I am also more positive about discomfort and deciding to step out of my comfort zone to do something nice for others!",
        imageUrl1: "PHOTOS/Community/17c7043e-6110-4400-85ce-fa521b26e623.jpeg",
        imageUrl2: "PHOTOS/Community/489caba3-a820-4aad-a588-cf2bcfbb2c38.jpeg",
        imageUrl3: "PHOTOS/Community/Screenshot 2024-11-26 at 8.35.02 PM.png",
    },

    1: {
        title: "Entry #1: Hugop (hosted by RTPM – DSHS Student Government) [Participant]",
        content1: "Our Alma Matter, RTPM – Dumaguete Science High School hosts a yearly donation drive either for a certain special cause or for educational funding that is always successful and raises a significant amount for whatever cause. This year, a donation drive was hosted by our student government to raise funds for the hospital and medical expenses for one of our PE Teachers, Sir Alfredo Elola in his fight for lung cancer. He taught and was our instructor for the past 6 years in the school at various year levels. My first time seeing him wasn’t at school, it was actually at at one of my swimming lessons, as Mr. Elola was the long time coach for the Award-winning Negros Oriental Blue Dolphins Club.",
        content2: "It was also my first time coming to the school after graduation a few months back. It was a spontaneous trip with my Alumna friends in CCS. I always viewed ‘Hugop’ as this one big party every year for charity, and yes it still was but it felt a little different. I felt so much nostalgia flowing through reminiscing through the 6 years I’ve dedicated to my education there. It was also nice catching up with my old high-school teachers. Sir Elola unfortunately wasn’t there as he was already in treatment at that time. ",
        content3: "There were lots of cool activities our younger years have planned and have done. The main event every year is the BOTB (Battle of the Bands). It also reminded me of my experiences seeing my friends and myself participating in that yearly tradition. I hope that our donations as a student body are able to help Sir Elola even just a little bit. The previous year was for the difficulty in our Class Adviser’s pregnancy, and was very successful and took away a portion of the expenses and burden from our teacher. This experience has touched my heart and will forever reflect and internalize the teachings of my old school in terms of values, sense of community and love for our big family back in school.",
        content4: "Because of this Activity, I am thankful for the community that I grew up in and knowing that I was trained by a wonderful institution that teaches us to value community, and helping each other out. This activity also allowed me to show my appreciation for my teacher through financial and social means.",
        imageUrl1: "PHOTOS/Community/IMG_6364 2.png",
        imageUrl2: "PHOTOS/Community/IMG_6361 2.png",
        imageUrl3: "PHOTOS/Community/IMG_6352 2er.png",
    },
    4: {
        title: "Entry #4: Bata Ng Calabnugan – Donation Drive [Working Committee]",
        content1: " Lorem Ipsum",
        content2: " Lorem Ipsum",
        content3: " Lorem Ipsum",
        content4: " Lorem Ipsum",
        imageUrl1: " Lorem Ipsum",
        imageUrl2: " Lorem Ipsum",
        imageUrl3: " Lorem Ipsum",},
    // Add similar entries for each box up to contentBox8
};

// Function to handle box clicks
function handleBoxClick(event) {
    const box = event.currentTarget; // Get the clicked box
    const contentNum = box.id.replace('contentBox', '');

    // If clicked box already has 'enlarged', reset to original state
    if (box.classList.contains('enlarged')) {
        resetBox(box);
    } else {
        // Enlarge the clicked box and update its content
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
            <h3 style="margin: 20px;">${content1}</h3>
            <h3 style="margin: 20px;">${content2}</h3>
            <h3 style="margin: 20px;">${content3}</h3>
            <h3 style="margin: 20px;">${content4}</h3>
            <div style="display: flex; justify-content: center; gap: 10px; align-items: center; margin: 15px;">
                <img src="${imageUrl1}" style="width: 33%; height: auto; border-radius: 20px; margin: 0 5px 30px;">
                <img src="${imageUrl2}" style="width: 33%; height: auto; border-radius: 20px; margin: 0 5px 30px;">
                <img src="${imageUrl3}" style="width: 33%; height: auto; border-radius: 20px; margin: 0 5px 30px;">
            </div>
        </div>
    `;

    // Add event listener for the close button
    const closeButton = box.querySelector('.close-button');
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the box from being clicked again
        resetBox(box);
    });

    // Disable all other boxes
    disableOtherBoxes(box);
}

// Function to reset a box
function resetBox(box) {
    box.classList.remove('enlarged');
    box.innerHTML = `<h2 id="contentBoxText${box.id.replace('contentBox', '')}"> Entry #${box.id.replace('contentBox', '')} </h2>`;
    enableAllBoxes();
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
