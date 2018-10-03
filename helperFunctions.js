// Formats response to look presentable on webpage
const renderResponse = (res) => {
    if(!res){
        console.log(res.status)
    }
    if(!res.length){
        responseField.innerHTML = "<p>Try again!</p><p>There was nothing found!</p>"
        return
    }

    // manipulates responseField to render the modified response
    //responseField.innerHTML = `<p>You might be interested in:</p><ol>${res.}</ol>`
    //return
}