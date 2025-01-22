import Link from "next/link";
import { Input } from "../../components/ui/input";
import LoginButton from "../../components/LogginButton";
import { Button } from "../../components/ui/button";

export default function SignUp() {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <div>
                <h1 className='text-4xl text-black font-bold'>Create your account</h1>
            </div>
            <div className='flex flex-col justify-center items-center w-1/3 mx-auto gap-3'>
                <Input type='text' placeholder='Your name' />
                <Input type='email' placeholder='Your email' />
                <Input type='password' placeholder='Your password' />
                <Input type='password' placeholder='Confirm password' />
                <Button className='w-full'>Create account</Button>
            </div>
        </div>
    );
}