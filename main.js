dowiki = () => {
    let value = $('#Entrada').val();
    let baseUrl = {"pt": 'https://pt.wikipedia.org/w/', "en" : 'https://pt.wikipedia.org/w/'};

    let URL = `${baseUrl["pt"]}api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&origin=*&titles=${value}&rvprop=content&callback=?`;
    
    $.getJSON(URL, function (data) {
        let obj = data.query.pages;
        let ob = Object.keys(obj)[0];
        try {
            $("#Texto").html(obj[ob]["extract"]);
        }
        catch (err) {
            $("#Texto").html(err.message);
        }
    });
}
