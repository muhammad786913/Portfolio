export default function SectionTitle({ label, title, description }) {
  return (
    <div className="max-w-3xl">

      <p className="text-sm font-semibold tracking-[5px] text-purple-400">
        {label}
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-gray-500">
          {description}
        </p>
      )}

    </div>
  );
}