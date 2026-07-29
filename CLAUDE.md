@AGENTS.md

# CLAUDE.md

## 언어 규칙 (필수, 예외 없음)

- **응답 언어**: 기본적으로 한국어로 응답한다.
- **코드 주석**: 한국어로 작성한다.
- **커밋 메시지**: 제목/본문은 한국어로 작성한다. 단, Conventional Commits의 타입 접두사
  (`feat`/`fix`/`refactor`/`docs`/`test`/`chore`/`perf`/`style`/`ci`)는 영어 키워드를 그대로 유지한다.
  예) `feat: 로그인 폼 유효성 검사 추가`
- **문서** (README, 그 외 `*.md`): 한국어로 작성한다.
- **식별자** (변수, 함수, 컴포넌트, 타입, 파일명): 영어로 작성한다.
  - 변수/함수: camelCase (`getUserById`, `isActive`)
  - 컴포넌트/타입: PascalCase (`UserCard`, `OrderStatus`)
  - 모듈 파일: kebab-case.ts (`user-service.ts`)
  - 컴포넌트 파일: PascalCase.tsx (`UserCard.tsx`)

## 프로젝트 개요

재사용 가능한 Next.js 스타터킷. 새 프로젝트를 시작할 때 이 저장소를 템플릿으로 클론해서 사용한다.

## 기술 스택

- Next.js (App Router, Turbopack)
- TypeScript (strict, `noUncheckedIndexedAccess` 활성화)
- Tailwind CSS v4 — `tailwind.config.js` 없음, `src/app/globals.css`의 `@theme`에서 토큰 정의
- shadcn/ui — CLI로 소스를 프로젝트에 복사(npm 의존성 아님), `src/components/ui/`에 위치

## 폴더 구조 & 컨벤션

```
src/
├── app/            # 라우팅/페이지 (App Router)
├── components/
│   ├── ui/         # shadcn 원시 컴포넌트 (직접 수정 가능, `shadcn add`로 재생성 시 덮어씀 주의)
│   └── common/      # 여러 feature가 공유하는 조합 컴포넌트 (필요해지면 생성)
├── lib/            # 범용 유틸/설정 (cn 헬퍼 등)
├── hooks/          # 공용 커스텀 훅 (필요해지면 생성)
├── types/          # 공용 타입 (필요해지면 생성)
└── features/<name>/  # 기능 단위 코드 묶음 (components/hooks/lib/types), 도메인 중심 구성 (필요해지면 생성)
```

빈 폴더는 미리 만들지 않는다. 실제로 해당 종류의 코드가 필요해지는 시점에 생성한다.

## 코딩 컨벤션 (요약)

- 불변성 유지 — 객체/배열을 직접 mutate하지 말고 spread로 새로 생성한다.
- 파일당 200~400줄 권장, 800줄 초과 금지. 초과 시 단일 책임 단위로 분리한다.
- 시스템 경계(사용자 입력, 외부 API 응답)는 zod로 검증한다. 내부 함수 간에는 과잉 검증하지 않는다.
- WCAG 2.2 AA 접근성을 준수한다 (시맨틱 HTML, 키보드 내비게이션, 명도 대비).
- `console.log`와 하드코딩된 값을 커밋하지 않는다.
- 의존성은 정확한 버전으로 고정한다 (`.npmrc`의 `save-exact=true`가 자동 적용), lockfile은 항상 커밋한다.

## Git 워크플로우

- Conventional Commits 사용, feature 브랜치 기반 작업 (`feature/`, `fix/`, `chore/` 등 접두사).

## 자주 쓰는 명령어

| 명령어                                   | 설명                           |
| ---------------------------------------- | ------------------------------ |
| `pnpm dev`                               | 개발 서버 실행                 |
| `pnpm build`                             | 프로덕션 빌드                  |
| `pnpm start`                             | 빌드된 앱 실행                 |
| `pnpm lint`                              | ESLint 검사                    |
| `pnpm format`                            | Prettier로 전체 포맷팅         |
| `pnpm format:check`                      | 포맷팅 검사만 수행 (수정 없음) |
| `pnpm typecheck`                         | TypeScript 타입 검사           |
| `pnpm dlx shadcn@latest add <component>` | 새 shadcn 컴포넌트 추가        |
