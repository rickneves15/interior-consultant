export function Brand({ text }: { text: string }) {
  return (
    <div className="border p-2">
      <h2 className="font-brand font-extralight text-sm uppercase">{text}</h2>
    </div>
  )
}