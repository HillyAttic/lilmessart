export default function PromoBanner() {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Banner image area */}
      <div
        className="relative h-40 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md text-center leading-tight">
          <p className="text-lg font-black leading-none">15</p>
          <p>Jan</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-[10px] text-white/70 font-medium">Spruko Official Inc</p>
          <p className="text-base font-black text-white leading-tight">BIG SAVING DAYS</p>
          <p className="text-[10px] text-white/80 mt-1 leading-snug">
            Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above T&C
          </p>
        </div>
      </div>

      {/* Bottom info */}
      <div className="p-4">
        <p className="text-[10px] text-muted-foreground mb-2">15, Jan 2022 - 19, Jan 2022</p>
        <p className="text-sm font-bold text-primary mb-1">Biggest sale is back.</p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Labore harum accusamus eum dolorum sapiente. Saepe
        </p>
        <div className="flex items-center gap-2">
          <button className="flex-1 h-8 rounded-md bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors">
            Notify Me
          </button>
          <button className="flex-1 h-8 rounded-md border border-border text-foreground text-xs font-semibold hover:bg-muted transition-colors">
            Offers
          </button>
        </div>
      </div>
    </div>
  )
}
