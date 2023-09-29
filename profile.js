let favColor = document.querySelector('#color')

favColor.addEventListener('click', () => {
    alert("My favourite color is blue")
})

// #place
let favPlace = document.querySelector('#place')

favPlace.addEventListener('click', () => {
    alert("My Bedroom")
})
//#ritual

let favRitual = document.querySelector('#ritual')

favRitual.addEventListener('click', () => {
    alert("I like to listen to music before taking on tasks")
})


function checkSubmit(event) {
    const resturants = ["Popeyes", "McDonalds", "Panera Bread", "Chick-fil-a"];
    const random = Math.floor(Math.random() * resturants);

    console.log(random, resturants[random])

    alert('Here is a resturant suggestion', resturants[random]);
}

let resSuggestor = document.querySelector('#resturant')

resSuggestor.addEventListener('click', checkSubmit)