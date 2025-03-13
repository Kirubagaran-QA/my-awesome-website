// ------------------footer-cookie-section-js-------------------------

var close = document.querySelector(".cookie-close")
var cookie = document.querySelector(".cookie")

close.addEventListener("click",()=>{
    cookie.style.display="none"

})

// ------------------footer-cookie-section-----------------------------


// var left = document.getElementById("one")
// var  moveLeft = document.querySelector(".move-left")
// var  moveRight = document.querySelector(".move-right")
// moveLeft.addEventListener("click", () => {
//     left.style.transform = "translateX(-100)";
// });

// var reviewercontent =document.querySelector("review-content")
// var reviewer =document.querySelector(".reviewer")

// var slidder1 =document.querySelector(".slidder-1")
// var slidder2 =document.querySelector(".slidder-2")
// var slidder3 =document.querySelector(".slidder-3")

// slidder1.addEventListener("click",()=>{
//     console.log("clicked")
//     reviewercontent.style.transform = "translateX(0px)";
// })


// var click = document.querySelector(".form__radio-button");
// var click2 = document.querySelector(".svg");

// click.addEventListener("click",()=>{
    
//     click.style.background="#55c57a";
//     click2.style.display="flex";
    
// })


// var position = document.querySelector(".position");
// var position1 = document.querySelector(".position1");
// var position2 = document.querySelector(".position2");
// var position3 = document.querySelector(".position3");
// var position4 = document.querySelector(".position4");
// var position5 = document.querySelector(".position5");
// var position6 = document.querySelector(".position6");




// var positionOne = document.querySelector(".position-one");
// var positionTwo = document.querySelector(".position-two");
// var positionThree = document.querySelector(".position-three");
// var positionfour = document.querySelector(".position-four");
// var positionfive = document.querySelector(".position-five");
// var positionsix = document.querySelector(".position-six");




// position1.addEventListener("click",()=>{
//     position1.style.position = "relative"; // or "absolute", "fixed", "sticky"
//     position1.style.zIndex = "10";
//     position.style.zIndex = "0";
// })

// positionOne.addEventListener("click",()=>{
  
//     position1.style.zIndex = "10";
//     position2.style.zIndex = "0";
//     position3.style.zIndex = "0";
   
// })

// positionTwo.addEventListener("click",()=>{
  
//     position2.style.zIndex = "10";
//     position1.style.zIndex = "0";
//     position3.style.zIndex = "0";
   
// })

// positionThree.addEventListener("click",()=>{
  
//     position3.style.zIndex = "10";
//     position1.style.zIndex = "0";
//     position2.style.zIndex = "0";
// })

// ----correct
// positionOne.addEventListener("click",()=>{
  
//     position1.style.opacity = "1";
//     position2.style.opacity = "0";
//     position3.style.opacity = "0";
//     position4.style.opacity = "0";
//     position5.style.opacity = "0";
//     position6.style.opacity = "0";
//     position.style.opacity = "0";
   
// })

// positionTwo.addEventListener("click",()=>{
//     position.style.opacity = "0";
//     position2.style.opacity = "1";
//     position1.style.opacity = "0";
//     position3.style.opacity = "0";
//     position4.style.opacity = "0";
//     position5.style.opacity = "0";
//     position6.style.opacity = "0";
   
// })

// positionThree.addEventListener("click",()=>{
//     position.style.opacity = "0";
//     position3.style.opacity = "1";
//     position1.style.opacity = "0";
//     position2.style.opacity = "0";
//     position4.style.opacity = "0";
//     position5.style.opacity = "0";
//     position6.style.opacity = "0";
// })


// positionfour.addEventListener("click",()=>{
//     position.style.opacity = "0";
//     position3.style.opacity = "0";
//     position1.style.opacity = "0";
//     position2.style.opacity = "0";
//     position4.style.opacity = "1";
//     position5.style.opacity = "0";
//     position6.style.opacity = "0";
// })

// positionfive.addEventListener("click",()=>{
//     position.style.opacity = "0";
//     position3.style.opacity = "0";
//     position1.style.opacity = "0";
//     position2.style.opacity = "0";
//     position4.style.opacity = "0";
//     position5.style.opacity = "1";
//     position6.style.opacity = "0";
// })

