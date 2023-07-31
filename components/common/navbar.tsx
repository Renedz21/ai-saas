import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "@/components/common/mobile-sidebar"

const Navbar = () => {
    return (
        <header className="flex items-center p-4">
            <MobileSidebar />
            <nav className="flex w-full items-center justify-end">
                <UserButton afterSignOutUrl="/" />
            </nav>
        </header>
    )
}

export default Navbar