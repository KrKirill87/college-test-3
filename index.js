export default function solution(content) {

  /*На основе имеющихся данных выведите ответы на следующие вопросы:

  1-Сколько всего растений содержится в файле?
  2-Отсортируйте список растений в алфавитном порядке. При этом все растения должны начинаться с большой буквы.
  3-Выведите количество опасных и безопасных для человека растений в данной таблице в процентном соотношении.
  4-Выведите среднее время жизни всех лесных растений. Не каждого растения, а всех растений вместе. То есть среднее арифметическое для всех лесных растений.
  5-Определите какое место обитания больше всего свойственно опасным для человека растениям.*/


  // BEGIN
  //console.log(content)
  let data = content
    .split('\n')
    .slice(2)
    .map((row) => row.slice(1, -1).split('|'))//[0]-flower,[1]-place,[2]-type,[3]-lifeTime,[4]-dangerous
    .map((plant) => plant.map((element) => element.trim()));
    // 1 задание  
  console.log(`Всего растений: ${data.length}`)

    // 2 задание
  let sortFirstLetter = data.map(item => ` ${item[0][0].toUpperCase()}${item[0].slice(1)}`).sort();
  console.log(`Список растений в алфавитном порядке: ${sortFirstLetter}`);

    // 3 задание
  let dangerousPlants = data.filter(plant => plant[4] === 'Да');
  let normalPlants = data.filter(plant => plant[4] === 'Нет');
  let percentDangerousPlants = (dangerousPlants.length / data.length) * 100;
  let percentNormalPlants = (normalPlants.length / data.length) * 100;
  console.log(`Безопасных растений:${percentNormalPlants}% \nОпасных растений:${percentDangerousPlants}%`);

    // 4 задание
  let forestPlants = data.filter(plant => plant[1].toLowerCase().includes('леса'))

  console.log(forestPlants)
  // END
}