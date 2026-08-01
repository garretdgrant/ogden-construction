type ServicePlaceholderProps = {
  title: string;
  message: string;
};

export const ServicePlaceholder = ({
  title,
  message,
}: ServicePlaceholderProps) => {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-6 text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Placeholder
      </p>
      <h3 className="mt-2 text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-700">{message}</p>
    </div>
  );
};
