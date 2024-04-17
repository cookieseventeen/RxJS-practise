import { Subject } from 'rxjs';

// 觀察者 A
const observerA = {
  notify: (id) => {
    console.log(`我是觀察者 A，我收到影片 ${id} 上架通知了`);
  },
};

// 觀察者 B
const observerB = {
  notify: (id) => {
    console.log(`我是觀察者 B，我收到影片 ${id} 上架通知了`);
  },
};

const youtuberSubject = {
  // 存放所有的觀察者，也就是開啟通知的使用者
  observers: [],
  // 通知所有觀察者新影片上架了
  notifyObservers: (id) => {
    // 列舉出每個觀察者，並進行通知動作
    youtuberSubject.observers.forEach((observer) => {
      observer.notify(id);
    });
  },
  // 加入新的觀察者，也就是有新使用者開啟通知了
  addObserver: (observer) => {
    youtuberSubject.observers.push(observer);
  },
  // 將某個觀察者移除，也就是某個使用者關閉通知了
  deleteObserver: (observer) => {
    youtuberSubject.observers = youtuberSubject.observers.filter(
      (obs) => obs !== observer
    );
  },
};

console.log('--- 開始 ---');

// 影片 1 上架，此時還沒有觀察者
youtuberSubject.notifyObservers(1);
// 輸出結果：
// (沒有任何輸出)

// 加入觀察者 A，也就是觀察者 A 開啟通知了
youtuberSubject.addObserver(observerA);
// 影片 2 上架，此時觀察者 A 會收到通知
youtuberSubject.notifyObservers(2);
// 輸出結果：
// 我是觀察者 A，我收到影片 2 上架通知了

// 加入觀察者 B，也就是觀察者 B 開啟通知了
youtuberSubject.addObserver(observerB);
// 影片 3 上架，此時觀察者 A 跟 B 都會收到通知
youtuberSubject.notifyObservers(3);
// 輸出結果：
// 我是觀察者 A，我收到影片 3 上架通知了
// 我是觀察者 B，我收到影片 3 上架通知了

// 移除觀察者 B，也就是觀察者 B 關閉通知了
youtuberSubject.deleteObserver(observerB);
// 影片 4 上架，此時只剩下觀察者 A 會收到通知
youtuberSubject.notifyObservers(4);
// 輸出結果：
// 我是觀察者 A，我收到影片 4 上架通知了

console.log('--- 結束 ---');

const youtubeSubject$ = new Subject<number>();

const observerAA = {
  next: (id) => {
    console.log('箭頭函示');
    console.log(id);
    console.log(id);
    console.log(id);
    console.log(id);
  },
  error: () => {},
  complete: () => {},
};

const observerBB = {
  next: (id) => {
    console.log('省略寫法');
    console.log(id);
    console.log(id);
    console.log(id);
    console.log(id);
  },
  error: () => {},
  complete: () => {},
};

let subscriptionA = youtubeSubject$.subscribe(observerAA);

let subscriptionB = youtubeSubject$.subscribe(observerBB);

youtubeSubject$.next(1111);
subscriptionB.unsubscribe();
youtubeSubject$.next(1111);

const testSubJect = {
  observers: [],
  addObserver: (observer) => {
    testSubJect.observers.push(observer);
  },
  deleteObserver: (observer) => {
    testSubJect.observers = testSubJect.observers.filter(
      (obs) => obs !== observer
    );
  },
  notifyObservers: (id) => {
    testSubJect.observers.forEach((obs) => {
      obs?.notify(id);
    });
  },
};

const notifyObserverA = {
  notify: (id) => {
    console.log('notify AAA id:', id);
  },
};
const notifyObserverB = {
  notify: (id) => {
    console.log('notify BBB id:', id);
  },
};

testSubJect.addObserver(notifyObserverA);

testSubJect.notifyObservers(111);

testSubJect.addObserver(notifyObserverB);

testSubJect.notifyObservers(2222);

testSubJect.deleteObserver(notifyObserverA);

testSubJect.notifyObservers(3333);

//Q什麼時候會用箭頭？什麼時候會用fucntion

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sunEvenSquare = (dataArray) => {
  console.log('sunEvenSquare');
  console.log(this);
  return dataArray
    .filter((item) => item % 2 === 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const sum = sunEvenSquare(data);

console.log(sum);

function sunEvenSquareTwo(dataArray) {
  console.log('sunEvenSquareTwo');
  console.log(this);
  return dataArray
    .filter((item) => item % 2 === 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const sumTwo = sunEvenSquareTwo(data);

console.log(sum);

let effectSum = 0;

const effectSumFunction = () => {
  for (let i = 0; i < data.length; ++i) {
    console.log(i);
  }
};

effectSumFunction();
effectSumFunction();

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob'];

let count = names.reduce((pre, current) => {
  if (current in pre) {
    ++pre[current];
  } else {
    pre[current] = 1;
  }
  return pre;
}, {});

console.log(count);

var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const concatAll = flattened.reduce((prev, current) => {
  return [...prev, ...current];
}, []);

console.log(concatAll);

const concatMDN = flattened.reduce((pre, current) => {
  return pre.concat(current);
}, []);

console.log(concatMDN);
