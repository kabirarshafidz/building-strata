import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg mb-8">
      <Image
        src="/apartment.jpg"
        alt="Modern apartment building"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to Your Strata Community
            </h1>
            <p className="text-lg text-white/90">
              Manage your property efficiently with our comprehensive strata
              management solution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
