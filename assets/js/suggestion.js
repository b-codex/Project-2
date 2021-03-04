// // getting all requires elements

const searchWrapper = document.querySelector(".search-input");
const suggestBox = searchWrapper.querySelector(".autocombox");
// const searchIcon = searchWrapper.querySelector(".icon");

// const list = document.querySelector('.list')
const searchInput = document.getElementById('search');


searchInput.addEventListener('input', searchLocation );
function searchLocation(){
    // grab the value of what os searched
    // console.log(event.target.value);
    let userData = searchInput.value// user entered data
    let emptyArray = [];
    if(userData){

        emptyArray = suggestion.filter((data)=>{
            /**filtering Array value ans user cgar to lowercase and 
             * return those word which starts with user entered
             */
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data + '</li>'
        })
        console.log(emptyArray);
        searchWrapper.classList.add("active"); // show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggestBox.querySelectorAll("li");

        for (let i = 0; i < allList.length; i++) {
            // adding onclick attribute in all li tag
            allList[i].setAttribute("onClick", "select(this)")
            // console.log(allList[i]);
        }

    }else{
        searchWrapper.classList.remove("active");// hide autocomplete box
    }
    // showSuggestions(emptyArray)
}
function select(element){
    let selectUserData = element.textContent;
    searchInput.value = selectUserData; // passing the user selected list item data in text field
    searchWrapper.classList.remove("active");// hide autocomplete box
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        // display the what the user wrote in the list
        userData = searchInput.value
        listData = '<li>'+ userData + '</li>'
    }else{
        listData = list.join('');
    }
    suggestBox.innerHTML = listData;
}



let suggestion = [
    "Abiy Addi",
    "Abomsa",
    "Adama",
    "Adaba",
    "Addis Ababa",
    "Addis Zemen",
    "Adet",
    "Adwa",
    "Agaro",
    "Akaki",
    "Alaba (Kulito, Quliito)",
    "AlETA WONDO",
    "Amaro",
    "Arba Minch",
    "Gojjam",
    "Amba Mariam",
    "Ambo",
    "Angacha",
    "Ankober",
    "Arba Minch",
    "Arboye",
    "Asaita",
    "Asella",
    "Assosa",
    "Awasa",
    "Awash",
    "Axum",
    "Azezo",
    "Alamata",
    "Alem Ketema",
    "Aykel",

    "Babille",
    "Baco",
    "Badme",
    "Bahir Dar",
    "Bati",
    "Beica",
    "Bekoji",
    "Bichena",
    "Bishoftu(Debre Zeit)",
    "Bonga",
    "Burie Damot",
    "Butajira",

    "Chiro",
    "Chimdesa",
    "Chelenko",
    "Chencha",
    "Chuahit",


    "Dessie",
    "Dabat",
    "Dangila",
    "Debarq",
    "Debre Berhan",
    "Debre Marqos",
    "Debre Tabor",
    "Debre Werq",
    "Debre Zebit",
    "Dejen",
    "Delgi",
    "Dembidolo",
    "Deneba",
    "Dessie (Dese)",
    "Dila",
    "DilYibza (Beyeda)",
    "Dimtu (Wolaita)",
    "Dire Dawa",
    "Dagax buur",
    "Dirree Incinnii",
    "Dodola",
    "Dolo Odo",
    "Durame",
    "Dalocha",
    "Dukem",
    "Danan",

    "Ejaji",
    "Elidar",
    "Enewari",
    "Estie",
    "Andabet",

    "Finicha",
    "Fiche", ,
    "Finote Selam",
    "Freweyni",


    "Gondar",
    "Gambela",
    "Gelemso",
    "Ghimbi",
    "Ginir",
    "Goba",
    "Gobiyere",
    "Gode",
    "Gololcha",
    "Gondar",
    "Gongoma",
    "Gore",
    "Gorgora",


    "Harar",
    "Harar (or Harer)",
    "Hafatissa",
    "Harorisa",
    "Hawassa",
    "Hayq",
    "Holeta",
    "Hosaena",
    "Humera",
    "Huruta",
    "Hadero",

    "Imi",

    "Jijiga",
    "Jimma",
    "Jinka",
    "Jaraged",

    "Kabri Dar",
    "Kebri Mangest",
    "Kobo",
    "Kombolcha",
    "Konso",
    "Kulubi",
    "Kurmuk",

    "Lalibela",
    "Limmu Genet",
    "Lante (Ocholo)",
    "Lante (Ommo)",


    "Maji",
    "Maqora",
    "Maychew",
    "Mersa",
    "Mendi",
    "Metemma",
    "Metu",
    "Mizan Teferi",
    "Mojo",
    "Mota",
    "Moyale",

    "Negash",
    "Negele Boran",
    "Nejo",
    "Nekemte",

    "Robe, Bale",

    "Sawla (Gofa Sawla)",
    "Seka",
    " Shashamane",
    "Shaamboo",
    "Sheraro",
    "Shire (or Inda Selassie)",
    "Shilavo",
    "Sodo (Wolaita Sodo)",
    "Sodore",
    "Sekota",

    " Tefki",
    "Tenta",
    "Tippi",
    "Tiya",
    "Tullu Milki",
    "Turmi",
    "Togo-Wochale",
    "Tulu bolo",

    'Wacca',
    "Waliso",
    "Walwal",
    "Werder",
    "Wereta",
    'Woldia',
    "Wolaita Sodo (Sodo)",
    "Wolleka",
    'Worabe',
    " Wuchale",
    "Wukro",
    " washera",

    " Yabelo",
    "Yeha",
    'Yirga Alem',

    "Ziway",



]