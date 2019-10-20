var yearGlobalValue = 2019;
var maxIce = 4320000;

var data = [{
        year: "2019",
        data: [{
            ice: 127.6,
            sea: 3.17,
            temperature: 0,
            imgUrl: "./assets/img/0.png"
        }]
    },
    {
        year: "2069",
        data: [{
            ice: 129,
            sea: 3.38,
            temperature: 0,
            imgUrl: "./assets/img/1.png"
        }]
    },
    {
        year: "2119",
        data: [{
            ice: 133.2,
            sea: 3.46,
            temperature: 0,
            imgUrl: "./assets/img/2.png"
        }]
    },
    {
        year: "2169",
        data: [{
            ice: 136.4,
            sea: 3.54,
            temperature: 0,
            imgUrl: "./assets/img/4.png"
        }]
    },
    {
        year: "2219",
        data: [{
            ice: 139,
            sea: 3.6,
            temperature: 0,
            imgUrl: "./assets/img/8.png"
        }]
    }
];

(e => {
    let res = dataArray(this.data, e);
    changeImg(res.imgUrl);
    let despues = document.getElementById("despues");
    despues.innerHTML = yearGlobalValue;

    let nHielo2019 = document.getElementById("nHielo2019");
    let nMar2019 = document.getElementById("nMar2019");

    nHielo2019.innerHTML = res.ice + " gt";
    nMar2019.innerHTML = res.sea + " mts";
})("2019");

function searchData(e) {
    e.preventDefault();
    let years = document.getElementById("years");
    let yearsValue = years.options[years.selectedIndex].value;
    yearGlobalValue = yearsValue;
    let response = this.dataArray(this.data, this.yearGlobalValue);
    this.changeImg(response.imgUrl);

    let future = document.getElementById("future");

    if (yearGlobalValue != 2019) future.classList.remove("d-none");
    else future.classList.add("d-none");

    let despues = document.getElementById("despues");
    despues.innerHTML = yearGlobalValue;

    let nHielo = document.getElementById("nHielo");
    let nMar = document.getElementById("nMar");

    nHielo.innerHTML = response.ice + " gt";
    nMar.innerHTML = response.sea + " mts";
}

function dataArray(obj, year) {
    for (const i of obj) {
        if (i.year == year) {
            return i.data[0];
        }
    }
}

function changeImg(url) {
    let map = document.getElementById("map");
    map.style.backgroundImage = "url('".concat(url).concat("')");
}