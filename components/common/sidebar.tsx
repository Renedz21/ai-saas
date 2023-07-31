"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    MessageSquare,
    ImageIcon,
    VideoIcon,
    MusicIcon,
    Settings,
    Code
} from 'lucide-react'

const montserrat = Montserrat({
    weight: '600',
    subsets: ['latin']
})

const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: 'text-sky-500'
    },
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: 'text-violet-700'
    },
    {
        label: 'Image Generation',
        icon: ImageIcon,
        href: '/image',
        color: 'text-pink-700'
    },
    {
        label: 'Video Generation',
        icon: VideoIcon,
        href: '/video',
        color: 'text-orange-700'
    },
    {
        label: 'Music Generation',
        icon: MusicIcon,
        href: '/music',
        color: 'text-emerald-500'
    },
    {
        label: 'Code Generation',
        icon: Code,
        href: '/code',
        color: 'text-green-700'
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    },
]

const Sidebar = () => {
    const pathname = usePathname()
    return (
        <aside className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link
                    href='/dashboard'
                    className="flex items-center pl-3 mb-14"
                >
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src='/logo.png'
                        />
                    </div>
                    <h1 className={cn('text-2xl font-bold', montserrat.className)}>Genius</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                                pathname === route.href ? 'bg-white/10 text-white' : 'text-zinc-400'
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn('w-5 h-5 mr-3', route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar