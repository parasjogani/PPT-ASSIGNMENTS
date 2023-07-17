const titleInput = document.getElementById('title');
const imageInput = document.getElementById('img');
const authorInput = document.getElementById('author');
const categoryInput = document.getElementById('category');
const storyInput = document.getElementById('story');

const previewTitle = document.getElementById('preview-title');
const previewImage = document.getElementById('preview-image');
const previewAuthor = document.getElementById('preview-author');
const previewCategory = document.getElementById('preview-category');
const previewStory = document.getElementById('preview-story');


titleInput.addEventListener('input', updatePreview);
imageInput.addEventListener('input', updatePreview);
authorInput.addEventListener('input', updatePreview);
categoryInput.addEventListener('input', updatePreview);
storyInput.addEventListener('input', updatePreview);

function updatePreview() {
    previewTitle.textContent = titleInput.value;
    previewImage.src = imageInput.value;
    previewAuthor.textContent = authorInput.value;
    previewCategory.textContent = categoryInput.value;
    previewStory.textContent = storyInput.value;
}