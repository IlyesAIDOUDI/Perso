fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    txt = console.log(data);
    document.getElementById("SpanID").textContent = "New Text";
})