// positionsix.addEventListener("click",()=>{
//     position.style.opacity = "0";
//     position3.style.opacity = "0";
//     position1.style.opacity = "0";
//     position2.style.opacity = "0";
//     position4.style.opacity = "0";
//     position5.style.opacity = "0";
//     position6.style.opacity = "1";
// })

// more-article
// var hide = document.querySelector(".hide")

// var more = document.querySelector(".click-more-article")
// var btnArticles = document.querySelector(".btn-articles")
// var none = document.querySelector(".close")
// btnArticles.addEventListener("click",()=>{
//     more.style.display="flex"
// })

// none.addEventListener("click",()=>{
//     more.style.display="none"
// })




var reviewercontent =document.querySelectorAll(".review-content")
var reviewer =document.querySelector(".reviewer")
var slidder =document.querySelector(".slidder")
var slidder1 =document.querySelector(".slidder-1")
var slidder2 =document.querySelector(".slidder-2")
var slidder3 =document.querySelector(".slidder-3")

slidder1.addEventListener("click",()=>{


    slidder1.classList.add("black")
    slidder2.classList.remove("black")
    slidder3.classList.remove("black")

    reviewer.style.transform="translateX(0px)"
})

slidder2.addEventListener("click",()=>{
    slidder2.classList.add("black")
    slidder1.classList.remove("black")
    slidder3.classList.remove("black")
    reviewer.style.transform="translateX(-500px)"
})

slidder3.addEventListener("click",()=>{
    slidder3.classList.add("black")
    slidder2.classList.remove("black")
    slidder1.classList.remove("black")

    reviewer.style.transform="translateX(-900px)"
})


var review1= document.getElementById("review1")
var review2= document.getElementById("review2")
var review3= document.getElementById("review3")

review1.addEventListener("click",()=>{
    slidder1.classList.add("black")
    slidder2.classList.remove("black")
    slidder3.classList.remove("black")
reviewer.style.transform="translateX(0px)"
})

review2.addEventListener("click",()=>{
    slidder2.classList.add("black")
    slidder1.classList.remove("black")
    slidder3.classList.remove("black")
    reviewer.style.transform="translateX(-500px)"
    })


    review3.addEventListener("click",()=>{
        slidder3.classList.add("black")
    slidder2.classList.remove("black")
    slidder1.classList.remove("black")
        reviewer.style.transform="translateX(-900px)"
        })


// slidder1.addEventListener("click",()=>{
//     reviewercontent.style.transform="translateX(0px)"
    
// })







// scroll-effect

    
// let observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
// entry.target.classList.add("show")
//         }
//         else{
//             entry.target.classList.remove("show")
//             }
//     })
// })

 
// let hiddenElements = document.querySelectorAll(".scroll")
// hiddenElements.forEach((el)=> observer.observe(el))



// tour-section-functionalies

let body = document.getElementById("body")
let tour1 = document.querySelector(".tour-1")
let tour2 = document.querySelector(".tour-2")
let tour3 = document.querySelector(".tour-3")
let tour4 = document.querySelector(".tour-4")
let play = document.querySelector(".play")

// tour1.addEventListener("mouseover", () => {
//     tour2.style.display = "none";
//     tour3.style.display = "none";
//     tour4.style.display = "none";
// });

// tour1.addEventListener("mouseout", () => {
//     tour2.style.display = "block";
//     tour3.style.display = "block";
//     tour4.style.display = "block";
// });


tour2.addEventListener("mouseover", () => {
    tour1.style.display = "none";
    tour3.style.display = "none";
    tour4.style.display = "none";
    play.style.display = "none";
});

tour2.addEventListener("mouseout", () => {
    tour1.style.display = "block";
    tour3.style.display = "block";
    tour4.style.display = "block";
    play.style.display = "block";
 
    // tour1.style.transtion = "1s";
    // tour3.style.transtion = "1s";
    // tour4.style.transtion = "1s";
    // play.style.transtion = "1s";
});

tour3.addEventListener("mouseover", () => {
    tour1.style.display = "none";
    tour2.style.display = "none";
    tour4.style.display = "none";
    play.style.display = "none";
});

tour3.addEventListener("mouseout", () => {
    tour1.style.display = "block";
    tour2.style.display = "block";
    tour4.style.display = "block";
    play.style.display = "block";
});


tour4.addEventListener("mouseover", () => {
    tour1.style.display = "none";
    tour2.style.display = "none";
    tour3.style.display = "none";
    play.style.display = "none";
});


