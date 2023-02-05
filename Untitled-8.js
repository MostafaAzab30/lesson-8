


function entry() {



    var bookname = document.getElementById("bookname").value
    var bookurl = document.getElementById("bookurl").value

    if (!bookname || !bookurl) {

        alert(`من فضلك املا البيانات عشان مش هيشتغل . اسمع مني والله`)
        return false

    }


    var bookmark = {

        name: bookname,
        url: bookurl

    }

    // localStorage.setItem('test' , 'Hello World')
    // localStorage.getItem('test')
    // localStorage.removeItem('test')

    if (localStorage.getItem('bookmarks') == null) {
        var bookmarks = []

        bookmarks.push(bookmark)
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))

    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        bookmarks.push(bookmark)
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))


    }
    fetchbookmarks()
}

function deletebookmark(url) {


    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {

            bookmarks.splice(i, 1)


        }



    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))

    fetchbookmarks()
}


function fetchbookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

    var bookmarksresults = document.getElementById("bookmarksresults")

    bookmarksresults.innerHTML = ``
    for (var i = 0; i < bookmarks.length; i++) {

        var name = bookmarks[i].name
        var url = bookmarks[i].url

        bookmarksresults.innerHTML += `<div  class="w-75  mx-auto my-4 px-4 py-4 rounded whynot ">
<div class="row w-75 ">

<h4 class="fw-bold text-black col-6">`+ name + `</h4>

<div class="col-6">
<button class="btn btn-dark"><a href="`+ url + `" class="cqwc text-reset" target="_blank">Visit</a></button>
<button onclick="deletebookmark(\``+ url + `\`)" class="btn btn-primary"><a href="#" class="cqwc text-reset" >Delete</a></button>
</div>

</div></div>`



    }

}






































