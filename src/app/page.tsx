import { Button } from "@/components/ui/button";

// 스타터킷의 최소 웰컴 화면. shadcn Button이 정상 동작하는지 확인하는 용도.
export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">my-starter-kit</h1>
      <p className="text-muted-foreground max-w-md text-balance">
        Next.js + Tailwind CSS v4 + shadcn/ui 스타터킷입니다. src/app/page.tsx부터 수정을
        시작하세요.
      </p>
      <Button
        render={
          <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener noreferrer">
            shadcn/ui 문서 보기
          </a>
        }
      />
    </div>
  );
}
