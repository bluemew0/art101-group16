var eventList = [];

eventList[0] = { text: "I suddenly awaken, gasping in awe at what I had dreamt. I look at the clock and it's only been 30 minutes but it feels like it's been hours.",
            // the different options and next referring to the index of next event
             options: [
               { option: "Next", next: 1 }
             ],
             image: "img/temp.png"
           };

eventList[1] = { text: "What a strange dream^500.^500.^500.",
           // the different options and next referring to the index of next event
            options: [
              { option: "Next", next: 2 }
            ],
            image: "img/temp.png"
          };

eventList[2] = { text: "The principal returns to the office and asks me, &#34;Did you have a nice nap?&#34; I see a slight smirk on his face as I leave the office in a hurry.",
           // the different options and next referring to the index of next event
            options: [
              { option: "Home", next: false }
            ],
            image: "img/temp.png",
            link: "../main.html"
          };
