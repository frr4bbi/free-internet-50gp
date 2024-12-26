function addReaction(type) {
    alert(`আপনি একটি ${type} দিয়েছেন!`);
}

function LINK(){
    window.location("https://google.com/com")
}
function addComment() {
    const commentBox = document.getElementById('new-comment');
    const commentText = commentBox.value.trim();
    if (commentText) {
        const commentsDiv = document.getElementById('comments');
        const newComment = document.createElement('p');
        newComment.innerHTML = `<strong>আপনার নাম:</strong> ${commentText}`;
        commentsDiv.appendChild(newComment);
        commentBox.value = '';
    } else {
        alert('মন্তব্য ফাঁকা হতে পারে না।');
    }
}