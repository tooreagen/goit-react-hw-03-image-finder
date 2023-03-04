// key="33034788-7582eefcdc3a32a9d39f881fb"
//URL="https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12"




// Pixabay API поддерживает пагинацию, по умолчанию параметр page равен 1. 
//Пусть в ответе приходит по 12 объектов, установлено в параметре per_page.Не забудь что при поиске по новому ключевому слову, необходимо сбрасывать значение page в 1.

// В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства.

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна