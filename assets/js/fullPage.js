log = console.log

TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: false,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({
      delay: 0.5
    });
    tl.fromTo(title, 0.5, {
      y: "50",
      opacity: 0
    }, {
      y: "0",
      opacity: 1
    });

  }
});

let seeDetails = document.querySelector('#seeDetails')
addFav = document.querySelector("#addFav")


seeDetails.addEventListener('click', () => {
  fullpage_api.moveTo(2)
})

addFav.addEventListener('click', () => {
  fullpage_api.moveTo(3)
})
