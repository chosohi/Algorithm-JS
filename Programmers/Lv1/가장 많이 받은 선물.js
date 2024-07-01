function solution(friends, gifts) {
  let answer = 0;

  const giftMap = new Map();
  const logMap = new Map();
  const resultMap = new Map();

  friends.forEach((friend) => {
    giftMap.set(friend, { give: 0, receive: 0 });
    logMap.set(friend, []);
  });

  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");

    const giverValue = giftMap.get(giver);
    const receiverValue = giftMap.get(receiver);
    const giverLog = logMap.get(giver);
    const receiverLog = logMap.get(receiver);

    giftMap.set(giver, {
      give: giverValue.give + 1,
      receive: giverValue.receive,
    });

    giftMap.set(receiver, {
      give: receiverValue.give,
      receive: receiverValue.receive + 1,
    });

    logMap.set(giver, [...giverLog, receiver]);
  });

  let lt = 0;
  let rt = 1;

  while (lt < rt && rt < friends.length) {
    const me = friends[lt];
    const friend = friends[rt];

    const myLog = logMap.get(me);
    const freindLog = logMap.get(friend);

    if (myLog.includes(friend) || freindLog.includes(me)) {
      const myCount = myLog.filter((value) => value === friend).length;
      const friendCount = freindLog.filter((value) => value === me).length;

      if (myCount > friendCount) {
        resultMap.set(me, (resultMap.get(me) || 0) + 1);
      } else if (friendCount > myCount) {
        resultMap.set(friend, (resultMap.get(friend) || 0) + 1);
      } else {
        const myGift = giftMap.get(me);
        const friendGift = giftMap.get(friend);

        const myGiftRatio = myGift.give - myGift.receive;
        const friendGiftRatio = friendGift.give - friendGift.receive;

        if (myGiftRatio > friendGiftRatio) {
          resultMap.set(me, (resultMap.get(me) || 0) + 1);
        } else if (friendGiftRatio > myGiftRatio) {
          resultMap.set(friend, (resultMap.get(friend) || 0) + 1);
        }
      }
    } else {
      const myGift = giftMap.get(me);
      const friendGift = giftMap.get(friend);

      const myGiftRatio = myGift.give - myGift.receive;
      const friendGiftRatio = friendGift.give - friendGift.receive;

      if (myGiftRatio > friendGiftRatio) {
        resultMap.set(me, (resultMap.get(me) || 0) + 1);
      } else if (friendGiftRatio > myGiftRatio) {
        resultMap.set(friend, (resultMap.get(friend) || 0) + 1);
      }
    }

    if (rt === friends.length - 1) {
      lt += 1;
      rt = lt + 1;
    } else {
      rt += 1;
    }
  }

  resultMap.forEach((value) => (answer = answer < value ? value : answer));

  return answer;
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  )
);
