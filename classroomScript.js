// THIS IS FOR Classroom CONTENT!

const contentBoxes = document.querySelectorAll('.contentBox');

// Define unique content for each box by ID
const contentData = {
  1: {
      title: "Entry #1: NSTP orientation (Hosted by Silliman NSTP Department) [Participant]",
      content1: "NSTP was something that I was always worried about when coming into college. When I toured the school prior to classes beginning I was told there would be an NSTP orientation in the morning, like really early at 0500H. It was a very early meeting and the only thing I was really waiting for was the link for CWTS or LTS.",
      content2: "We we’re brief on what our year is going to be like. I’m either going to be an ROTC Cadet or I’m not. The actual talk was more about the reasoning for why NSTP exists and what benefits it can give to me. Obviously CWTS was my way out of the stress of ROTC but what got me intrigued was that if I were to be stuck in ROTC, it could be good for me. It would teach me to be disciplined, well-mannered and of course a lot more stoic. The ROTC heads emphasized that the true benefit of ROTC is to strengthen yourself and your character. CWTS and LTS was quite straightforward and everybody of course wanted to get in to it.",
      content3: "This orientation changed my opinion of ROTC. Although I still didn’t want to make it my primary choice, I saw the benefits of the program and decided that I wouldn’t be disappointed if I couldn’t get in, and I didn’t get in which was fine. This made me feel relieved about what I was going to experience soon.",
      content4: "Because of this activity, I got a good understanding of NSTP, it’s components and the benefits of being in ROTC. With this in mind, I am happy to do my part as a citizen of this country.",
      imageUrl1: "PHOTOS/Classroom/IMG_6378.webp",
      imageUrl2: "PHOTOS/Classroom/IMG_6379.webp",
      imageUrl3: "PHOTOS/Classroom/IMG_6380.webp",
      date: "August 17, 2024 7AM" ,
  },

  2: {
      title: "Entry #2: Industry Lecture “Web Development: Latest Trends and Strategies (Hosted by Confederates Student Council) [Participant]",
      content1: "This workshop was an industry lecture on the latest trends in Web Development which they expressed was the use of new JavaScript frameworks such as Angular.JS, React and Vue. This talk was at ATA Hall and was a really cool explanation on how we have transitioned into a new Age of advanced JavaScript libraries and frameworks.",
      content2: "I’ve learned a lot about JavaScript in this talk because its mostly about frameworks which are the new kind of JavaScript forms and have similar use cases but have their own unique take on JS and that they are meant to solve different problems with previous frameworks such as JQuery. This talk was super informative especially with the talk on vue based web-apps that are written in react or vue which can do advanced functions but are only just web-apps that call on to a server. They pose advantages but aren’t perfect in terms of performances because web-apps heavily rely on the server to perform their task.",
      content3: "Because of this, I am now very interested in JavaScript and would like to explore react and angular. I am going to focus on web development because unlike C, Rust or C++ that are compiled languages, JS is a high level programming language just like Python. In the future, I will consider more harder libraries like Node.JS for backend and server-side maintainance.",
      content4: "Because of this activity, I have a whole new perspective of JavaScript as a flexible and revolutionary programming and scripting language. I will be doing my research and will be improving my work with JavaScript.",
      imageUrl1: "PHOTOS/Classroom/IMG_6415.webp",
      imageUrl2: "PHOTOS/Classroom/IMG_6417.webp",
      imageUrl3: "PHOTOS/Classroom/IMG_6418.webp",
      date: "August 19, 2024 8AM" ,
  },
  3: {
      title: "Entry #3: Balik Talent Lecture “Big Data and IoT: Why They Matter in Innovation” (Hosted by Confederates Student Council) [Participant]",
      content1: "This talk on IoT and Big Data was an interesting one as it is actually much more of a Computer Engineering and Embedded Systems thing rather than computer science. This talk nonetheless was still full of insight that could be applied to Software Engineering. The speaker is someone who works in a company that deals with embedded systems and he showed us some of his work, just like this work on lights that turned on only on certain conditions and how it saves power in Singapore.",
      content2: "Big Data is basically the use of information on a wide-range of people to determine outcomes and statistics that can benefit the majority of a population and IoT is technology that allows us to communicate with objects through wireless networks and connections, think stuff like Arduino and Raspberry Bi. The speaker talks about how Singapore is leading innovation in urban planning and life by using this kind of technology and solving problems that people actually care about, to improve the overall QoL in their country.",
      content3: "I realized that the reason this country doesn’t feel like it’s advancing the same way like it’s other south east Asian counterparts is that we shun innovation and smart thinking. Because we are so afraid of things that are futuristic and people in general are afraid to think big, we don’t get these cool innovations, we only learn about them from other places. I have learned from this talk that if you just think about the people, you can always find a way to make their QoL better, especially if it’s a community or a wide-range of people who have certain issues or problems in their living that you can optimize with tech better.",
      content4: "Because of this activity, I got a new appreciation for innovation and IoT technology. Especially, how Singapore manages to be a tech paradise that uses technology as a leverage and as a partner in their life rather than something that just happened to be there to do machine-like tasks.",
      imageUrl1: "PHOTOS/Classroom/IMG_6456.webp",
      imageUrl2: "PHOTOS/Classroom/IMG_6457.webp",
      imageUrl3: "PHOTOS/Classroom/IMG_6481.webp",
      date: "August 20, 2024 8AM" ,
  },
  4: {
      title: "Entry #4: CCS Guidance Activity (Hosted by Confederates Student Council) [Participant]",
      content1: "The CCS Guidance Activity was an event under our guidance counseling unit that was like a little get together for CCS Students to get to know each other. It was held in the ATA Hall and took place in the Afternoon. I had to go alone however because my friends already did it on an earlier session. It wasn’t a large group as well compared to the other sessions, making it a feel a bit less hyped and a bit more awkward.",
      content2: "This event was composed of games that involved us interacting. It was mostly team-based games which eventually allowed us to break the ice. The first game was the evolution game where we had to play rock paper scissors to ascend and evolve to the next species. I of course am not good at that so I evolved once and just entirely gave up and got back to the start, but it was a lot of fun though. The next game was forming shapes but not being able to see, so all we had to go off was just telling each other while being blind. We then filled out some guidance forms. This event made me feel much more comfortable in the College and made me realize that if people will always willing to friends with you as long as you do it right.",
      content3: "I went on with a more positive view on the college and a more positive impression on my batchmates. I also learned that the school really takes their Guidance Counselors seriously and that they aren’t just backup for when students get in trouble. I believe that because of this I’m much more inclined to ask for advice at the guidance office because the school treats their students with the utmost care and will always offer a helping hand in terms of emotional and mental support. Knowing that you aren’t alone in College is a big help to me and for many others who are probably away from home and have no support system.",
      content4: "Because of this activity, I got to know many new individuals in CCS and got to experience the loving and caring community of Silliman and of CCS. I also have a newfound appreciation for the Guidance Offices in the school.",
      imageUrl1: "PHOTOS/Classroom/IMG_6512.webp",
      imageUrl2: "PHOTOS/Classroom/IMG_6513.webp",
      imageUrl3: "PHOTOS/Classroom/output-onlinepngtools.png",
      date: "August 20, 2024 1PM" ,
  },
  5: {
      title: "Entry #5: Designing Intuitive User Experience: Key UI/UX Strategies (Hosted by Confederates Student Council) [Participant]",
      content1: "This talk/workshop is actually something that is close to my heart and interest because back in the 12th Grade I was given the opportunity to do work immersion on a Tech Company’s UI/UX team and learned a lot about using Figma and basic principles so this discussion was something I could benefit from as well. Little did I know that we we’re going to have a Figma designing activity. ",
      content2: "During this workshop I’ve learned that the only thing you need to have skills and feel confident in your job is to just be open to learning and be consistent with your learnings and your practice with the skill. We learned to do Wire-Framing mockups which was something I couldn’t really do last year as it was focused on UI and not on UX that much. It was interesting to see that in the professional design world, the basic functions of components and wiring the individual frame components of a design set could produce such wonderful mockups that can later be built by developers.",
      content3: "The speaker’s experience with landing a Job that she only learned from YouTube gave me some inspiration that maybe I’ll be fine in the future, as long as I work on my skills. I also learned lots of skills from the internet in my time during the pandemic similar to the speaker and the fact that she was really good at UI/UX was such a big thing for me. I came out of that talk with a much better appreciation for designers and the fact that coming up with UX is actually incredibly difficult and is an intellectual challenge in itself.",
      content4: "Because of this activity, I got to be able to re-explore my Figma skills and learn a lot more about the UX side of things and how companies realize their vision through wire-framing and making sure the ideas are set before focusing on building.",
      imageUrl1: "PHOTOS/Classroom/IMG_6569.webp",
      imageUrl2: "PHOTOS/Classroom/IMG_6572.webp",
      imageUrl3: "PHOTOS/Classroom/IMG_6573.webp",
      date: "August 22, 2024 8 AM" ,
  },
  6: {
      title: "Entry #6: Responsible Use of Digital Technology: Do’s and Don’ts (Hosted by Dr. Mariano Lao Global Studies Center) [Participant]",
      content1: "This online lecture by the Dr. Mariano Lao GSC via zoom. This was a webinar on Silliman’s new measures to using Online Technology on this modern time. Specifically, on A.I. and what you should and shouldn’t do. It was an informative zoom meeting and the host was especially interesting and entertaining. ",
      content2: "What I learned is the stance that Silliman takes when it comes to using AI chatbot’s like ChatGPT. They mention that ChatGPT and others area acceptable to use and in fact quite helpful because it can serve as your make-shift study partner and can even quiz you and find information for you but the limitation is when you simply copy and paste your work. They emphasize that while AI can help you for writing and other tasks, it shouldn’t be the one doing the work. It should be your interpretation and your conclusions based on arranged information. They also discussed some debates about citation of AI and others which were also interesting.",
      content3: "As a student of Technology, This talk solidified advice that many others have emphasized towards the interaction of technology as a Study companion and not simply as just a word generator to satisfy an essay or a question that you don’t know how to answer. I found myself benefitting from this talk because it gave me some more information on a tool that I myself use as a study companion.",
      content4: "Because  of this activity, I got to learn more about the role of technology and AI on the new way of learning. I also got to hear interesting and useful advice on how to best capitalize on new technologies in the field of education.",
      imageUrl1: "PHOTOS/Classroom/IMG_6747.webp",
      imageUrl2: "PHOTOS/Classroom/IMG_6749.webp",
      imageUrl3: "PHOTOS/Classroom/IMG_6752.webp",
      date: "September 7, 2024 1PM" ,
  },
  7: {
      title: "Entry #7: Freshie Orientation (Hosted by Silliman University) [Participant]",
      content1: "On the morning September 11, the freshie orientation was held, it was a school-wide orientation meant to inform us new students on the new and current changes of the school. They also talked about several of the policies and new missions of the school. They also talked about new improvements and benefits that are granted to us as students.",
      content2: "The first speaker spoke about the health advantages of being in Silliman. Turns out we get a hefty discount for all SUMC services including check-ups, Dentistry, operations and other services. This made me joyful because usually I skip out on doing tooth cleaning because it’s too expensive, turns out it’s pretty affordable as a student. The second speaker spoke on the new mission of having a Safe Spaces implementation. They talked heavily on what Sexual Abuse on campus means, and what consequences are to be discussed depending on the situation.",
      content3: "This talk made me realize that not only is the school invested in the student body, they are also invested in our safety. They make it a mission to prevent and protect women from being sexually harassed on or even outside campus by having services where these victims can ask for help and feel safe during heinous situations. This is something that more schools should take seriously, especially those schools who involve larger student populations that may feel unsafe or unprotected on campus.",
      content4: "Because of this activity I got to learn about the missions and the promises that Silliman shows as a leader in University Education in the region. I feel much safer and much better knowing that I am in a school that cares about my safety as much as I do and I hope that many more school’s take the same amount of attention to these social issues.",
      imageUrl1: "PHOTOS/Classroom/IMG_6807.webp",
      imageUrl2: "PHOTOS/Classroom/IMG_6809.webp",
      imageUrl3: "PHOTOS/Classroom/IMG_6812.webp",
      date: "September 11, 2024 8AM" ,
  },
  8: {
      title: "Entry #8: ROTC Speech Contest (Hosted by SU ROTC Unit) [Participant]",
      content1: "Our ROTC Unit hosted a speech contest where-in anyone of each company could join and represent their unit. I decided to watch it because I knew 2 of the contestants there. One of them was a previous batchmate in high school and already knew she would bag it due to her talent in performance arts. It was during a Saturday morning and was at the luce auditorium.",
      content2: "Their speeches we’re mostly about patriotism and carrying through pain and suffering to become better people. The one speech that really spoke to me was the representative for Foxtrot. She mentioned that her grandfather was a part of the Army and always wanted for her to be strong in the future for the ROTC Program. It was also about patriotism and having the will to push through challenges. It was quite touching and it was very special as it was dedicated to her grandfather. My batchmate though was pretty good to but the substance of her speech was kind of predictable chatter but had amazing delivery and was the best in terms of actual performance. She won however and am still proud of her despite being in another company. ",
      content3: "The speeches from the others were somewhat unique but what’s important is that we got to feel the sense of patriotism that ROTC was meant to infuse in us and it was quite inspiring. It made us all feel that the effort we’re taking to get burned in the sun was well worth it and is a sign of our commitment to protecting our land.",
      content4: "Because of this activity, I got to witness the performance skills of my fellow ROTC cadets and I admire their bravery for representing their respective companies. I also got to inspire myself to push through with flying colors, it made me feel like all of us in that room we’re there to achieve something amazing.",
      imageUrl1: "PHOTOS/Classroom/IMG_7196.webp",
      imageUrl2: "PHOTOS/Classroom/IMG_7199.webp",
      imageUrl3: "PHOTOS/Classroom/IMG_7201.webp",
      date: "October 12, 2024 10AM",
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
    const { title, date, content1, content2, content3, content4, imageUrl1, imageUrl2, imageUrl3 } = contentData[contentNum];

    box.classList.add('enlarged');
    box.innerHTML = `
    <div class="boxInformation">
        <button class="close-button">&times;</button>
        <h2 style="margin: 0 auto; text-align: center;">${title}</h2>
        <center> <h3 class="normalyap" style="margin: 5px 0 20px;">${date}</h3> </center>
        <h3 class="normalyap normalyapscontent" style="margin: 20px;">${content1}</h3>
        <h3 class="normalyap normalyapscontent" style="margin: 20px;">${content2}</h3>
        <h3 class="normalyap normalyapscontent" style="margin: 20px;">${content3}</h3>
        <h3 class="normalyap normalyapscontent" style="margin: 20px;">${content4}</h3>
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
