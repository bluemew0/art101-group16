// ref: https://gamedev.stackexchange.com/questions/54238/how-do-i-implement-branching-dialogue-in-javascript
var eventList = [];
eventList[0] = { text: "I wake up to a terrifying scream.",
            // the different options and next referring to the index of next event
             options: [
               { option: "Next", next: 1 }
             ],
             image: "img/classroom.jpg"
           };

eventList[1] = { text: "I open the office door and see that all the lights are off. ^500 I don't see any advisors who are usually outside of the principal's office.",
            options: [
              { option: "Next", next: 2 }
            ],
            image: "img/classroom.jpg"
          };

eventList[2] = { text: "This is interesting. ^500 What should I do?",
            options: [
              { option: "Stay in the office and wait until someone comes", next: 3 },
              { option: "Go out and try to find the teachers and other students",
              next: 4 }
            ],
            image: "img/classroom.jpg"
          };

eventList[3] = { text: "I decide to stay in the office, but suddenly, I hear someone knocking on the door. ^500 Should I open it?",
            options: [
              { option: "Yes, open the door", next: 5 },
              { option: "No, don't open the door",
              next: 6 }
            ],
            image: "img/classroom.jpg"
          };

eventList[4] = { text: "I decide to leave the office. ^500 When I walk out to the hallway, I'm met with a bloody corpse lying on the floor. Do I want to check the office for anything?",
            options: [
              { option: "Yes, check the office", next: 9 },
              { option: "No, don't check the office", next: 14}
            ],
            image: "img/classroom.jpg"
          };

eventList[5] = { text: "I open the door and as soon as I do, a wave of zombies lunge at me and slowly devour me. ",
            options: [
              { option: "Restart?", next: 0}
            ],
            image: "img/classroom.jpg"
          };

eventList[6] = { text: "I decide to not open the door. ^500 Instead, I make my way to the end of the office and I find a closet. Should I hide inside it?",
            options: [
              { option: "Yes, hide in the closet", next: 7 },
              { option: "No, don't hide in the closet",
              next: 9 }
            ],
            image: "img/classroom.jpg"
          };

eventList[7] = { text: "I decide to hide in the closet. ^500 From nearby, I hear something break down the door and invade the office. There are many... ^500 things...^500 groaning and it sounds like they're gettting closer.",
            options: [
              { option: "Next", next: 8}
            ],
            image: "img/classroom.jpg"
          };

eventList[8] = { text: "Suddenly, the closet doors swing open and I'm met with zombies eating me to my death.",
            options: [
              { option: "Restart?", next: 0}
            ],
            image: "img/classroom.jpg"
          };

eventList[9] = { text: "After looking around, I somehow found a samurai sword. Should I pick it up?",
            options: [
              { option: "Yes, pick up the sword", next: 10 },
              { option: "No, don't pick up the sword",
              next: 11 }
            ],
            image: "img/classroom.jpg"
          };

eventList[10] = { text: "I decide to pick up the sword. ^500 Just as I do, a swarm of^500.^500.^500.^500 zombies?! break down the door and make their way into the room. Should I fight back?",
            options: [
              { option: "Yes, fight back", next: 12 },
              { option: "No, don't fight back",
              next: 13 }
            ],
            image: "img/classroom.jpg",
          };

eventList[11] = { text: "I decide to not pick up the sword. ^500 Just as I don't, a swarm of ^500 zombies?! break down the door and make their way into the room. It seems I've met my end.",
            options: [
              { option: "Restart?", next: 0 }
            ],
            image: "img/classroom.jpg"
          };

eventList[12] = { text: "I decide to fight back. ^500 I slash the samurai sword at the zombies. It somehow feels natural in my hands or maybe it's just my adrenaline pumping. Either way, I'm able to defeat the zombies in the room and finally leave the office.",
            options: [
              { option: "Next", next: 14 }
            ],
            image: "img/classroom.jpg"
          };

eventList[13] = { text: "I decide to not fight back, ^500 for some reason. ^500 Even if these were the undead, I couldn't bring myself to swing at them. And so, I let them eat me.",
            options: [
              { option: "Restart?", next: 0 }
            ],
            image: "img/classroom.jpg"
          };

eventList[14] = { text: "The hallways are empty. What should I do now?",
            options: [
              { option: "Search around the school", next: 15 },
              { option: "Leave the school and search the streets", next: 17 }
            ],
            image: "img/classroom.jpg"
          };

eventList[15] = { text: "I decide to search around the school. ^500 During my search, I'm approached by more zombies. What should I do?",
            options: [
              { option: "Fight them", next: 16 },
              { option: "Run", next: 17 }
            ],
            image: "img/classroom.jpg"
          };

eventList[16] = { text: "There are too many zombies^500.^500.^500. ",
            options: [
              { option: "Fight", next: 18 },
              { option: "Run", next: 17 }
            ],
            image: "img/classroom.jpg",
            swordTrue: "It's going to be a tough fight.",
            swordFalse: "It is impossible to win without a weapon."
          };

eventList[17] = { text: "I leave the school and its zombies, heading towards the streets.",
            options: [
              { option: "Next", next: false }
            ],
            image: "img/classroom.jpg",
            link: "../story/ending.html"
          };

eventList[18] = { text: "Without a weapon, I am powerless. ",
            options: [
              { option: "Next", next: false }
            ],
            image: "img/classroom.jpg",
            swordTrue: "But luckily, I have one and so I fend off the zombies off of me and finally leave the school.",
            swordFalse: "And so I meet my end to the zombies.",
            link: "../story/ending.html"
          };
