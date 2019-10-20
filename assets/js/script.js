var yearGlobalValue = 2019;
var maxIce = 4320000;

var data = [{
        year: "1993",
        data: [{
            ice: 1,
            sea: 0,
            temperature: 0,
            imgUrl: "./assets/img/1993.png"
        }]
    },
    {
        year: "2019",
        data: [{
            ice: 2,
            sea: 2019,
            temperature: 0,
            imgUrl: "./assets/img/0.png"
        }]
    },
    {
        year: "2319",
        data: [{
            ice: 3,
            sea: 2119,
            temperature: 0,
            imgUrl: "./assets/img/1.png"
        }]
    },
    {
        year: "2619",
        data: [{
            ice: 4,
            sea: 2219,
            temperature: 0,
            imgUrl: "./assets/img/2.png"
        }]
    },
    {
        year: "2919",
        data: [{
            ice: 5,
            sea: 2319,
            temperature: 0,
            imgUrl: "./assets/img/4.png"
        }]
    },
    {
        year: "3219",
        data: [{
            ice: 6,
            sea: 2419,
            temperature: 0,
            imgUrl: "./assets/img/8.png"
        }]
    },
    {
        year: "3519",
        data: [{
            ice: 7,
            sea: 2519,
            temperature: 0,
            imgUrl: "./assets/img/16.png"
        }]
    }
];

(e => {
    let res = dataArray(this.data, e);
    changeImg(res.imgUrl);
    let despues = document.getElementById("despues");
    despues.innerHTML = yearGlobalValue;
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