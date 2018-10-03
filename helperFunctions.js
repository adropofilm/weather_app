// Formats response to look presentable on webpage
const renderResponse = (res) => {
    if(!res){
        console.log(res.status)
    }
    if(!res.length){
        responseField.innerHTML = "<p>Try again!</p><p>There was nothing found!</p>"
        return
    }

    const responseField = document.getElementById("demo");
    responseField.innerHTML = res;

    // manipulates responseField to render the modified response

}