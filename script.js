document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let query = document.getElementById("search-input").value;
    // Xử lý từ khóa tìm kiếm ở đây
    console.log("Đã tìm kiếm: " + query);
});
