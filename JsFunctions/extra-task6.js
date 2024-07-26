/* You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

For example:

string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'


string -> 'griefgriefgrief'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '1 feeling.' // 'grief'


string -> 'abcdkasdfvkadf'
array -> ['desire', 'joy', 'shame', 'longing', 'fear']
output -> '0 feelings.'
If the feeling can be formed once - plus one to the answer.

If the feeling can be formed several times from different letters - plus one to the answer.

Each letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'. */

function countFeelings(string, array) {
  const feelingMap = new Map();
  let count = 0;

  for (let feeling of array) {
    feelingMap.set(feeling, 0);
  }

  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    for (let feeling of feelingMap.keys()) {
      if (feeling.startsWith(current)) {
        feelingMap.set(feeling, feelingMap.get(feeling) + 1);
      }
    }
  }

  for (let value of feelingMap.values()) {
    if (value > 0) {
      count++;
    }
  }

  return `${count} feeling${count !== 1 ? 's' : ''}`;
}

console.log(countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']));
console.log(countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief']));
console.log(countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear']));