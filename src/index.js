import readlinesSync from 'readline-sync';

console.log('Welcome to the Brain Games! \n');

const userName = readlinesSync.question('May I have your name? ');
console.log(`Hi, ${userName}!`);
