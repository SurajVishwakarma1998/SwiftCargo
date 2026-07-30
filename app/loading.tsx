export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-20">
      <div className="flex flex-col items-center gap-4">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-navy-200 border-t-orange-500" />
        <p className="text-sm text-navy-500">Loading...</p>
      </div>
    </div>
  );
}
