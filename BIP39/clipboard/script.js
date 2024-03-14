document.getElementById('pasteArea').addEventListener('paste', function(e) {
    // 阻止默认行为
    e.preventDefault();
    // 获取粘贴板数据
    var items = (e.clipboardData || e.originalEvent.clipboardData).items;
    console.log(JSON.stringify(items)); // 可选：控制台打印所有粘贴板数据
    for (index in items) {
        var item = items[index];
        if (item.kind === 'file') {
            var blob = item.getAsFile();
            var reader = new FileReader();
            reader.onload = function(event){
                // 显示图片
                document.getElementById('pastedImage').src = event.target.result;
            }; 
            reader.readAsDataURL(blob);
        }
    }
});
