function openImage(src){

    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;

}

function closeImage(){

    document.getElementById("lightbox").style.display = "none";

}

document.getElementById("imageInput").addEventListener("change", function(event){

    const gallery = document.querySelector(".gallery");

    const files = event.target.files;

    for(let file of files){

        const reader = new FileReader();

        reader.onload = function(e){

            const img = document.createElement("img");

            img.src = e.target.result;

            img.onclick = function(){
                openImage(img.src);
            };

            gallery.appendChild(img);

        };

        reader.readAsDataURL(file);

    }

});