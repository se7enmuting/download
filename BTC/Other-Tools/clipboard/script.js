// <!-- Version: v0.0.1 | GitHub: @Se7enMuting -->
document.getElementById('pasteArea').addEventListener('paste', function(e) {
    e.preventDefault();
    var items = (e.clipboardData || e.originalEvent.clipboardData).items;
    console.log(JSON.stringify(items));
    for (index in items) {
        var item = items[index];
        if (item.kind === 'file') {
            var blob = item.getAsFile();
            var reader = new FileReader();
            reader.onload = function(event){
                document.getElementById('pastedImage').src = event.target.result;
            }; 
            reader.readAsDataURL(blob);
        }
    }
});
