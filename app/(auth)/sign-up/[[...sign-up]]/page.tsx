import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className='bg-blue-100 flex h-screen w-screen justify-center items-center'>
            <SignUp
                path="/sign-up" 
                routing="path"
                signInUrl="/sign-in"
                afterSignInUrl="/dashboard" 
            />
        </div>
    );
}