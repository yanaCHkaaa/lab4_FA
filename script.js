// script.js
document.addEventListener("DOMContentLoaded", function () {
    let elementId = (30 % 10) + 1;
    let ElementClicked = false;
    let nextElementId = elementId + 1;
    let NextElementClicked = false;
    
    // Отримуємо посилання на основний та наступний елементи за їхніми ідентифікаторами
    const element = document.getElementById(`element${elementId}`);
    const nextElement = document.querySelector(`#element${nextElementId}`);

    // Оброблюємо події для потрібних елементів при кліку на них
    element.addEventListener("click", function () {
        if (!ElementClicked) {
            element.classList.add("clicked1");
            ElementClicked = true;
        } else {
            element.classList.remove("clicked1");
            ElementClicked = false;
        }
    });
    nextElement.addEventListener("click", function () {
        if (!NextElementClicked) {
            nextElement.classList.add("clicked2");
            NextElementClicked = true;
        } else {
            nextElement.classList.remove("clicked2");
            NextElementClicked = false;
        }
    });
    
    //Пошук елементів за їх ID
    const image = document.getElementById("image");
    const addButton = document.getElementById("addButton");
    const increaseButton = document.getElementById("increaseButton");
    const decreaseButton = document.getElementById("decreaseButton");
    const deleteButton = document.getElementById("deleteButton");



    addButton.addEventListener("click", function () {
    // Створюємо новий контейнер і зображення
    const newContainer = document.createElement("div");
    newContainer.classList.add("image-container");

    const newImage = document.createElement("img");

    // Отримуємо дані існуючого зображення
    const existingImage = document.getElementById("image");

    // Копіюємо src та alt з існуючого зображення на нове
    newImage.src = existingImage.src;
    newImage.alt = existingImage.alt;

    // Додаємо новому зображенню клас "added-image"
    newImage.classList.add("added-image");

    // Встановлюємо атрибут data-scale для нового зображення
    newImage.setAttribute("data-scale", "1.0");

    // Додаємо нове зображення в контейнер
    newContainer.appendChild(newImage);

    // Додаємо контейнер з новим зображенням до body
    document.body.appendChild(newContainer);

    });

    deleteButton.addEventListener("click", function () {
        // Знаходимо всі елементи з класом "added-image" і видаляємо їх
        const addedImages = document.querySelectorAll("img.added-image");
        addedImages.forEach(function (addedImage) {
            addedImage.remove();
        });
    });


    increaseButton.addEventListener("click", function () {
     // Знаходимо всі додані зображення
     const addedImages = document.querySelectorAll("img.added-image");
     addedImages.forEach(function (addedImage) {
        // Отримуємо поточний масштаб
        let currentScale = parseFloat(addedImage.getAttribute("data-scale"));
        // Збільшуємо масштаб на 0.1
        currentScale += 0.1;
        // Застосовуємо трансформацію для збільшення
        addedImage.style.transform = `scale(${currentScale})`;
        // Оновлюємо значення data-scale
        addedImage.setAttribute("data-scale", currentScale.toString());
     });
    });

    decreaseButton.addEventListener("click", function () {
      // Знаходимо всі додані зображення
      const addedImages = document.querySelectorAll("img.added-image");
      addedImages.forEach(function (addedImage) {
        // Отримуємо поточний масштаб
        let currentScale = parseFloat(addedImage.getAttribute("data-scale"));
        // Зменшуємо масштаб на 0.1, з умовою для мінімального значення 0.1
        currentScale -= 0.1;
        if (currentScale < 0.1) {
            currentScale = 0.1;
        }
        // Застосовуємо трансформацію для зменшення
        addedImage.style.transform = `scale(${currentScale})`;
        // Оновлюємо значення data-scale
        addedImage.setAttribute("data-scale", currentScale.toString());
       });
    });
});