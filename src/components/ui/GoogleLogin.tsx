import Link from "next/link";
import LoginButton from "../LogginButton";

export default function LoginGoogle() {
    return (
        <Link href={'https://donebackk-948213617426.southamerica-east1.run.app/auth/provider/google'} className='w-full'>
            <LoginButton></LoginButton>
        </Link>
    );
}