import {Input} from '../../components/ui/input'
import { Separator } from "@/components/ui/separator"
import {Button, buttonVariants} from '../../components/ui/button'
import Header from '../../components/Header'
import Link from 'next/link';
export default function loginForm(){
    return (
        <>
            <Header />
            <div className='flex flex-col justify-center items-center w-screen h-80 gap-3'>
                <div>
                    <h1 className='text-4xl text-black font-bold'>Log in</h1>
                </div>
                <div className='flex flex-col justify-center items-center w-1/3 mx-auto gap-3'>
                    <Input type='email' placeholder='Your email'/>
                    <Input type='password' placeholder='Your password' />
                    <Button className='w-full'>Log in</Button>
                    <div className='flex flex-row justify-center items-center gap-2 w-full'>
                        <Separator className='w-40'/>
                        <p>or</p>
                        <Separator className='w-40'/>
                    </div>
                    <Link href={'https://donebackk-948213617426.southamerica-east1.run.app//auth/google'} className='w-full'>
                        <Button className='w-full  bg-blue-500 hover:bg-blue-700'>Use Google</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}