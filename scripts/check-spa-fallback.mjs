// 빌드 산출물에 GitHub Pages SPA 딥링크 폴백이 제대로 연결됐는지 검증한다.
// 이 파일들이 없거나 스크립트가 빠지면, 배포된 사이트에서 홈을 제외한
// 모든 경로가 새로고침/직접 접근 시 404가 된다. (실제로 그런 상태였다.)
import { readFile } from "node:fs/promises";

const checks = [
  {
    file: "dist/404.html",
    must: "pathSegmentsToKeep",
    why: "404.html의 딥링크 리다이렉트 스크립트",
  },
  {
    file: "dist/index.html",
    must: 'l.search[1] === "/"',
    why: "index.html의 경로 복원 스크립트",
  },
];

let failed = false;
for (const { file, must, why } of checks) {
  let content;
  try {
    content = await readFile(file, "utf8");
  } catch {
    console.error(`✖ ${file} 이 없습니다 — ${why}`);
    failed = true;
    continue;
  }
  if (!content.includes(must)) {
    console.error(`✖ ${file} 에 ${why}가 없습니다 (찾는 문자열: ${must})`);
    failed = true;
  } else {
    console.log(`✔ ${file}: ${why} 확인`);
  }
}

if (failed) {
  console.error("\nSPA 딥링크 폴백이 깨졌습니다. public/404.html 과 index.html 복원 스크립트를 확인하세요.");
  process.exit(1);
}
console.log("\nSPA 딥링크 폴백 정상.");
