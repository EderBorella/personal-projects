const containerImg = document.getElementById('meme-image-container');

document.getElementById('text-input').addEventListener('keyup', () => {
    document.getElementById('meme-text').innerText = document.getElementById('text-input').value
})

    var memeInput = document.getElementById('meme-insert');
    var memeOutput = containerImg;

    memeInput.addEventListener('change', function (e) {
        var file = memeInput.files[0];
        var reader = new FileReader();
            memeOutput.innerHTML = "";
            var img = new Image();
            img.src = reader.result;
            img.id = 'meme-image'
            img.className = 'meme-principal'
            memeOutput.appendChild(img);
        
        reader.readAsDataURL(file);
    });

document.getElementById('fire').addEventListener('click', () => {
    containerImg.style.border = '3px dashed rgb(255,0,0)'
})
document.getElementById('water').addEventListener('click', () => {
    containerImg.style.border = '5px double rgb(0,0,255)'
})
document.getElementById('earth').addEventListener('click', () => {
    containerImg.style.border = '6px groove rgb(0,128,0)'
})

document.getElementById('memes').addEventListener('click', (event) => {
    if (containerImg.children.length > 0) {
        containerImg.children[0].remove()
    }

    let meme1 = new Image;
    meme1.src = event.target.src;
    meme1.className = 'meme-principal'
    meme1.id = 'meme-image'

    containerImg.appendChild(meme1)
})