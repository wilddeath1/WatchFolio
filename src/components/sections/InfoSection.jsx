const InfoSection = () => {
  return (
    <section className="h-64 bg-info-background border-t border-b border-border px-10 flex items-center">
      <div>
        <h2 className="text-heading text-2xl font-semibold">
          About WatchFolio
        </h2>

        <p className="text-text mt-2 max-w-2xl">
          A personal watchboard for discovering, comparing, and keeping track
          of watches I'm interested in.
        </p>

        <p className="text-muted text-sm mt-3">
          This project is currently under development. More features and watch
          data will be added over time.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
