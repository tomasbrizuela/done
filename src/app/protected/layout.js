import { redirect } from "next/navigation";
import getUserInfo from '../Utils/authHelper';

export default async function AuthLayout ({children}) {
    const token = "eyJhbGciOiJIUzI1NiIsImtpZCI6ImNqd3ZvdHFsVU5rbDhOVUgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2NmZ2JrYWR3b2xmcGtqbWdwdHdsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI4ZWUwZWUzMy1mMmYxLTQ1NGYtOWNhNC1mYWIzMjg0MDgxMTYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM3MTY1MDU3LCJpYXQiOjE3MzcxNjE0NTcsImVtYWlsIjoidG9tYXNhZ3VzdGluYnJpenVlbGFAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJnb29nbGUiLCJwcm92aWRlcnMiOlsiZ29vZ2xlIl19LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMOThXeUVmbmx5c3NwWFJFckVNVW01bFF2aWxDUWhYM0VTOUszWW5DSEpad2VXbHBpVmVBPXM5Ni1jIiwiZW1haWwiOiJ0b21hc2FndXN0aW5icml6dWVsYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiVG9tw6FzIEFndXN0w61uIEJyaXp1ZWxhIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IlRvbcOhcyBBZ3VzdMOtbiBCcml6dWVsYSIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0w5OFd5RWZubHlzc3BYUkVyRU1VbTVsUXZpbENRaFgzRVM5SzNZbkNISlp3ZVdscGlWZUE9czk2LWMiLCJwcm92aWRlcl9pZCI6IjExMjgzMjAwMzE1NjEzODUzNDU2OSIsInN1YiI6IjExMjgzMjAwMzE1NjEzODUzNDU2OSJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im9hdXRoIiwidGltZXN0YW1wIjoxNzM3MTYxNDU3fV0sInNlc3Npb25faWQiOiJhZWY2ZDhkMy1jYTlkLTRkMTUtODIzMS1kY2MwOThmMGEyNDMiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.8WiyG9KtSZeiDCw870DJVu7O5qJ5TB08u6s0Ucn6aU8"
    let userId = null;
    console.log("Estamos en el layout")
    try {
        userId = await getUserInfo(token)
        console.log(userId)
    } catch (error) {
        console.log(error)
        console.log("back login")

        redirect('/login');
    }
    if(!userId){
        console.log("back login por no user")

        redirect('/login');
    }
    console.log("home lets go")

    return <>{children}</>;
}