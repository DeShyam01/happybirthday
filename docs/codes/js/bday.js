const maxHeight = innerHeight-300, minHeight = 0, maxWidth = innerWidth-200, minWidth = 0;

let _top1 = Math.floor(Math.random()*(maxHeight - minHeight + 1)) + minHeight + 'px';
let _left1 = Math.floor(Math.random()*(maxWidth - minWidth + 1)) + minWidth + 'px';

let _top2 = Math.floor(Math.random()*(maxHeight - minHeight + 1)) + minHeight + 'px';
let _left2 = Math.floor(Math.random()*(maxWidth - minWidth + 1)) + minWidth + 'px';

let _top3 = Math.floor(Math.random()*(maxHeight - minHeight + 1)) + minHeight + 'px';
let _left3 = Math.floor(Math.random()*(maxWidth - minWidth + 1)) + minWidth + 'px';

let _top4 = Math.floor(Math.random()*(maxHeight - minHeight + 1)) + minHeight + 'px';
let _left4 = Math.floor(Math.random()*(maxWidth - minWidth + 1)) + minWidth + 'px';

let _top5 = Math.floor(Math.random()*(maxHeight - minHeight + 1)) + minHeight + 'px';
let _left5 = Math.floor(Math.random()*(maxWidth - minWidth + 1)) + minWidth + 'px';

document.documentElement.style.setProperty('--top-1', _top1);
document.documentElement.style.setProperty('--left-1', _left1);

document.documentElement.style.setProperty('--top-2', _top2);
document.documentElement.style.setProperty('--left-2', _left2);

document.documentElement.style.setProperty('--top-3', _top3);
document.documentElement.style.setProperty('--left-3', _left3);

document.documentElement.style.setProperty('--top-4', _top4);
document.documentElement.style.setProperty('--left-4', _left4);

document.documentElement.style.setProperty('--top-5', _top5);
document.documentElement.style.setProperty('--left-5', _left5);