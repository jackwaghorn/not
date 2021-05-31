let blurLayer = document.getElementById("blur");
let pageOverlay = document.getElementById("pageOverlay");

let listKey = document.getElementById("list-key");
let dotMap = document.querySelectorAll(".dot");

let dotMapContent = document.querySelector(".overlay").innerHTML;

const datas = {
  red: "Window",
  green: "Check in area",
  teal: "Hub",
  yellow: "Pop ups",
  orange: "Service Area",
  blue: "Mezzanine lounge",
  pink: "Fitting Rooms",
  grey: "layout plans",
};

// Create key list
for (const [key, value] of Object.entries(datas)) {
  let li = document.createElement("li");
  listKey.appendChild(li);
  li.innerHTML = `<div class="dot ${key}"></div>${value}`;
  li.id = key;
}

let list = document.querySelectorAll("li");

// // Dot finders
// list.forEach((el) => {
//   dotChanger(el);
// });

// // Select dot
// function dotChanger(el) {
//   el.addEventListener("mouseover", function () {
//     let color = el.id;
//     document.querySelector(
//       ".overlay"
//     ).innerHTML = `<div id="${color}" class="dot ${color} ${color}_position dot_resize"></img>`;
//   });
//   el.addEventListener("mouseout", function () {
//     document.querySelector(".overlay").innerHTML = dotMapContent;
//   });
// }

list.forEach((i) => {
  pageChanger(i);
});

dotMap.forEach((i) => {
  pageChanger(i);
});

function pageChanger(i) {
  i.addEventListener("click", function () {
    let color = i.id;
    if (color === "grey") {
      pageOverlay.innerHTML = `
      <div class="area">
      <div class="instagram2"><img src="img/plan_instagram-small.png" data-src="img/plan_instagram.png" class="lazyload" alt="">
      </div>
      <div class="backbtn"><img src="img/not-small.png" data-src="img/not.png" class="lazyload" alt="">Back to concept model</div>
      </div>
    <div class="wrap">
        <div class="layoutplans">
          <div class="layout_ground"><img src="img/plan_ground-small.jpg" data-src="img/plan_ground.jpg" class="lazyload" alt="">
          </div>
          <div class="layout_mezz"><img src="img/plan_mezz-small.jpg" data-src="img/plan_mezz.jpg" class="lazyload" alt="">
          </div>
        </div>
        
    </div>
  
    `;
    } else if (color === "teal" || color === "pink" ) {
      let title = i.textContent;
      pageOverlay.innerHTML = `
    <div class="area">
    <div class="backbtn"><img data-src="img/not.png" class="lazyload" alt="">Back to concept model</div>
      </div>
        <div class="instagram"><img src="img/${color}/${color}_instagram-small.png" data-src="img/${color}/${color}_instagram.png" class="lazyload" alt=""></div>
        <div class="moodboard"><img src="img/${color}/${color}_moodboard-small.png" data-src="img/${color}/${color}_moodboard.png" class="lazyload" alt=""></div>
        <div class="wireframe"><img src="img/${color}/${color}_wireframe-small.jpg" data-src="img/${color}/${color}_wireframe.jpg" class="lazyload" alt=""></div>
    </div>
    `;
    } else {
      let title = i.textContent;
      pageOverlay.innerHTML = `
    <div class="area">
    <div class="backbtn"><img data-src="img/not.png" class="lazyload" alt="">Back to concept model</div>
      </div>
        <div class="instagram2"><img src="img/${color}/${color}_instagram-small.png" data-src="img/${color}/${color}_instagram.png" class="lazyload" alt=""></div>
        <div class="moodboard"><img src="img/${color}/${color}_moodboard-small.png" data-src="img/${color}/${color}_moodboard.png" class="lazyload" alt=""></div>
        <div class="wireframe"><img src="img/${color}/${color}_wireframe-small.jpg" data-src="img/${color}/${color}_wireframe.jpg" class="lazyload" alt=""></div>
    </div>
    `;
    }
  });
}

$("#list-key").click(function () {
  $(pageOverlay).fadeIn(300, "linear");
  $(blurLayer).blur("blur-out", 300);
});

$(dotMap).click(function () {
  $(pageOverlay).fadeIn(300, "linear");
  $(blurLayer).blur("blur-out", 300);
});

$(pageOverlay).click(function () {
  $(pageOverlay).fadeOut(300);
  $(blurLayer).blur("blur-in", 300);
});

pageOverlay.addEventListener("click", function () {
  blurLayer.classList.remove("blur-out");
});

$(".loader")
  .delay(1500)
  .fadeOut(1000, function () {
    // Animation complete.
  });

pageOverlay.addEventListener("mouseover", function () {
  let moodboard = document.querySelector(".moodboard");
  let wireframe = document.querySelector(".wireframe");
  wireframe.addEventListener("mouseover", function () {
    document.querySelector(".moodboard").style.filter = "blur(3px)";
  });
  wireframe.addEventListener("mouseout", function () {
    document.querySelector(".moodboard").style.filter = "blur(0px)";
  });
});
