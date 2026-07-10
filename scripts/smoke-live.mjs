// 배포된 사이트에서 딥링크 폴백이 실제로 동작하는지 확인한다.
//   - 홈은 200이어야 한다.
//   - 딥링크는 GitHub Pages 특성상 404 상태로 오지만, 본문은 404.html이며
//     리다이렉트 스크립트를 포함해야 한다. (그래야 브라우저가 정상 경로로 이동한다.)
// 배포는 수동(gh-pages)이므로 이 스크립트는 스케줄/수동 실행으로 사후 감시한다.
const BASE = process.env.SITE_BASE || "https://dohyuk-centric.github.io/eslint-kr";
const ROUTES = ["intro", "install", "setting", "rules", "rulesReference", "settingFile", "parser", "plugin", "prettier"];

async function get(url) {
  const res = await fetch(url, { redirect: "manual" });
  return { status: res.status, body: await res.text() };
}

let failed = false;
function check(cond, msg) {
  console.log((cond ? "✔ " : "✖ ") + msg);
  if (!cond) failed = true;
}

const home = await get(BASE + "/");
check(home.status === 200, `홈 200 (실제 ${home.status})`);

for (const r of ROUTES) {
  const { status, body } = await get(`${BASE}/${r}`);
  // 정상 배포 상태: 200(파일 존재, 드묾) 이거나 404 + 폴백 스크립트
  const ok = status === 200 || (status === 404 && body.includes("pathSegmentsToKeep"));
  check(ok, `/${r} 폴백 동작 (status ${status})`);
}

if (failed) {
  console.error("\n딥링크 폴백이 배포본에서 동작하지 않습니다. 404.html이 배포됐는지 확인하세요.");
  process.exit(1);
}
console.log("\n배포본 딥링크 폴백 정상.");
