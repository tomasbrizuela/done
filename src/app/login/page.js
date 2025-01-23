import { Input } from '../../components/ui/input'
import { Separator } from "@/components/ui/separator"
import { Button, buttonVariants } from '../../components/ui/button'
import Link from 'next/link';
import LoginButton from '../../components/LogginButton';
import Header from '../../components/Header'

export default function LoginForm() {

    return (
        <>
            <Header />
            <div className='flex flex-col justify-center items-center gap-3 flex-1'>
                <div>
                    <h1 className='text-4xl text-black font-bold'>Log in</h1>
                </div>
                <div className='flex flex-col justify-center items-center w-1/3 mx-auto gap-3'>
                    <Input type='email' placeholder='Your email' />
                    <Input type='password' placeholder='Your password' />
                    <Button className='w-full'>Log in</Button>
                    <div className='flex flex-row justify-center items-center gap-2 w-full'>
                        <Separator className='w-20' />
                        <p className='text-gray-500'>or</p>
                        <Separator className='w-20' />
                    </div>
                    <Link href={'https://donebackk-948213617426.southamerica-east1.run.app/auth/provider/google'} className='w-full'>
                        <LoginButton></LoginButton>
                    </Link>
                    <Separator className='w-full' />
                    <div className='flex flex-row justify-center item-center gap-1'>
                        <p className='text-gray-600 text-sm'>First time here?</p>
                        <Link href={"/signup"} className='text-black-700 text-sm hover:underline'>Create your account</Link>
                    </div>
                </div>
            </div>
        </>
    );
}