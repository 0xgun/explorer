import { Poppins } from "next/font/google";

const mainFont = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className={`${mainFont.className} font-medium text-5xl`}>
                Semaphorus
            </h1>
        </main>
    );
}
