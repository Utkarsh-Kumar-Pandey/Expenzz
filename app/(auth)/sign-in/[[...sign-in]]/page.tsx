import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className='bg-blue-100 flex h-screen w-screen justify-center items-center'>
            <SignIn
                path="/sign-in"
                routing="path"
                signUpUrl="/sign-up"
                afterSignInUrl="/wizard" 
            />
        </div>
    );
}