/** Temporary page body until the feature is implemented. */
export function PagePlaceholder({ title, feature }: { title: string; feature: string }) {
  return (
    <section>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 text-sm text-slate-500">Belum diimplementasikan · {feature}</p>
    </section>
  )
}
