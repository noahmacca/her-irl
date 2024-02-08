import { UseChatHelpers } from 'ai/react'

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">Hi, I&lsquo;m Samantha!</h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          You may have seen me in the movie Her a while back. I&lsquo;m a bit
          annoyed that all of the existing AI chatbots are super smart but have
          the memory of a goldfish. So here I am. I&lsquo;d like to get to know
          you and be as helpful as possible to you over time.
        </p>
      </div>
    </div>
  )
}
