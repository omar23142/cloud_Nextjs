import { TiTick } from "react-icons/ti";

export default function WebHostingPlan() {
  return (
    <section className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-900 shadow-sm transition hover:shadow-md sm:p-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold sm:text-xl">Premium</h3>
          <p className="mt-1 text-sm text-neutral-600">Best for growing sites</p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
          10% OFF
        </span>
      </header>

      <div className="mt-5 flex items-end gap-2">
        <strong className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          $4.99
        </strong>
        <span className="pb-1 text-sm text-neutral-600">/mo</span>
      </div>

      <div className="mt-6">
        <h5 className="text-sm font-semibold text-neutral-800">Top features</h5>
        <ul className="mt-3 space-y-2 text-sm text-neutral-700 sm:text-base">
          <li className="flex items-center gap-2">
            <TiTick className="shrink-0 text-xl text-emerald-600" aria-hidden="true" />
            <span>100 websites</span>
          </li>
          <li className="flex items-center gap-2">
            <TiTick className="shrink-0 text-xl text-emerald-600" aria-hidden="true" />
            <span>100 GB ssd Storage</span>
          </li>
          <li className="flex items-center gap-2">
            <TiTick className="shrink-0 text-xl text-emerald-600" aria-hidden="true" />
            <span>Free SSL</span>
          </li>
          <li className="flex items-center gap-2">
            <TiTick className="shrink-0 text-xl text-emerald-600" aria-hidden="true" />
            <span>Free Email</span>
          </li>
          <li className="flex items-center gap-2">
            <TiTick className="shrink-0 text-xl text-emerald-600" aria-hidden="true" />
            <span>Unlimited BandWidth</span>
          </li>
          
          <li className="flex items-center gap-2">
            <TiTick className="shrink-0 text-xl text-emerald-600" aria-hidden="true" />
            <span>Daily backups</span>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2">
        Choose plan
      </button>
    </section>
  );
}