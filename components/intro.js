import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Gimme an R! <br></br>
        R!<br></br>
        Gimme a U!<br></br>
        U!<br></br>
        Gimme an S!<br></br>
        S!<br></br>
        Gimme another S!<br></br>
        S!<br></br>
        What does that spell?!<br></br>
        Russ!
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        The website of the one and only{' '}
        <a
          href="https://www.instagram.com/releadninja/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Real Estate Lead Ninja!
        </a>{' '}
        and his Web Dev Sidekick!<br></br>🍆🍆🍆🍆🍆🍆🍆
      </h4>
    </section>
  )
}
