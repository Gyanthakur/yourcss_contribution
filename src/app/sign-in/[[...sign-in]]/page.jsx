import { SignIn } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import AuthPageWrapper from '@/components/AuthPageWrapper'

export default function Page() {
  // If Clerk keys are missing, just render SignIn (local dev without secrets)
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  if (hasClerk) {
    const { userId } = auth()
    if (userId) {
      redirect('/')
    }
  }
  return (
    <AuthPageWrapper>
      <SignIn
        appearance={{
          elements: { rootBox: "w-full", card: "w-full" },
          baseTheme: "dark",
        }}
      />
    </AuthPageWrapper>
  )
}