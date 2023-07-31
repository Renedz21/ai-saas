import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
    return (
        <section>
            <h1>Landing Unprotected</h1>
            <div>
                <Link
                    href='sign-in'
                >
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link
                    href='sign-up'
                >
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>
        </section>
    )
}