// THIS IS FOR Culture CONTENT!

const contentBoxes = document.querySelectorAll('.contentBox');

// Define unique content for each box by ID
const contentData = {
    1: {
        title: "Entry #1: Freshie  Walk (hosted by Silliman Univeristy) [Participant]",
        content1: "The Freshie Walk is my first university event. It was a fun day and a chance for the freshman of various colleges in Silliman to meet, greet and mingle. This was also my first time gathering as a student of the College of Computer Science. I wasn’t able to make friends with the new people yet so I just sticked to my friends from high school. Our walk was led by the Student Government of CCS, the Confederates Student Council. ",
        content2: "When it was announced I thought it would just be a simple tour but turns out it was a program and I had a lot of fun. I got to see a few friends from other colleges as well. This activity made me realize that I’m welcomed into a new community, which is the CCS Community. Seeing every freshie impacted me and gave me a new sense of purpose and inspiration. It made me realize that one way or another I’m going to make more memories with these people especially since any of them could be my classmates anytime. This activity surprised me because the energy of everybody was infectious, it made me slightly less worried about spending my time here.",
        content3: "This activity changed the way I viewed about new experiences and new communties. I realized that maybe being with people I have yet to know isn’t so bad. I also learned a few things about the culture and about what CCS is like, I know what to expect and that I could just relax because I’m around some really cool individuals. This benefit me by making me feel a little less distant with the institution as a whole.",
        content4: "Because of this activity, I was hyped as a CCS Student. I am also excited for new experiences and new people soon in my time here in Silliman University and in CCS.",
        imageUrl1: "PHOTOS/Culture/IMG_6280.png",
        imageUrl2: "PHOTOS/Culture/IMG_6309.png",
        imageUrl3: "PHOTOS/Culture/IMG_6300.png",
    },
    2: {
        title: "Entry #2: Parade of Lights (hosted by Silliman Univeristy) [Participant]",
        content1: "I wanted to see the Parade of Lights since I’ve been said that it looks really pretty at night and I’m going to go to the Hibalag grounds anyway. I came to the amphitheater curious as to what I was about to see. It was a simple parade involving the SU band and representatives of each college to Parade the street to the Ravello Ballfield.",
        content2: "The parade itself was full of lights. The marching band was wearing their rechargeable lights, everyone holding lamps and other light sources. As the parade started, people also walked alongside the parade, seeing what every college had to offer. Each one had their own gimmick of course, everyone had fun gimmicks and there was even one who dressed up as the clown from I.T. This amazing array of lights was super beautiful and was the mark of my first Hibalag experience ever.",
        content3: "At this moment, I’ve learned a lot about the culture of Hibalag and of Silliman University, as well as the different colleges in the school. It was also a beautiful display of the talent among the band members. The main benefit of seeing this was having an enjoyable walk full of entertainment as Hibalag was about to begin.",
        content4: "Because of this activity, I got a taste of what Hibalag would have to offer and it made me genuinely excited for what was about to come. This activity was also my first Parade of Lights, out of many soon.",
        imageUrl1: "PHOTOS/Culture/IMG_6426.png",
        imageUrl2: "PHOTOS/Culture/IMG_6429.png",
        imageUrl3: "PHOTOS/Culture/IMG_6440.png",
    },
    3: {
      title: "Entry #3: School Wide Acquaintance Party (hosted by Silliman Univeristy) [Participant]",
      content1: " Lorem Ipsum",
      content2: " Lorem Ipsum",
      content3: " Lorem Ipsum",
      content4: " Lorem Ipsum",
      imageUrl1: "PHOTOS/Culture/IMG_6446.png",
      imageUrl2: "PHOTOS/Culture/IMG_6444.png",
      imageUrl3: "PHOTOS/Culture/IMG_6450.png",
    },

    4: {
        title: "Entry #4: Tone-Key Quartet Live Concert (hosted by Silliman Univeristy Culture and Arts Council) [Participant]",
        content1: "On my usual route to my GE6 class, I notice that the bulletin in the COPVA building contained a poster for a show involving a quartet of Japanese performers. As a lover of all things Japanese Music, I got excited knowing that I’d get to watch their show after buying the GALA Season Pass. This show involved the Tone-Key Quartet which is a touring quartet that plays all things music, may it be classical, jazz, fusion or a mix of everything. The group’s members are: Satoshi Mitsumoto, Junko Matsuda, Junichi Matsuda, and Kasumi Yanagiura.",
        content2: "I was actually expecting more of a formal kind of atmosphere as what the poster would lead me to believe, but turns out it would be one of the most fun performances I’d ever watch. This show was unique because of their percussionist, Satoshi-san. He was amazingly good at the drums; he was in the pocket and was absolutely great at keeping time. All 4 were very professional, virtuosic and skilled but Satoshi-san brought life to it. He combined skill with humor and delivered a show that was memorable. They played a few Japanese pieces but mostly classical, and each had an amazing twist. The best part was when Satoshi-san put on a different mask for each song and played drums like comedy, as well as the part where he literally busted out a typewriter mid-song and then just spoke in Bisaya.",
        content3: "This experience changed me because I could never really get into Live music. I’d rather just watch a recorded performance or stream an album, but this show made me realize that everything just sounds better live and of course when the performers have amazing charisma and stage presence, it just lights up the stage in such a unique way. As a musician, I also learned a lot about classical music and how to really liven up live music, as well as got inspiration to use unconventional objects like a rubber chicken or typewriter.",
        content4: "Because of this activity, I feel like I’ve become a better musician and music listener. I also feel like I can appreciate live music now because of that life changing show. Because of this, I also mustered up the bravery to interact with them at the meet and greet and was even able to take a picture with the quartet and with Satoshi-san himself!",
        imageUrl1: "PHOTOS/Culture/IMG_6521 3.png",
        imageUrl2: "PHOTOS/Culture/IMG_6546.png",
        imageUrl3: "PHOTOS/Culture/IMG_6558.png",
      },

      5: {
          title: "Entry #5: Paradia Sillimania (hosted by Silliman Univeristy)[Participant]",
          content1: " Lorem Ipsum",
          content2: " Lorem Ipsum",
          content3: " Lorem Ipsum",
          content4: " Lorem Ipsum",
          imageUrl1: " Lorem Ipsum",
          imageUrl2: " Lorem Ipsum",
          imageUrl3: " Lorem Ipsum",
        },
      6: {
          title: "Entry #6: Horror Chamber (hosted by Silliman University CAS) [Participant]",
          content1: " Lorem Ipsum",
          content2: " Lorem Ipsum",
          content3: " Lorem Ipsum",
          content4: " Lorem Ipsum",
          imageUrl1: " Lorem Ipsum",
          imageUrl2: " Lorem Ipsum",
          imageUrl3: " Lorem Ipsum",
        },
      7: {
          title: "Entry #7: Dal-uy Festival (hosted by Foundation University) [Participant]",
          content1: " Lorem Ipsum",
          content2: " Lorem Ipsum",
          content3: " Lorem Ipsum",
          content4: " Lorem Ipsum",
          imageUrl1: " Lorem Ipsum",
          imageUrl2: " Lorem Ipsum",
          imageUrl3: " Lorem Ipsum",
        },

        8: {
            title: "Entry #8: SUPASAkita (hosted by SU Producing and Songwriting Artists) [Participant/Performer]",
            content1: "One of the reasons that I came to Silliman was that my musician friends were affiliated with an organization called SUPASA. This was a club where I could meet fellow music producers and artists that share the same passion as I do. As their club welcoming, they hosted an event where the members could meet. It was at a Café near Harolds Mansion and was quite an intimate and small place.",
            content2: "I came as a performer because I wanted to grow my connections. I came in early and just sat in silence as I contemplated my life choices. I wouldn’t say that it was a nice time exactly, I was surrounded by mature people who vape and smoke and I was not all for that at all, I was just there for the music. My love and passion for the craft led me to stay there however. I like performing music but the world never really gave me the right chances and right people and I was hoping that was destined moment. I then performed one of my Japanese songs from my 1st album and only hoped for the best. Gladly, I performed well and wowed them. Afterwards, my friend Xander told me that I apparently strung everybody’s heartstrings.",
            content3: "This experience changed my view of myself and what I’m capable of. Turns out I’ve just been looking to the wrong places for musical validation. All those things I did just to get noticed and appreciated didn’t live up to that one singular performance that night. I benefitted obviously because I saw a rather significant spike in my music statistics, specifically in Dumaguete which is unmistakenly due to my performance.",
            content4: "Because of this activity, I got to make new musician friends and reconnected with old ones. I got my place in that club and got to express myself in a way that I’ve never been able to. Thanks, and big-ups to SUPASA for that night though.",
            imageUrl1: " Lorem Ipsum",
            imageUrl2: " Lorem Ipsum",
            imageUrl3: " Lorem Ipsum",
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
