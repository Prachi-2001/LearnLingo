import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const cards = [{
    title: "Exercises",
    body: "Improve their language proficiency through interactive exercises"
}, {
    title: "Activities",
    body: "Improve their language proficiency through interactive exercises"
}]

export default function Home() {
    return (
<main className="flex flex-col items-center justify-between px-3 sm:px-24 py-10 sm:py-20">
  <div className="flex items-center">
    <div className="flex-col items-center justify-center space-y-5">
      <h3 className="text-center text-4xl sm:text-6xl font-bold">
        Learn languages through interactive exercises
      </h3>
      <h2 className="text-center mt-5 sm:text-lg">
        Improve language proficiency, for beginners and even experienced
      </h2>
      <div className="flex justify-center py-4"> {/* Use justify-center here */}
        <Button>
          <Link href="/quiz">Explore Quizzes</Link>
        </Button>
      </div>
    </div>
    <img
      width={300}
      src="https://static.cambly.com/_next/static/media/guy_on_globe.1786b9db.svg"
      alt="boyImg"
    />
  </div>
  {/* Rest of your code */}
</main>
    )
}
