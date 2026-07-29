# my-starter-kit

Next.js + Tailwind CSS v4 + shadcn/ui 기반의 재사용 가능한 스타터킷입니다. 새 프로젝트를 시작할 때 이 저장소를 템플릿으로 클론해서 사용하세요.

## 기술 스택

- [Next.js](https://nextjs.org/docs) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Prettier](https://prettier.io/) + `prettier-plugin-tailwindcss`

## 요구사항

- Node.js 22 이상 (`.nvmrc` 참고)
- [pnpm](https://pnpm.io/) 9 이상

## 시작하기

```bash
# 1. 저장소 클론
git clone <repository-url> my-project
cd my-project

# 2. 의존성 설치
pnpm install

# 3. 환경 변수 설정
cp .env.example .env.local

# 4. 개발 서버 실행
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인합니다.

## 사용 가능한 스크립트

| 명령어              | 설명                           |
| ------------------- | ------------------------------ |
| `pnpm dev`          | 개발 서버 실행 (Turbopack)     |
| `pnpm build`        | 프로덕션 빌드                  |
| `pnpm start`        | 빌드된 앱 실행                 |
| `pnpm lint`         | ESLint 검사                    |
| `pnpm format`       | Prettier로 전체 코드 포맷팅    |
| `pnpm format:check` | 포맷팅 검사만 수행 (수정 없음) |
| `pnpm typecheck`    | TypeScript 타입 검사           |

## 폴더 구조

```
src/
├── app/            # 라우팅/페이지 (App Router)
├── components/
│   ├── ui/         # shadcn 원시 컴포넌트
│   └── common/      # 여러 feature가 공유하는 조합 컴포넌트 (필요 시 생성)
├── lib/            # 범용 유틸/설정
├── hooks/          # 공용 커스텀 훅 (필요 시 생성)
├── types/          # 공용 타입 (필요 시 생성)
└── features/<name>/  # 기능 단위 코드 묶음 (필요 시 생성)
```

## shadcn/ui 컴포넌트 추가하기

```bash
pnpm dlx shadcn@latest add <component-name>
```

예: `pnpm dlx shadcn@latest add dialog`

컴포넌트는 npm 의존성이 아니라 `src/components/ui/`에 소스 코드로 복사되므로 자유롭게 수정할 수 있습니다.

## 환경 변수

`.env.example`을 복사해 `.env.local`을 만들고 필요한 값을 채워주세요. `.env.local`은 git에 커밋되지 않습니다.

## 코드 컨벤션

이 프로젝트의 코딩 규칙과 언어 규칙(응답/주석/문서는 한국어, 식별자는 영어 등)은 [CLAUDE.md](./CLAUDE.md)에 정리되어 있습니다.

## 라이선스

TBD
