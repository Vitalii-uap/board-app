export function formatDateTime(iso: string) {
  const created = new Date(iso);
  const date = created.toLocaleDateString("uk-UA");
  const time = created.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { date, time };
}
