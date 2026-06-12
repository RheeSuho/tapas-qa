#!/bin/bash
# AUTH_STATE_B64 GitHub Secret 갱신 스크립트
# 사용: npm run renew:auth
# 주기: 약 5일마다 실행 (세션 만료 전)

set -e

AUTH_FILE=".auth/user.json"

echo "[1/3] 세션 갱신 중 (브라우저 로그인)..."
npm run test:setup

if [ ! -f "$AUTH_FILE" ]; then
  echo "❌ $AUTH_FILE 없음 — test:setup 실패"
  exit 1
fi

echo "[2/3] base64 인코딩..."
B64=$(base64 < "$AUTH_FILE" | tr -d '\n')

echo "[3/3] GitHub Secret 업로드..."
gh secret set AUTH_STATE_B64 --body "$B64"

echo "✅ AUTH_STATE_B64 갱신 완료 — 다음 갱신: 약 5일 후"
