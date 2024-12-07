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
      content1: "In the opening of Hibalag there was a school wide Acquaintance Party which was a big program/show that opened the week-long event with fun performances, impressive booths and good food. I took a little stroll after seeing the parade of lights. The highlights of that event was seeing my bassist friend perform with Hiraya, which was a band that was formed in our old high school.",
      content2: "I expected to be hyped and to be entertained by the events that would follow because it looked like one big preparation in the day’s prior. The booths were really fun to watch, though I wasn’t really able to participate much since I wasn’t bringing any money. I had fun though strolling around with my friends throughout the night. I even bought a gigantic manga milkshake which was only there for a limited time. Overall, the program was entertaining and the hosts were very lively.",
      content3: "This event made me realize how active and big Silliman is when it comes to doing events. Considering that it is another anniversary for the school, of course they would celebrate with a bang. I saw the benefits of enjoying and participating in these events because the school has been so welcoming to new people, and of course Hibalag creates moments for ice-breakers and making you feel more comfortable to the school.",
      content4: "Because of this activity, it made my hibalag experience and created memories for me. It was also the only time I got to experience Hibalag because I was a bit busy with work and there wasn’t really much for me in the following nights.",
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
          content1: "The Paradia Sillimania was a parade and program to honor the anniversary of Silliman University. There were fun performances from colleges, even from our own college. There was also various alumna from the 1970s who basked in celebration.",
          content2: "As a new student of the school, I got to celebrate my school’s conception, it was also impactful seeing all the alumni and students of other year levels celebrating Silliman. It was fun seeing my boys dancing on the Cimafranca ballfield.",
          content3: "It is important to commemorate anniversaries because they are testaments to the history. Silliman is my new home and it is vital that I know the history and culture of it.",
          content4: "Because of this activity, I have a whole new perspective on the school that I am now in. I am also enlightened of the possibilities of the Silliman graduate.",
          imageUrl1: "PHOTOS/Culture/IMG_6605.png",
          imageUrl2: "PHOTOS/Culture/IMG_6612.png",
          imageUrl3: "PHOTOS/Culture/IMG_6615.png",
        },
      6: {
          title: "Entry #6: Horror Chamber (hosted by Silliman University CAS) [Participant]",
          content1: "In the last day of the Horror Chamber booth in Hibalag, my friends invited me to come try it. I went with them because I was bored at that time and wanted to hangout just because it had been a while since I saw them. It was at 6pm at night and I thought that it would be just a simple horror chamber booth.",
          content2: "Initially, I honestly thought that it would just be humorous but with horror elements that seemed like a cop out. Turns out it was actually a really good and well set up chamber. All the actors looked the part and their makeup and costume were on point. Not to mention their incredible acting and dedication to their role. None felt like they broke character and were super consistent. The cold Air Conditioning helped set the mood so hard and it did feel ominous. All that was cancelled however because our friend was the main target and it was so funny. We couldn’t help but just laugh at him and enjoyed the antics.",
          content3: "It honestly broke my expectations for what people can do with booths as long as everything is set up the right way. If they host another chamber next year, I’ll be sure to be part of it again. I got to see a side of my friends that was entertaining and had fun with their project. I hope that we got to help the Psychology students with their chamber and hope that they will make another next that will be as good as this one.",
          content4: "Because of this activity, I got to enjoy a fun and thrilling experience during Hibalag before it ended. I got to hang out with my friends and got to support the people who hosted the Horror Chamber.",
          imageUrl1: "PHOTOS/Culture/ sdsdsd.jpg",
          imageUrl2: "PHOTOS/Culture/IMG_6645.png",
          imageUrl3: "PHOTOS/Culture/IMG_6649 2.png",
        },
      7: {
          title: "Entry #7: Dal-uy Festival (hosted by Foundation University) [Participant]",
          content1: "As I have been told by my friends from Foundation University the Dal Uy festival is part of the yearly events of their school’s founders’ day.  It was about throwing lanterns to the sea, lanterns that were made of paper and marked with their dreams and aspirations. It was a spur of the moment stop since a friend mentioned it to me.",
          content2: "The festival was a fun program but I think what was most beautiful was when the actual lanterns were placed on the sea. It was fun seeing them have fun with their lanterns and of course some wrote some witty ‘hugots’ but some had some very genuine and wholesome dreams which reminded me of my own. Most of them wanted to just succeed in their course like being a Registered Nurse, Doctor, Biologist, and others. ",
          content3: "This made me realize that dreams are such fragile things that we have to treasure. It’s also something that is special and sharing it to the world means a lot to those who dreams. This also made me realize that weather I share the same dreams, we still have to value each other’s dream because while I can’t relate to their aspired desires, they have their own special reason as to why they wake up in the morning and work hard every day.",
          content4: "Because of this activity, I got to be inspired to chase my dreams just like those hardworking people. I also got to see a beautiful display of art in those glowing lanterns in the sea.",
          imageUrl1: "PHOTOS/Culture/IMG_6671.png",
          imageUrl2: "PHOTOS/Culture/IMG_6673.png",
          imageUrl3: "PHOTOS/Culture/IMG_6679.png",
        },

      8: {
          title: "Entry #8: SUPASAkita (hosted by SU Producing and Songwriting Artists) [Participant/Performer]",
          content1: "One of the reasons that I came to Silliman was that my musician friends were affiliated with an organization called SUPASA. This was a club where I could meet fellow music producers and artists that share the same passion as I do. As their club welcoming, they hosted an event where the members could meet. It was at a Café near Harolds Mansion and was quite an intimate and small place.",
          content2: "I came as a performer because I wanted to grow my connections. I came in early and just sat in silence as I contemplated my life choices. I wouldn’t say that it was a nice time exactly, I was surrounded by mature people who vape and smoke and I was not all for that at all, I was just there for the music. My love and passion for the craft led me to stay there however. I like performing music but the world never really gave me the right chances and right people and I was hoping that was destined moment. I then performed one of my Japanese songs from my 1st album and only hoped for the best. Gladly, I performed well and wowed them. Afterwards, my friend Xander told me that I apparently strung everybody’s heartstrings.",
          content3: "This experience changed my view of myself and what I’m capable of. Turns out I’ve just been looking to the wrong places for musical validation. All those things I did just to get noticed and appreciated didn’t live up to that one singular performance that night. I benefitted obviously because I saw a rather significant spike in my music statistics, specifically in Dumaguete which is unmistakenly due to my performance.",
          content4: "Because of this activity, I got to make new musician friends and reconnected with old ones. I got my place in that club and got to express myself in a way that I’ve never been able to. Thanks, and big-ups to SUPASA for that night though.",
          imageUrl1: "PHOTOS/Culture/IMG_6820.png",
          imageUrl2: "PHOTOS/Culture/IMG_6822.png",
          imageUrl3: "PHOTOS/Culture/IMG_6824.png",
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
