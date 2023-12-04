import { LoremIpsum } from "lorem-ipsum";

export interface PodcastList {
  name: string;
  avatar: string;
}

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 6,
    min: 2,
  },
});

function getRandomNumber(max: number) {
  // This exclusion is for picsum images that are broken
  const excludeNumbers: Array<number> = [
    246, 226, 224, 207, 205, 150, 148, 138, 105, 97, 86, 22,
  ];
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max + 1));
  } while (excludeNumbers.includes(randomNumber));
  return randomNumber;
}

export function generatePodcastList(count: number): PodcastList[] {
  const podcastList = [];
  const punctuation = /[.,?!]/g;
  for (let i = 0; i < count; i++) {
    podcastList.push({
      name: lorem.generateSentences(1).replace(punctuation, ""),
      avatar: `https://picsum.photos/id/${getRandomNumber(250)}/60/60`,
    });
  }
  return podcastList;
}
