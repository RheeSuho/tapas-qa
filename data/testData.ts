export const TEST_DATA = {
  search: {
    keyword: 'Olympus',
    workTitle: 'The Edge of Olympus',
    comicWuf: 'I Was the Real Head of the House',
    comicPaid: 'The Eccentric Duchess',
    novelWuf: "The Villain's Sidekick",
    novelPaid: 'Overlord',
  },
  series: {
    comic: '/series/villainesses-have-more-fun/info',
    novel: '/series/the-unbeatable-game-novel',
    wuf: '/series/i-was-the-real-head-of-the-house/info',
    comicPaid: '/series/the-eccentric-duchess/info',
    novelWuf: '/series/the-villains-sidekick-novel/info',
    novelPaid: '/series/overlord-novel/info',
    novelViewer: '/series/the-necromancers-knight-novel',
  },
  episode: {
    // Episode 1 (no prev), next = 2386509
    comicEp1: '/episode/2360789',
    // Episode 2 (has both prev=2360789 and next)
    comicEp2: '/episode/2386509',
    // sparks 시리즈 — 작가의 말/광고/이벤트 배너 확인용
    comicSparks: '/episode/317574',
    // 소설 뷰어 테스트용
    novelEp: '/episode/3125421',
    // 작가 Support 버튼 있는 에피소드
    superheroEp: '/episode/2481682',
  },
};
