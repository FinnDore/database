import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function Home() {
    const hello = await api.post.hello.query({ text: "from tRPC" });
    const session = await getServerAuthSession();

    return (
        <main className="flex min-h-screen flex-col text-white">
        </main>
    );
}


