import Container from 'components/Container'

const Footer = () => (
  <footer className="text-slate-900 bg-emerald-600/10 border-t border-accent-2 mt-20">
    <Container>
      <div className="py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-10">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            More links
          </h3>

          <div className="text-center lg:text-left mt-5">
            <a href="mailto:ftkachenko.work@gmail.com" className="font-bold hover:underline hover:text-emerald-600 flex transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>


              let&apos;s keep in touch
            </a>
          </div>
        </div>

        <div className="flex lg:flex-row justify-center lg:text-left text-center">
          <a
            href="https://github.com/Pulko"
            className="mx-4 font-bold hover:text-emerald-600 transition"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fedor-tkachenko/"
            className="mx-4 font-bold hover:text-emerald-600 transition"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer