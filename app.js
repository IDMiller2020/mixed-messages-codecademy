const inputString = {
  feelings: ['happy','sad','excited','anxious','invigorated','down','inspired','bored'],
  inspirations: ['Be yourself; everyone else is already taken.','Be the change that you wish to see in the world.','Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart.','Be brave to stand for what you believe in even if you stand alone.','Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.','You do not find the happy life. You make it.','Keep your face to the sunshine and you cannot see a shadow.','Tough times never last, but tough people do.'],
  actions: ['Don\'t forget to eat your vegetables','Make sure you look both ways before you cross the road.', 'Never chew with your mouth open.','Remember to brush your teeth after every meal.','Remember to wash your hands before you eat.','Don\'t forget to say please and thank you.','Remember, an apple a day keeps the doctor away.','']
}

const selectRandomPhrase = arr => {
  const arrLen = arr.length
  const randomIndex = Math.floor(Math.random() * arrLen)
  return arr[randomIndex]
}

// Testing Section
// console.log(`Random feeling: ${selectRandomPhrase(inputString.feelings)}`)
// console.log(`Random inspiration: ${selectRandomPhrase(inputString.inspirations)}`)
// console.log(`Random action: ${selectRandomPhrase(inputString.actions)}`)
// 
// ***** Random change for Git testing/practice *****