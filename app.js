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

let rankList = [
    {
        rank: 1,
        name: "Rocky",
        year: 1999,
        score: 525,
        percentage: 100,
    },
    {
        rank: 2,
        name: "John",
        year: 1992,
        score: 500,
        percentage: 91,
    },
    {
        rank: 3,
        name: "Sang",
        year: 2003,
        score: 600,
        percentage: 99,
    },
    {
        rank: 4,
        name: "Andrew",
        year: 1995,
        score: 400,
        percentage: 89,
    },
    {
        rank: 5,
        name: "Jack",
        year: 1996,
        score: 500,
        percentage: 90,
    },
    {
        rank: 6,
        name: "Anna",
        year: 2002,
        score: 325,
        percentage: 95,
    },
    {
        rank: 7,
        name: "Oliver",
        year: 1997,
        score: 220,
        percentage: 89,
    },
    {
        rank: 8,
        name: "Harry",
        year: 1996,
        score: 680,
        percentage: 88,
    },
    {
        rank: 9,
        name: "Jacob",
        year: 1992,
        score: 480,
        percentage: 86,
    },
    {
        rank: 10,
        name: "Charlie",
        year: 2001,
        score: 560,
        percentage: 93,
    },
    {
        rank: 11,
        name: "Thomas",
        year: 1995,
        score: 345,
        percentage: 96,
    },
    {
        rank: 12,
        name: "George",
        year: 1994,
        score: 569,
        percentage: 89,
    },
    {
        rank: 13,
        name: "Oscar",
        year: 1991,
        score: 499,
        percentage: 85,
    },
    {
        rank: 14,
        name: "James",
        year: 1987,
        score: 521,
        percentage: 82,
    },
    {
        rank: 15,
        name: "William",
        year: 1992,
        score: 528,
        percentage: 95,
    },
    {
        rank: 16,
        name: "Daniel",
        year: 1998,
        score: 450,
        percentage: 88,
    },
    {
        rank: 17,
        name: "Emily",
        year: 2000,
        score: 610,
        percentage: 96,
    },
    {
        rank: 18,
        name: "Sophia",
        year: 1993,
        score: 520,
        percentage: 92,
    },
    {
        rank: 19,
        name: "Emma",
        year: 1999,
        score: 480,
        percentage: 89,
    },
    {
        rank: 20,
        name: "Michael",
        year: 1997,
        score: 390,
        percentage: 87,
    },
    {
        rank: 21,
        name: "Liam",
        year: 2004,
        score: 550,
        percentage: 94,
    },
    {
        rank: 22,
        name: "Benjamin",
        year: 1994,
        score: 410,
        percentage: 85,
    },
    {
        rank: 23,
        name: "Ethan",
        year: 1996,
        score: 480,
        percentage: 91,
    },
    {
        rank: 24,
        name: "Alexander",
        year: 1992,
        score: 550,
        percentage: 90,
    },
    {
        rank: 25,
        name: "Sebastian",
        year: 2001,
        score: 320,
        percentage: 94,
    },
    {
        rank: 26,
        name: "David",
        year: 1995,
        score: 240,
        percentage: 88,
    },
    {
        rank: 27,
        name: "Mia",
        year: 1998,
        score: 670,
        percentage: 95,
    },
    {
        rank: 28,
        name: "Ava",
        year: 1997,
        score: 470,
        percentage: 91,
    },
    {
        rank: 29,
        name: "Elijah",
        year: 2002,
        score: 580,
        percentage: 99,
    },
    {
        rank: 30,
        name: "Lucas",
        year: 1993,
        score: 380,
        percentage: 87,
    },
    {
        rank: 31,
        name: "Matthew",
        year: 1991,
        score: 520,
        percentage: 84,
    },
    {
        rank: 32,
        name: "Harper",
        year: 1994,
        score: 490,
        percentage: 92,
    },
    {
        rank: 33,
        name: "Daniel",
        year: 1996,
        score: 310,
        percentage: 86,
    },
    {
        rank: 34,
        name: "Charlotte",
        year: 1999,
        score: 590,
        percentage: 94,
    },
    {
        rank: 35,
        name: "Evelyn",
        year: 2000,
        score: 400,
        percentage: 89,
    },
    {
        rank: 36,
        name: "Lucy",
        year: 1995,
        score: 250,
        percentage: 88,
    },
    {
        rank: 37,
        name: "William",
        year: 1992,
        score: 460,
        percentage: 82,
    },
    {
        rank: 38,
        name: "Alexander",
        year: 1998,
        score: 640,
        percentage: 98,
    },
    {
        rank: 39,
        name: "Olivia",
        year: 1997,
        score: 550,
        percentage: 91,
    },
    {
        rank: 40,
        name: "Sophia",
        year: 2004,
        score: 380,
        percentage: 85,
    },
    {
        rank: 41,
        name: "James",
        year: 1996,
        score: 450,
        percentage: 93,
    },
    {
        rank: 42,
        name: "Benjamin",
        year: 1992,
        score: 390,
        percentage: 82,
    },
    {
        rank: 43,
        name: "Ethan",
        year: 1995,
        score: 530,
        percentage: 88,
    },
    {
        rank: 44,
        name: "Abigail",
        year: 1998,
        score: 380,
        percentage: 95,
    },
    {
        rank: 45,
        name: "Charlotte",
        year: 1997,
        score: 510,
        percentage: 91,
    },
    {
        rank: 46,
        name: "Michael",
        year: 2002,
        score: 360,
        percentage: 84,
    },
    {
        rank: 47,
        name: "Mia",
        year: 1994,
        score: 470,
        percentage: 92,
    },
    {
        rank: 48,
        name: "David",
        year: 1996,
        score: 330,
        percentage: 86,
    },
    {
        rank: 49,
        name: "Liam",
        year: 1999,
        score: 610,
        percentage: 94,
    },
    {
        rank: 50,
        name: "Sophia",
        year: 2000,
        score: 400,
        percentage: 89,
    },
    {
        rank: 51,
        name: "Lucas",
        year: 1995,
        score: 260,
        percentage: 87,
    },
    {
        rank: 52,
        name: "Daniel",
        year: 1992,
        score: 480,
        percentage: 82,
    },
    {
        rank: 53,
        name: "Olivia",
        year: 1998,
        score: 660,
        percentage: 98,
    },
    {
        rank: 54,
        name: "Emily",
        year: 1997,
        score: 540,
        percentage: 91,
    },
    {
        rank: 55,
        name: "Jacob",
        year: 2004,
        score: 370,
        percentage: 85,
    },
    {
        rank: 56,
        name: "Elijah",
        year: 1996,
        score: 430,
        percentage: 93,
    },
    {
        rank: 57,
        name: "Isabella",
        year: 1992,
        score: 400,
        percentage: 82,
    },
    {
        rank: 58,
        name: "Ava",
        year: 1995,
        score: 520,
        percentage: 88,
    },
];

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
    let tab_filter_text = $("#tab_filter_text").val();
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
    $(".index_buttons button").remove();
    $(".index_buttons").append(
        '<button onclick="prev()" type="button">Prev</button>'
    );
    for (var i = 1; i <= max_index; i++) {
        $(".index_buttons").append(
            `<button onclick="indexPagination(${i})" index="${i}" type="button">${i}</button>`
        );
    }
    highlightIndexButton();
    $(".index_buttons").append(
        '<button onclick="next()" type="button">Next</button>'
    );
}

// todo : create a function to Highlight pagination index button
function highlightIndexButton() {
    start_index = (current_index - 1) * table_size + 1;
    end_index = start_index + table_size - 1;
    if (end_index > array_length) {
        end_index = array_length;
    }

    $(".footer span").text(
        `Showing ${start_index} to ${end_index} of ${array_length} entries`
    );

    // Select the button based on the attribute  called "index"
    $(".index_buttons button").removeClass("active");
    $(`.index_buttons button[index = '${current_index}']`).addClass("active");

    displayTableRows();
}

function sortRankList() {
    array.sort((a, b) => {
        if (ascOrder) {
            return a[sortCol] > b[sortCol] ? 1 : -1;
        } else {
            return b[sortCol] > a[sortCol] ? 1 : -1;
        }
    });

    // todo : table sort Indication
    $(".table th").removeClass("sort_indication");

    // todo : append class "sort_indication" to the sorted table head column
    $(`.table th[colName = ${sortCol}]`).addClass("sort_indication");

    // todo : change the color for both arrows based on the sorting order
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
    $(".table table tbody tr ").remove();
    // todo : calculate the start and end index to display the rows based on pagination index selected
    let tab_start = start_index - 1;
    let tab_end = end_index;

    for (var i = tab_start; i < tab_end; i++) {
        // todo : create table row using tr and td tags, add required data from the object
        // todo : and append to the table body
        let student = array[i];
        let tr = `
        <tr>
            <td>${student.rank}</td>
            <td>${student.name}</td>
            <td>${student.year}</td>
            <td>${student.score}</td>
            <td>${student.percentage}</td>
        </tr>
        `;
        $(".table table tbody").append(tr);
    }
}

displayIndexButtons();

// todo : pagination by Next
function next() {
    if (current_index < max_index) {
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
$("#table_size").change(function () {
    table_size = parseInt($(this).val());
    current_index = 1;
    start_index = 1;

    // todo : when table size get changed, calculate the max index and display index buttons
    displayIndexButtons();
});

// todo : create a function to filter the array
$("#tab_filter_btn").click(function () {
    // todo : set current_index and start_index value as 1. Because after filter:
    // todo : the array table has to display first 10 records

    // todo : when filter method calls, system display the Index Buttons
    // todo : based on the final array length
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
});

// todo :
$(".table th").click(function () {
    // todo : get the colName attribute when click on the Table header column
    // todo : and assign to colName variable set current_index and start_index
    // todo : to 1 and call method displayIndexButton()
    let colName = $(this).attr("colName");
    // todo : change the order from Ascending to Descending if click on same column
    ascOrder = sortCol == colName ? !ascOrder : true;
    sortCol = colName;
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
});
