const BASE_URL = process.env.TAPAS_BASE_URL || 'https://tapas.io';
const IS_QA = BASE_URL.includes('qa.');

export const TEST_DATA = {
  search: {
    keyword: 'Olympus',
    workTitle: 'The Edge of Olympus',
    comicWuf: IS_QA ? 'Girls Like You' : 'I Was the Real Head of the House',
    comicPaid: 'The Eccentric Duchess',
    novelWuf: IS_QA ? 'Solitary Lady' : "The Villain's Sidekick",
    novelPaid: IS_QA ? 'Snakes and Splinters' : 'Overlord',
  },
  series: {
    comic: '/series/villainesses-have-more-fun/info',
    novel: IS_QA ? '/series/DEATHLESSnovel/info' : '/series/the-unbeatable-game-novel',
    wuf: IS_QA ? '/series/Girls-Like-You/info' : '/series/i-was-the-real-head-of-the-house/info',
    comicPaid: '/series/the-eccentric-duchess/info',
    novelWuf: IS_QA ? '/series/solitary-lady-novel/info' : '/series/the-villains-sidekick-novel/info',
    novelPaid: IS_QA ? '/series/snakes-and-splinters/info' : '/series/overlord-novel/info',
    novelViewer: IS_QA ? '/series/DEATHLESSnovel/info' : '/series/the-necromancers-knight-novel',
    notice: IS_QA ? '/series/twin-or-lose/info' : '/series/i-was-the-real-head-of-the-house/info',
    subscribeTest: '/series/dark-paradise/info',
  },
  episode: {
    // Episode 1 (no prev), next = 2386509
    comicEp1: '/episode/2360789',
    // Episode 2 (has both prev=2360789 and next)
    comicEp2: '/episode/2386509',
    // sparks 시리즈 — 작가의 말/광고/이벤트 배너 확인용
    comicSparks: '/episode/317574',
    // 소설 뷰어 테스트용
    novelEp: IS_QA ? '/episode/2779345' : '/episode/3125421',
    // 작가 Support 버튼 있는 에피소드
    superheroEp: IS_QA ? '/episode/2498506' : '/episode/2481682',
  },
};
