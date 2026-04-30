export const TEST_DATA = {
  search: {
    keyword: 'Olympus',
    workTitle: 'The Edge of Olympus',
  },
  series: {
    comic: 'https://tapas.io/series/the-beginning-after-the-end/episodes',
    novel: 'https://tapas.io/series/the-unbeatable-game-novel',
    // WUF 띠배너 + 공지사항 띠배너 + 기다무/유료 회차 모두 있는 시리즈
    wuf: 'https://tapas.io/series/i-was-the-real-head-of-the-house/episodes',
    // 소설 뷰어 테스트용
    novelViewer: 'https://tapas.io/series/the-necromancers-knight-novel',
  },
  episode: {
    // Episode 1 (no prev), next = 2386509
    comicEp1: 'https://tapas.io/episode/2360789',
    // Episode 2 (has both prev=2360789 and next)
    comicEp2: 'https://tapas.io/episode/2386509',
    // sparks 시리즈 — 작가의 말/광고/이벤트 배너 확인용
    comicSparks: 'https://tapas.io/episode/317574',
    // 소설 뷰어 테스트용 (The Necromancer's Knight)
    novelEp: 'https://tapas.io/episode/3125421',
  },
};
