window.onload = function() {
    const location = window.location.href;
    const url = new URL(location);
    const search_params = new URLSearchParams(url.search);

    if(!search_params.has('id')|| search_params.get('id')==""){
        window.location.href='./';
    }
    fetch(`https://api.unsplash.com/photos/${search_params.get('id')}?client_id=${API_KEY}`).then(convert_to_json)
    .then(function(data){

    loadDetail(data);

    document.getElementById('image_id').innerText = search_params.get('id');

    });

}

function loadDetail(data){
    console.log(data);
    document.getElementById('detail_image').src=data.urls.small;
    document.getElementById('description_text').innerHTML = data.alt_description;
    document.getElementById('username').innerHTML = data.user.username;

    document.getElementById('upload_date').innerHTML = data.created_at;
    document.getElementById('like_count').innerHTML = data.likes;
    document.getElementById('view_count').innerHTML = data.views;
    document.getElementById('image_color').style.backgroundColor = data.color;
    document.getElementById('download_link').href = data.links.download;
    
   
}