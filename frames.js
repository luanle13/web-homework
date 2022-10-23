let iframeTarget = 'content/Me.html';

function changeTarget(target){
    console.log(target);

    document.getElementById("iframe-target").src = target;
}