tour4.addEventListener("mouseout", () => {
    tour1.style.display = "block";
    tour2.style.display = "block";
    tour3.style.display = "block";
    play.style.display = "block";
});

// --------------------form-select-option------------------------------


    const customSelect = document.querySelector(".custom-select");
    const selected = customSelect.querySelector(".selected");
    const optionsContainer = customSelect.querySelector(".options-container");
    const optionsList = optionsContainer.querySelectorAll(".option");
    // const nativeSelect = document.querySelector(".native-select");

    customSelect.addEventListener("click", () => {
        customSelect.classList.toggle("open");
    });

    optionsList.forEach(option => {
        option.addEventListener("click", () => {
            selected.textContent = option.textContent;
            // nativeSelect.value = option.getAttribute("data-value"); 
            optionsContainer.classList.remove("open");
        });
     
    });
    
    document.addEventListener("click", (event) => {
        if (!customSelect.contains(event.target)) {
            customSelect.classList.remove("open");
        }
    });


//text-area.

const textarea = document.getElementById('textarea');
    const counter = document.getElementById('counter');
    const maxLength = textarea.getAttribute('maxlength');


    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        counter.textContent = `${currentLength}/500`;
    });


// -------------------------article-section-js-------------------------


const articles = [
    {
        title: "The things we need to check when we want to buy a house",
        author: "Dianne Russell",
        authorImage: "images/article/a-1.jpeg",
        articleImage: "images/article/article-1.jpeg",
        readTime: "4 min read | 25 Apr 2021"
    },
    {
        title: "7 Ways to distinguish the quality of the house we want to buy",
        author: "Courtney Henry",
        authorImage: "images/article/a-2.jpeg",
        articleImage: "images/article/article-2.jpeg",
        readTime: "6 min read | 24 Apr 2021"
    },
    {
        title: "The best way to know the quality of the house we want to buy",
        author: "Darlene Robertson",
        authorImage: "images/article/a-3.jpeg",
        articleImage: "images/article/article-3.jpeg",
        readTime: "2 min read | 24 Apr 2021"
    },
    {
        title: "The things we need to check when we want to buy a house",
        author: "Dianne Russell",
        authorImage: "images/article/a-1.jpeg",
        articleImage: "images/House/house-1.jpeg",
        readTime: "4 min read | 25 Apr 2021"
    },
    {
        title: "7 Ways to distinguish the quality of the house we want to buy",
        author: "Courtney Henry",
        authorImage: "images/article/a-2.jpeg",
        articleImage: "images/House/house-2.jpeg",
        readTime: "6 min read | 24 Apr 2021"
    },
    {
        title: "The best way to know the quality of the house we want to buy",
        author: "Darlene Robertson",
        authorImage: "images/article/a-3.jpeg",
        articleImage: "images/House/house-3.jpeg",
        readTime: "2 min read | 24 Apr 2021"
    }
];



document.querySelectorAll('.article__detail').forEach((article, index) => {
    article.addEventListener('click', () => updateBigArticle(index));
});


function updateBigArticle(id) {
    const articleData = articles[id];

   
    document.querySelector('.article-detail__bigsize h2').textContent = articleData.title;
    document.querySelector('.article__bigsize--info p').textContent = articleData.author;
    document.querySelector('.article-owner-img').src = articleData.authorImage;
    document.querySelector('.article-detail__bigsize-img').src = articleData.articleImage;
    document.querySelector('.article-detail__bigsize .article__date p').textContent = articleData.readTime;
}


    var moreArticlesBtn = document.querySelector('.btn-articles');
    var moreArticlesDiv = document.querySelector('.click-more-article');
    // var closeBtn = document.querySelector('.close');

    moreArticlesDiv.style.display = 'none';


    moreArticlesBtn.addEventListener('click', ()=> {

        if (moreArticlesDiv.style.display === 'none') {
            moreArticlesDiv.style.display = 'block';
            moreArticlesBtn.textContent = 'Hide articles'; 
        } 
        else {
            moreArticlesDiv.style.display = 'none';
            moreArticlesBtn.textContent = 'More articles'; 
        }
  
    });
   
    // closeBtn.addEventListener('click',()=> {    
    //     moreArticlesDiv.style.display = 'none';
    //     moreArticlesBtn.textContent = 'More articles'; 
    // });



// ------------------article--section---------------------------------