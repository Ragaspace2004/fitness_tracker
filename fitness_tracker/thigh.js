document.addEventListener('DOMContentLoaded', () => {
  const thighExercises = [
      { name: "Squats", time: "3 sets, 12 reps", image: "squats.png" },
      { name: "Lunges", time: "3 sets, 12 reps", image: "lunges.png" },
      { name: "Kicks", time: "3 sets, 12 reps", image: "kicks.png" }
  ];

  const thighExercisesContainer = document.getElementById('thighExercises');

  function renderThighExercises() {
      thighExercisesContainer.innerHTML = '';
      thighExercises.forEach(exercise => {
          const card = createExerciseCard(exercise);
          thighExercisesContainer.appendChild(card);
      });
  }

  renderThighExercises();

  function createExerciseCard(exercise) {
      const card = document.createElement('div');
      card.classList.add('bg-white', 'rounded', 'overflow-hidden', 'shadow-lg');

      const image = document.createElement('img');
      image.classList.add('w-full');
      image.src = exercise.image;
      image.alt = exercise.name;

      const cardBody = document.createElement('div');
      cardBody.classList.add('px-6', 'py-4');

      const title = document.createElement('div');
      title.classList.add('font-bold', 'text-xl', 'mb-2');
      title.textContent = exercise.name;

      const time = document.createElement('p');
      time.classList.add('text-gray-700', 'text-base');
      time.textContent = exercise.time;

      const addButton = document.createElement('button');
      addButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'mt-4', 'mr-2');
      addButton.textContent = '+ Add';
      addButton.addEventListener('click', () => addExerciseToList(exercise));

      cardBody.appendChild(title);
      cardBody.appendChild(time);
      cardBody.appendChild(addButton);
      card.appendChild(image);
      card.appendChild(cardBody);

      return card;
  }

  function addExerciseToList(exercise) {
      const exerciseList = document.getElementById('exerciseList');
      const listItem = document.createElement('li');
      listItem.classList.add('flex', 'items-center', 'py-2');

      const tickButton = document.createElement('button');
      tickButton.classList.add('bg-green-500', 'hover:bg-green-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'mr-2');
      tickButton.textContent = '✔️';
      tickButton.addEventListener('click', () => markAsComplete(listItem));

      const exerciseInfo = document.createElement('div');
      exerciseInfo.classList.add('flex-grow');

      const exerciseName = document.createElement('p');
      exerciseName.classList.add('font-bold');
      exerciseName.textContent = exercise.name;

      const exerciseTime = document.createElement('p');
      exerciseTime.textContent = exercise.time;

      exerciseInfo.appendChild(exerciseName);
      exerciseInfo.appendChild(exerciseTime);

      listItem.appendChild(tickButton);
      listItem.appendChild(exerciseInfo);

      exerciseList.appendChild(listItem);
  }

  function markAsComplete(listItem) {
      listItem.classList.add('bg-gray-200');
  }
});

function backtoHome(){
    window.location.href = 'index.html';
}