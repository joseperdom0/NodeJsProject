$("#btnAddQuestion").on('click', function(event) {
    event.preventDefault();
    event.stopPropagation
    $(".form-group").append('<div><input type="text" name="mytext[]"/>')
}