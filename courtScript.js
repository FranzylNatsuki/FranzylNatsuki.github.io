// THIS IS FOR Court CONTENT!

const contentBoxes = document.querySelectorAll('.contentBox');

// Define unique content for each box by ID
const contentData = {
  1: {
      title: "Entry #1: Pantawan Beach Volleyball Match (Hosted by Dumaguete City / LGU) [Participant]",
      content1: "I used to play casual volleyball with my friends during our free times back in the day and I never really got playing barefoot and on the sand. Dumaguete City hosts these beach volleyball matches almost every night and it’s always quite the heated match always. There are always talented players and they always shine under the pantawan moonlight.",
      content2: "This match we we’re watching was just as heated as every other night. It was a girls on girls but the other team had a few boys with them. The sets we’re really good and some of them were intense with their spiking. There were many amazing saves from the team in blue. They ended up winning by a landslide but the red was fierce with their play too.",
      content3: "This experience made me realize that perhaps the greatest of plays aren’t just on TV or online, maybe you can find gems of sports right outside your door. These young players with enough dedication and the right opportunities could make it big. This inspires me to do good on the things that I’m good at whether it sports or other things.",
      content4: "Because of this activity, I got to see an enjoying display of volleyball prowess and the happiness of the audience and players was also infectious. This made me appreciate the power of sports.",
      imageUrl1: "PHOTOS/Court/IMG_6692.webp",
      imageUrl2: "PHOTOS/Court/IMG_6687.webp",
      imageUrl3: "PHOTOS/Court/IMG_6689.webp",
      date: "August 31, 2024 6PM" ,
  },

  2: {
      title: "Entry #2: Pantawan Paddleball Lessons (Hosted by Dumaguete City / LGU) [Participant]",
      content1: "Paddleball is one of those sports that I always thought were strange because the premise is literally just a combination of other sports but watching these children have paddleball lessons with their coach was a unique experience. In Pantawan, there are always these kids having lessons but Paddleball was the most unique one. ",
      content2: "Paddleball as I’ve come to understand by asking the students, The serve in this game has to be underhand and also serves the diagonal court. There is also a no-volley zone near the net where players are not allowed to volley the ball. It’s quite similar but the paddle shape and the fact that the ball is similar to Sepak Takraw gives it a different feel. Tennis also feels much more of a hassle as someone who plays casually.",
      content3: "Seeing this made me curious as to what Paddleball really is like and the intricacies of it despite being similar. I believe that you never really see the intricacies until you really get into it like how I got into badminton or tennis. This really made me more open to trying things I think is quite strange at first.",
      content4: "	Because of this activity, I learned something cool about a rare sport. I also had fun watching the students enjoy learning something new that they could be passionate about.",
      imageUrl1: "PHOTOS/Court/IMG_6700.webp",
      imageUrl2: "PHOTOS/Court/IMG_6696.webp",
      imageUrl3: "PHOTOS/Court/IMG_6697.webp",
      date: "August 31, 2024 7PM" ,
  },
  3: {
      title: "Entry #3: PSFF Softball Men’s Tournament (Hosted by PlanOut Sports and Fitness Festival) [Participant]",
      content1: "PSFF is an sports organization that hosts yearly tournaments around the city and they had lots of events piled up. One of these sporting events was a Softball Tournament at Rusi Ballfield. Softball isn’t common in the Philippines so I never got to see a real match in real life before. This match specifically was one of the first in their lineup for the week.",
      content2: "I know a bit of the rules of baseball but softball is a little different. Softball uses underhand pitching instead of overhand and has a smaller field. It still felt quite similar however so I was able to keep up with their plays. Their skill was quite good and was pretty inspired by their pitches and their batting.",
      content3: "Seeing this match made me realize that stuff in real life looks much better than it does in media. If you’re ever curious about a sport you’d never see in your day to day you just have to go out of your way to see it yourself. This definitely benefitted my knowledge of new sports that I’ve never experienced before.",
      content4: "Because of this activity, I got to be blown away by some cool plays in this tournament. It’s also nice to know that the city that I’m living in is also caught up in things that a decade ago seemed like it had no presence here.",
      imageUrl1: "PHOTOS/Court/IMG_6753.webp",
      imageUrl2: "PHOTOS/Court/IMG_6754.webp",
      imageUrl3: "PHOTOS/Court/IMG_6755.webp",
      date: "September 7, 2024 2 PM" ,
  },
  4: {
      title: "Entry #4: PSFF Karate Tournament (Hosted by PlanOut Sports and Fitness Festival) [Participant]",
      content1: "This is another tournament/competition hosted by PSFF and held in the NORSU gym. This was actually for children around 10-15 and it was mostly based on performance and form rather than an actual sparring match. There were even judges rating their form like it was gymnastics.",
      content2: "Watching this young kids reminded me of my time learning “karate” back in elementary school. It was only really an performance art form, hence why it’s called Martial Arts. I got to learn how to do the punches and the footwork. I didn’t last too long because it was too annoying to continue and I never got my uniform. But seeing these kids be so good at their form and was even in the zone, made me realize that if I just continued that maybe I’d look as cool as them back then. ",
      content3: "This experience helped me realize that if you just keep on being consistent on the things that you’re doing right now, you could achieve many things. Sadly I signed up to Karate for the wrong reasons and couldn’t really get into it. Seeing this also made me reflect on the things that I’ve given up simply because I was never really clear with the reason I why I got into it. It also made me appreciate the arts component in martial arts, as these techniques barely work in the grand scheme of things.",
      content4: "Because of this activity, I got to remind myself of my childhood and also got to support younger people getting into the sport. I also got to see some new moves, from children who are more experienced than I was.",
      imageUrl1: "PHOTOS/Court/IMG_6760.webp",
      imageUrl2: "PHOTOS/Court/IMG_6762.webp",
      imageUrl3: "PHOTOS/Court/IMG_6764.webp",
      date: "September 7, 2024 3 PM" ,
  },
  5: {
      title: "Entry #5: Foundation University:  Women’s Futsal Tournament (Hosted by Foundation University) [Participant]",
      content1: "Foundation University is a school that’s known for their talents on Football and Futsal. We happened to come across their sports festival and we watched their Women’s Futsal Tournament for a while.",
      content2: " Futsal is quite common in our school but I’ve never really seen a good match yet. So I was kind of expecting a not so entertaining match. There was also a football match outside but it was quite too hot so we’d just rather see their indoor Futsal match. I would say that the players here we’re pretty good. They were fast runners and were agile and had good handling on the ball. What shocked me though was how hard they shot into their goal. They kick with so much strength that it was crazy. One iconic moment was when one of their offensive shooters shot into the goal, got blocked, immediately caught it and kicked it again, and once again the goalie caught it but another teammate smacked the ball as hard to the goal.",
      content3: "It was so much hype and the Foundation University’s students were as just proud of their athletes as they were for themselves. This experience elevated my opinion of Futsal because I thought it looked a little awkward back in my school, but when played by professionals or amateurs it looks really cool.",
      content4: "Because of this activity, I got to see some fresh feats of futsal and got to appreciate a masterful display of expertise on the sport. I also got to see the pride and love for sports that the audience had in that event.",
      imageUrl1: "PHOTOS/Court/IMG_6765.webp",
      imageUrl2: "PHOTOS/Court/IMG_6767.webp",
      imageUrl3: "PHOTOS/Court/IMG_6769.webp",
      date: "September 7, 2024 4 PM" ,
  },
  6: {
      title: "Entry #6: PSFF Badminton Tournament (Hosted by PlanOut Sports and Fitness Festival [Participant]",
      content1: "The last match that we got to see this day was another PSFF Tournament but for badminton. It was taking place in Riverside Courts which I’ve always wanted to go to because I wanted to play badminton.",
      content2: "Watching the badminton tournament opened my eyes. I thought I'd just see some skilled players, but I was blown away by how focused and quick they were, and how they moved. One player caught my attention though,  she didn't give up after being against her opponent , which really wowed me and the audience and people cheered her on when she was so close to tying the match.",
      content3: "The tournament changed how I see things. It showed me why it's so important to bounce back and learn from winning and losing. I can use this way of thinking for my own goals making sure I don't give up. I want to stay connected to the sport maybe by going to more tournaments or joining a club near me.",
      content4: "Because of this activity, I got to see sportsmanship and an ever glowing flame of passion from the tournament. I also love badminton so it was satisfying to see such good matches coming from such passionate people.",
      imageUrl1: "PHOTOS/Court/IMG_6775.webp",
      imageUrl2: "PHOTOS/Court/IMG_6777.webp",
      imageUrl3: "PHOTOS/Court/IMG_6778.webp",
      date: "September 7, 2024 5 PM" ,
  },
  7: {
      title: "Entry #7: Pasidlakan (Hosted by Silliman University SUSHS) [Participant]",
      content1: "Pasidlakan is a sporting event by the Silliman Universiy Senior High Schoolers and I only really got to one of the last games which were basketball. There were really tall seniors playing basketball so we decided to just sit for a while a watch them play.",
      content2: "I was encouraged to play basketball by the high school seniors and that made me excited. I assumed that I would get to see some good shots as well as fast moves and that is what I got but to a much larger extent. There was one player who seemed the to time be and advising talking them to on his the teammates next all plan as well as remaining calm even when it got hot.",
      content3: "The game also changed my perspective on teamwork and concentration. It was understood that success is not only a solo effort, but a group effort. I would like to watch more games to see how other teams deal with the pressure. It also shows how basketball assists in the development of communication skills and fast decision making.",
      content4: "Because of this activity, I got to see some great basketball plays. It’s proud to see that people younger than me are as passionate to something at such a young age. They also made basketball seem approachable and enjoyable for the audience. ",
      imageUrl1: "PHOTOS/Court/IMG_7307.webp",
      imageUrl2: "PHOTOS/Court/IMG_7311.webp",
      imageUrl3: "PHOTOS/Court/IMG_7312.webp",
      date: "October 28, 2024 6PM" ,
  },
  8: {
      title: "Entry #8: Ding Ibato (Hosted by DOST sa SU) [Participant]",
      content1: "The DOST sa SU team hosted a sporting event in the Ravello Field. It was a dodgeball tournament and was done for charity. It was done in the afternoon and I went and watched my friends play in their squad.",
      content2: "My friends were amazing in their plays because they were just so fast and witty with the way they throw their ball. One of my classmates who is a gym bro absolutely obliterated every person he came across with his intense throw. Some of my friends were also good at dodging and shocked the audience with their ultra instincts.",
      content3: "This was a fun experience seeing people enjoy playing Dodgeball. Dodgeball is one of those sports that seem simplistic but with the right people, it becomes an extremely action-packed sport and I honestly wished I could’ve been a part of it if I wasn’t sick.",
      content4: "Because of this activity, I got to support my friends who were really good at Dodgeball but also seeing everybody enjoy this simple sport and have fun to support DOST.",
      imageUrl1: "PHOTOS/Court/IMG_7401.webp",
      imageUrl2: "PHOTOS/Court/IMG_7405.webp",
      imageUrl3: "PHOTOS/Court/IMG_7406.webp",
      date: "November 13, 2PM" ,
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
