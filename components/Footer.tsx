import Container from 'components/Container'

const Footer = () => (
  <footer className="text-slate-900 border-accent-2">
    <Container>
      <div className="py-12 flex flex-col lg:flex-row items-center justify-center">
        <div className="flex lg:flex-row justify-center lg:text-left text-center">
          <a
            href="https://github.com/Pulko"
            className="mx-4 font-bold hover:text-emerald-600 transition underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fedor-tkachenko/"
            className="mx-4 font-bold hover:text-emerald-600 transition underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <p>
            {'© Pulko ' + (new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer