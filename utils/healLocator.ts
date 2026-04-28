import { Locator, Page } from '@playwright/test';

type Strategy = (page: Page) => Locator;

/**
 * 셀프힐링 locator 헬퍼
 *
 * strategy[0]이 DOM에서 발견되면 그것을 사용.
 * 실패하면 strategy[1], [2] 순으로 시도.
 * 폴백이 사용된 경우 ⚕️ 경고를 출력해서 "이 locator 업데이트 필요"를 알림.
 * 모든 strategy 실패 시 null 반환 → 호출부에서 test.skip() 처리.
 *
 * @example
 * const el = await heal(page, [
 *   p => p.locator('a[href*="category=NOVEL"]'),   // URL 기반 (주 전략)
 *   p => p.getByRole('link', { name: /novels/i }), // role 기반 (보조)
 *   p => p.getByText('Novels'),                    // 텍스트 기반 (최후)
 * ], 'Novels 필터');
 * if (el) await el.click();
 * else test.skip(true, 'Novels 필터 없음');
 */
export async function heal(
  page: Page,
  strategies: Strategy[],
  label?: string
): Promise<Locator | null> {
  for (let i = 0; i < strategies.length; i++) {
    try {
      const loc = strategies[i](page);
      if ((await loc.count()) > 0) {
        if (i > 0) {
          const tag = label ? ` [${label}]` : '';
          console.warn(`⚕️  SelfHeal${tag}: strategy[0] 실패 → strategy[${i}] 로 복구됨. locator 업데이트 필요.`);
        }
        return loc.first();
      }
    } catch {
      // 이 strategy가 예외를 던짐 → 다음 strategy 시도
    }
  }
  return null;
}
