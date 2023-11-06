import {currentUser, UserButton} from "@clerk/nextjs";
import {Suspense, useRef} from "react";
import {Skeleton} from "@/components/ui/skeleton";

export default async function Home() {
  return (
    <>
        <Suspense fallback={<WelcomeMsgFallback />}>
            <WelcomeMsg />
        </Suspense>
    </>
  )
}


async function WelcomeMsg () {
    const user = await currentUser();
    await new Promise((resolve) => setTimeout(resolve, 6000))
    if(!user) {
        return <div>error</div>
    }
    return (
        <div className="flex w-full mb-12">
            <h1 className="text-4xl font-bold">
                Welcome, {user.firstName} {user.lastName}
            </h1>
        </div>
    )
}

function WelcomeMsgFallback() {
    return (
        <div className="flex justify-center w-full mb-12">
            <h1 className="text-4xl font-bold">
                <Skeleton className="w-[180px] h-[36px] mb-4" />
                <Skeleton className="w-[180px] h-[36px] mb-4" />
                <Skeleton className="w-[180px] h-[36px] mb-4" />
                <Skeleton className="w-[180px] h-[36px]" />
            </h1>
        </div>
    )
}



