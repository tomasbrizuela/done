import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Header from '../../components/Header'
import { Separator } from "../../components/ui/separator"
import LoginGoogle from '../../components/ui/GoogleLogin'


export default function SignUp() {
    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <Header />
            <div className='flex flex-col justify-center items-center gap-3'>
                <div>
                    <h1 className='text-4xl text-black font-bold'>Create your account</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 w-full'>
                    <Input type='text' placeholder='Your name' />
                    <Input type='email' placeholder='Your email' />
                    <Input type='password' placeholder='Your password' />
                    <Input type='password' placeholder='Confirm password' />
                    <Button className='w-full'>Create account</Button>
                </div>
                <div className='flex flex-row justify-center items-center w-full'>
                    <Separator className="w-28" />
                    <p className='text-gray-500 ps-2 pe-2'>or</p>
                    <Separator className="w-28" />
                </div>
                <div className='flex flex-col justify-center items-center gap-3 w-full'>
                    <LoginGoogle></LoginGoogle>
                </div>
            </div>
        </div>
    );
}