import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          New version coming soon |&nbsp;
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="mailto:gneus.live@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <p className="font-mono font-bold underline">Request Info</p>
          </a>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.gneus.live/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log In{' '}
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[24px] before:w-[200px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[240px] after:w-[480px] after:translate-x-1/6 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-60 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-60 before:lg:h-[120px] z-[-1]">
      <h1 className="mb-3 text-6xl font-semibold">gneus</h1>&nbsp;
      <h2 className="mb-3 text-2xl font-semibold">AI-powered learning</h2>
      </div>

<div class="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
  <div class="col-span-full">
    <label for="about" class="block text-med leading-6 text-white">What do you need help with?</label>
    <div class="mt-2 flex">
      <textarea id="about" name="about" rows="1" class="block w-full rounded-md bg-white/5 py-3 px-4 text-white shadow-sm mr-2 focus:ring-2 focus:ring-indigo-500 sm:text-sm"></textarea>
      <button type="submit" class="bg-transparent text-white px-4 rounded-md shadow-sm border border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        Submit
      </button>
    </div>
  </div>
</div>
    </main>
  )
}
