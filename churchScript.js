// THIS IS FOR Church CONTENT!

const contentBoxes = document.querySelectorAll('.contentBox');

// Define unique content for each box by ID
const contentData = {
  1: {
      title: "Entry #1: College of Computer Science Founders Week: Devotion (hosted by College of Computer Science) [Participant]",
      content1: "Turns out in my first few weeks of school it would be the founder’s week of our college and we had a devotion mass. It was early in the morning and was just a quick mass. It was my first time in the Silliman Church as well actually. It was hosted by our college’s faculty and was held inside the Church.",
      content2: "The sermon was very insightful and the main discussion of the homily is breaking down the letters in CCS to mean 1: Committing All Plans and Activities to God, 2: Connecting with God in prayer, 3: Surrender all glory and credit to God (C.C.S). This was a very impactful set of advices to live by because as college students it is important to have a spiritual support system in times of hardship and challenges. Another set of acronyms is PEN, Presence of the lord, Enabling the power of the lord, Nurturing the love and care of the lord. These were all good advice that we learned that would help us succeed as CCS students.",
      content3: "This experienced made me realize that as a Computer Science Major I will have a lot of struggles and challenges that I would need to go through to get my degree. I have to commit all my intentions to God and to connect with him by constant prayer, and of course to give all the glory to the Lord almighty. I realized that I’m not alone in this journey as long as I pray and stay connected to God.",
      content4: "Because of this activity, I learned a lot of insight towards the role of belief in my journey. I’m also reminded of the power of prayer when you are in need of guidance or to feel like you are not alone.",
      imageUrl1: "PHOTOS/Church/IMG_6406.webp",
      imageUrl2: "PHOTOS/Church/IMG_6407.webp",
      imageUrl3: "PHOTOS/Church/IMG_6408.webp",
      date: "August 19, 2024 8am" ,
  },
  2: {
      title: "Entry #2: J2MAD 20th Anniversary (hosted by Jesus To Make A Difference) [Participant]",
      content1: "J2MAD is a worship organization under the Silliman Church and for their 20th Anniversary they held a 2 hour worship night full of music and good vibes as we worshipped the Lord. It was quite late at night but I still manage to arrive to the church.",
      content2: "Prior to this show I’ve always thought that Worship Services we’re honestly kind of underwhelming in a musical sense. It’s always the same repertoire and the same kind of emotion but this show was different and it impacted me so hard. When I first heard the song it was roaring and was played so well. The sound system wasn’t that great but it didn’t need to be because the singers had such masterful performances. The guitarist was also very virtuosic, even doing a solo that blew my mind.",
      content3: "After the show, I’ve come to a newfound appreciation for worships services. It just turns out that the magic of it doesn’t translate in digital platforms. The message of worship and of God to me never felt strong when simply watching a recorded performance. I think that the church reverb also amplifies it which is a big reason why it feels so wide and strong, giving you goosebumps and making you feel something inside.",
      content4: "Because of this activity, I am more open to being a part of more Worship Nights and services. I am also beginning to be open to being a part of the band in our church as I was inspired by what I saw that night. ",
      imageUrl1: "PHOTOS/Church/IMG_6663.webp",
      imageUrl2: "PHOTOS/Church/IMG_6666.webp",
      imageUrl3: "PHOTOS/Church/IMG_6667.webp",
      date: "August 31, 2024 6pm" ,
  },
  3: {
      title: "Entry #3: Saint Theresa Northville Mass (hosted by NOHRAI) [Participant]",
      content1: "In our barangay, we have a patron saint that we also celebrate the feast of which is for Saint Therese of the Child Jesus which is every October 1, coincidentally also the birthday of my mother. She invited me to come with her so I went with her. This took place on a little chapel in our barangay. There was also food to celebrate our little feast.",
      content2: "The mass was a very intimate and spiritual one and one of the best homilies I’ve heard. It was about St. Therese’s origins and what she was like before becoming a saint. At a young age, she always lived a life of Humility, Kindness and holiness by expressing her love and trust for God’s mercy in her little ways. She wanted to dedicate her life to God but was denied by the Pope to enter the Carmelite convent in Lisieux due to her young age. That did not stop her however, but after a few years she contracted Tuberculosis and died at 24 years old with many being inspired by her autobiography, &quot;Story of a Soul&quot;",
      content3: "The priest then explained the value of emulating St. Theresa’s actions in our lives by doing our little acts of kindness. I understood that what the &quot;little way&quot; teaches is that holiness does not require grand gestures but can be found in doing small, everyday tasks with great love and humility and that Her life reminds us that love, no matter how small, transforms and uplifts our daily actions.",
      content4: "Because of this activity, I got to celebrate our Barangay and my mother’s birthday in a holy and insightful manner. I also appreciate the knowledge I got about Saint Theresa as her life is both inspiring and interesting.",
      imageUrl1: "PHOTOS/Church/IMG_7149.webp",
      imageUrl2: "PHOTOS/Church/IMG_7151.webp",
      imageUrl3: "PHOTOS/Church/IMG_7152.webp",
      date: "October 1, 2024 6:30pm" ,
  },
  4: {
      title: "Entry #4: Cathedral Parish Day / Parade of Saints (hosted by Dumaguete Cathedral) [Participant]",
      content1: "The Dumaguete Cathedral Parish day is a celebration feast of the Dumaguete Cathedral. It was a short mass followed by a little parade of the people right after. It was a busy afternoon and the Cathedral Church was well decorated for the occasion.",
      content2: "There were a lot of families in attendance but the main event of the parish day is the Parade of Saints. It was a well done mass about St. Catherine of Alexandria. The Parade of saints was consisting of the priest, altar boys and the people in attendance lighting up a torch and going around the church. It was a very special gathering and there was a little program after in front of the church later that night. It was really nice to see since I haven’t been in that church in a long time and it was where my mother took me to go to church before we moved.",
      content3: "What I got from the parade of saints was that it’s also important to support the churches that are around you because they do their job very well in maintaining a holy place of worship and as well as marking a significant part of your city’s history. Considering that the belltower and church itself is full of historical and cultural value, it’s important that a ruling party such as the parish ministry is taking care of that place of worship.",
      content4: "Because of this event, I got to celebrate an important church and religious area that’s been kept alive for a long time. I also got to celebrate the feast of their Parish day which marks another anniversary of the priest community in the church.",
      imageUrl1: "PHOTOS/Church/IMG_7323.webp",
      imageUrl2: "PHOTOS/Church/IMG_7325.webp",
      imageUrl3: "PHOTOS/Church/IMG_7326.webp",
      date: "October 31, 2024 5pm" ,
  },
  5: {
      title: "Entry #5: IVCF Bible Group Session (hosted by IVCF) [Participant]",
      content1: "IVCF is a non-profit organization that does group and duo Bible study sessions. My friend happened to book a group session and invited us. We did it on the grass, on campus, on a nice Friday afternoon. I was along a few CCS Students so it wasn’t awkward at all. Our Bible session leader, Ate Yel from CBA was a super nice and approachable lady. She was a long-time member of the organization and did many of these group sessions weekly.",
      content2: "Ate Yel’s session was very interesting and fun. She was really good at explaining scriptures and would often relate their meanings to us in such an easy way. She was super nice and inviting, she had some activities that really helped to open up. The group session definitely surprised me as I had fun and learned a few things about the bible and about belief. This experience benefitted me because I got to be able to delve into the bible with my friends and had a relaxing and fun time.",
      content3: "This experience definitely changed how I view group bible sessions because I thought it wouldn’t really be all that interesting, but I guess that just depends on whoever is doing it and if they are passionate. I would’ve loved to continue with it but because that was just a one-off thing and it was rare that I didn’t have class at that time period, we just didn’t go through with it but I definitely see the appeal of it now.",
      content4: "Because of this activity, I get to appreciate group sessions and setting time to actually talk about God and the Bible. It helps calm your mind and your spirit and allows me to get closer to other people in the group.",
      imageUrl1: "PHOTOS/Church/IMG_7410.webp",
      imageUrl2: "PHOTOS/Church/IMG_7417.webp",
      imageUrl3: "PHOTOS/Church/IMG_7415.webp",
      date: "November 15, 2024 1pm" ,
  },
  6: {
      title: "Entry #6: Galilean Fellowship (hosted by Silliman Univeristy) [Participant]",
      content1: "In Silliman, the UCLEM (University Christian Life Emphasis Month) is a time field with religious activities that strengthens and fortifies the Christian living of the Student Body. One of these events were the Galilean Fellowship. It was a gathering of me and my CHS classmates led by Divinity School students.",
      content2: "Initially I thought it would be just a sermon but turns out it was an interactive activity. It’s my first Galilean Fellowship as well since my classmates have already done it previously. The fellowship itself was intimate but still warm and welcoming. We started off with introductions then a little talk on Facing your Giants, after was an activity recreating the scene of David and Goliath. This impacted me because I felt connected to everybody and it felt so insightful especially when it comes to fear and facing it.",
      content3: "My main takeaway is that a man is not strong because he is scary or powerful, he is strong because he trusts in God. The main theme also aligns with this which is facing your giants. We have lots of giants in life and to succeed as a human being, we must make sure that those fears and giants shouldn’t get the best of it. Just like David, we shouldn’t be scared because we have God on our side. We should let our slings be our work and  aim for the right goals but still believe that God will pull through with your success.",
      content4: "Because of this activity, I got to connect with my friends and with our fellowship leaders. There was also an activity where we prayed for our partner and we were given wrist bands that showed the theme of Facing Life’s Giants.",
      imageUrl1: "PHOTOS/Church/IMG_7467.webp",
      imageUrl2: "PHOTOS/Church/IMG_7468.webp",
      imageUrl3: "PHOTOS/Church/IMG_7471.webp",
      date: "November 19, 2024 5pm" ,
  },
  7: {
      title: "Entry #7: All Colleges Mid-week Convocation (hosted by Silliman Univeristy Church) [Participant]",
      content1: "This mass follows this year’s UCLEM theme just like the Galilean Fellowship, of Faith Over Fear. This mass was an evening mass that I almost missed because it was raining but thankfully, God made a way for me to experience it. ",
      content2: "The topic was also about Faith over Fear and referenced David and Goliath. One interesting thing though was the priest’s story with COVID which exemplifies the theme of UCLEM which is Faith over Fear. He lost all his friends due to COVID and he himself got infected but managed to pull through. That inspired me so much because, I got Omicron which wasn’t at all comparable to his experience. At that time I was also scared because the news and everything around my mind was just so negative so that became my giant for that moment in time and it just reminded me of how I just sucked it up and continued to wait for better days and not letting fear takeover my life.",
      content3: "I got the benefit from this mass of realizing that all you need is prayer and belief in God to tackle your fears. Just like David, what gives you power is prayer and we just emulate that example. Just like the example of the priest on his tragic experience of COVID, prayer got him through that sad situation as one might feel the fear grow into something massive that stops you from bouncing back.",
      content4: "Because of this activity, the values of UCLEM got internalized in me and now I carry that message with me all the time. I am now ready to face my giants and commanding my Faith to topple over my fears.",
      imageUrl1: "PHOTOS/Church/IMG_7488.webp",
      imageUrl2: "PHOTOS/Church/IMG_7491.webp",
      imageUrl3: "PHOTOS/Church/IMG_7492.webp",
      date: "November 20, 2024 6pm" ,
  },
  8: {
      title: "Entry #8: PEP Christmas Outreach (hosted by Silliman Unvirsity PEP [Participant]",
      content1: "For our PEP final project, we had to buy 5kg worth Rice and coffee as a group. We  were also tasked to gather somewhere and do the outreach to give the rice and coffee to our cleaning and janitorial staff here in Silliman. In a mass followed by the distribution, we had an enjoyable time seeing the Janitorial Staff’ be",
      content2: "It felt nice to be able to make another person and their family’s Christmas by giving something simple. It’s nice that we get to celebrate Christmas by giving, especially to the people who keep the environment of the campus clean and safe. As a new student, I think that they do an amazing job with the campus and it feels right that the school also appreciates their hard work. Buying the rice as group wasn’t too heavy on our pockets so it feels nice to make a difference.",
      content3: "This gift giving activity really emphasized the benefits of giving, especially knowing that you can make someone’s Christmas. I never really got to give white-gifts in a while since my old school never really forced us too. I feel a lot more open to doing more white-gift drives in the future. The mass was also very relatable because sometimes it’s good to give back.",
      content4: "Because of this Christmas, I got to celebrate this special time of the year as a good Christian giver. I also understood the vitality of being a giver and not a receiver in this time of struggles.",
      imageUrl1: "PHOTOS/Church/IMG_7529.webp",
      imageUrl2: "PHOTOS/Church/IMG_7531.webp",
      imageUrl3: "PHOTOS/Church/IMG_7535.webp",
      date: "Novemeber 27, 2024 4pm" ,
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
