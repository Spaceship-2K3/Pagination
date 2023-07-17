// Dynamic Pagination Buttons

/**
 * ? 1. array_length - used to hold the size of the array of objects

 * ? 2. table_size - used to display the number of table rows

 * ? 3. start_index - used to display start value of the record at footer

 * ? 4. end_index - used to display end value of the record at footer

 * ? 5. current_index - used to hold the current pagination index 
 * ?       - Which change when click on Pagination Buttons

 * ? 6. max_index - used to display index Button at footer
 */
let array_length = 0;
// ! value are displaying from the of objects dynamically
let table_size = 10;
let start_index = 1;
let end_index = 0;
let current_index = 1;
let max_index = 0;
let array = [];
let styles = document.documentElement.style;

// todo : create local variable to hold sorting column name and sorting order
let sortCol = "rank";
let ascOrder = true;

// todo : + create array of objects to display in table dynamically
// todo : + based on pagination index
function preLoadCalculations() {
    // todo : filter the array of object before calculating array length & max_index
    filterRanksList();
    // todo : sort the array of object after filter method is called
    sortRankList();
    array_length = array.length;
    max_index = array_length / table_size;

    /** 
    *todo : + if array size is 58 and number of records displays in the table 
    *todo :   is 10 then there will be 6 index buttons along with Prev and Next 
    *todo : + To find the number of index buttons, devide 58 by 10 , you will get
    *todo :   get 5 as Quotient. If there is a reminder which is > 0 , just increase 5 to 6
    : */
    if (array_length % table_size > 0) {
        max_index++;
    }
}

function filterRanksList() {
    let tab_filter_text = document.getElementById("tab_filter_text").value;
    if (tab_filter_text != "") {
        // todo : if text field is empty, assign rank list directly to the array
        // todo : else filter the ranks list then assign it to array
        let temp_array = rankList.filter(function (object) {
            return (
                object.rank.toString().includes(tab_filter_text) ||
                object.name
                    .toUpperCase()
                    .includes(tab_filter_text.toUpperCase()) ||
                object.year.toString().includes(tab_filter_text) ||
                object.score.toString().includes(tab_filter_text) ||
                object.percentage.toString().includes(tab_filter_text)
            );
        });
        array = temp_array;
    } else {
        array = rankList;
    }
}

// todo :  Create a function append pagination buttons dynamically from JS
function displayIndexButtons() {
    // todo : create a function to assign the values for max_index , array_length,
    // todo : and other variables before displaying Pagination buttons
    preLoadCalculations();
    var indexButtonsContainer = document.querySelector(".index_buttons");
    indexButtonsContainer.innerHTML = "";
    indexButtonsContainer.innerHTML +=
        '<button onclick="prev()" type="button">Prev</button>';
    for (var i = 1; i <= max_index; i++) {
        indexButtonsContainer.innerHTML += `<button onclick="indexPagination(${i})" index="${i}" type="button">${i}</button>`;
    }
    highlightIndexButton();
    indexButtonsContainer.innerHTML +=
        '<button onclick="next()" type="button">Next</button>';
}

// todo : create a function to Highlight pagination index button
function highlightIndexButton() {
    start_index = (current_index - 1) * table_size + 1;
    end_index = start_index + table_size - 1;
    if (end_index > array_length) {
        end_index = array_length;
    }

    var footerSpan = document.querySelector(".footer span");
    footerSpan.textContent = `Showing ${start_index} to ${end_index} of ${array_length} entries`;

    // Select the button based on the attribute  called "index"
    var indexButtons = document.querySelectorAll(".index_buttons button");
    indexButtons.forEach(function (button) {
        button.classList.remove("active");
    });
    var activeButton = document.querySelector(
        `.index_buttons button[index='${current_index}']`
    );
    if (current_index < max_index) {
        activeButton.classList.add("active");
    }

    displayTableRows();
}

function sortRankList() {
    array.sort(function (a, b) {
        if (ascOrder) {
            return a[sortCol] > b[sortCol] ? 1 : -1;
        } else {
            return b[sortCol] > a[sortCol] ? 1 : -1;
        }
    });

    // todo : table sort Indication
    var tableHeaders = document.querySelectorAll(".table th");
    tableHeaders.forEach(function (header) {
        header.classList.remove("sort_indication");
    });

    // todo : append class "sort_indication" to the sorted table head column
    var sortedColumn = document.querySelector(
        `.table th[colName='${sortCol}']`
    );
    sortedColumn.classList.add("sort_indication");

    // todo : change the color for both arrows based on the sorting order
    var styles = document.documentElement.style;
    if (ascOrder) {
        styles.setProperty("--up_arrow_color", "#fff");
        styles.setProperty("--up_arrow_shadow", "0px 0px 10px #fff");
        styles.setProperty("--down_arrow_color", "#a3a3a3");
        styles.setProperty("--down_arrow_shadow", "0px 0px 0px #000000");
    } else {
        styles.setProperty("--up_arrow_color", "#a3a3a3");
        styles.setProperty("--up_arrow_shadow", "0px 0px 0px #000000");
        styles.setProperty("--down_arrow_color", "#fff");
        styles.setProperty("--down_arrow_shadow", "0px 0px 10px #fff");
    }
}

// todo : Remove all rows inside the table body and append the row dynamically
function displayTableRows() {
    var tableBody = document.querySelector(".table table tbody");
    tableBody.innerHTML = "";
    // todo : calculate the start and end index to display the rows based on pagination index selected
    var tab_start = start_index - 1;
    var tab_end = end_index;

    for (var i = tab_start; i < tab_end; i++) {
        // todo : create table row using tr and td tags, add required data from the object
        // todo : and append to the table body
        var student = array[i];
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${student.rank}</td>
            <td>${student.name}</td>
            <td>${student.year}</td>
            <td>${student.score}</td>
            <td>${student.percentage}</td>
        `;
        tableBody.appendChild(tr);
    }
}

displayIndexButtons();

// todo : pagination by Next
function next() {
    if (current_index > max_index - 1) {
        return;
    } else {
        current_index++;
        highlightIndexButton();
    }
}

// todo : pagination by prev
function prev() {
    if (current_index > 1) {
        current_index--;
        highlightIndexButton();
    }
}

// todo : indexPagination
function indexPagination(index) {
    current_index = parseInt(index);
    highlightIndexButton();
}

// todo : pagination Header
var tableSizeSelect = document.getElementById("table_size");
tableSizeSelect.addEventListener("change", function () {
    table_size = parseInt(this.value);
    current_index = 1;
    start_index = 1;

    // todo : when table size get changed, calculate the max index and display index buttons
    displayIndexButtons();
});

// todo : create a function to filter the array
var tabFilterBtn = document.getElementById("tab_filter_btn");
tabFilterBtn.addEventListener("click", function () {
    // todo : set current_index and start_index value as 1. Because after filter:
    // todo : the array table has to display first 10 records

    // todo : when filter method calls, system display the Index Buttons
    // todo : based on the final array length
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
});

// todo :
var tableHeaders = document.querySelectorAll(".table th");
tableHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
        // todo : get the colName attribute when click on the Table header column
        // todo : and assign to colName variable set current_index and start_index
        // todo : to 1 and call method displayIndexButton()
        var colName = this.getAttribute("colName");
        // todo : change the order from Ascending to Descending if click on same column
        ascOrder = sortCol == colName ? !ascOrder : true;
        sortCol = colName;
        current_index = 1;
        start_index = 1;
        displayIndexButtons();
    });
});
