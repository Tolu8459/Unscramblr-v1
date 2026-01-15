"use client"

export default function BackgroundWords(){

    const letters = Array.from({ length: 25 }, (_, i) =>
  String.fromCharCode(65 + (i % 26))
);

    return(
        <div className="grid grid-cols-5 gap-6 place-items-center absolute inset-0 z-0">
  {letters.map((letter, i) => (
    <span
      key={i}
      className="animate-[wiggle_6s_ease-in-out_infinite] opacity-30 select-none pointer-events-none text-6xl font-bold"
      style={{ animationDelay: `${Math.random() * 3}s` }}
    >
      {letter}
    </span>
  ))}
</div>
       
        
    )
}