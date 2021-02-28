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