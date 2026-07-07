import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-cream-50">
      {/* Hero Banner en forma de Tocador de Lujo */}
      <section className="w-full mb-12">
        <div className="relative w-full overflow-hidden shadow-2xl flex items-center bg-marble-black-900 border-b-2 border-gold-500/80 py-12 md:py-16">
          {/* Fondo de mármol negro con vetas doradas/blancas */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          
          {/* Efecto de luz LED perimetral (Glow cálido) */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold-200 to-transparent blur-sm"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Contenedor tipo Espejo con luz de fondo y plantas */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border-2 border-white/95 shadow-[0_0_25px_rgba(255,255,255,0.6)] max-w-lg">
              {/* Vetas de luz (reflejo de espejo con luz LED) */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold-500/20 via-white/50 to-gold-500/20 opacity-30 blur-md -z-10 animate-pulse"></div>
              
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight flex flex-col md:flex-row md:items-baseline gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-cream-50">LA ESQUINA</span>
                <span className="italic text-gold-500 text-2xl md:text-4xl font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ fontFamily: "cursive" }}>Del Regalo</span>
              </h1>
              <p className="text-[10px] md:text-xs text-gold-200 font-bold tracking-widest uppercase mt-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-plant-green-500 animate-ping"></span>
                Florería • Boutique • Desayunos • Detalles • Decoración
              </p>
              <div className="mt-4 text-cream-100 text-xs md:text-sm font-light leading-relaxed">
                Diseño, flores y ambientación exclusiva inspirada en el tocador de tus sueños. Descubre detalles que enamoran.
              </div>
            </div>

            {/* Espejo secundario circular que refleja la planta verde */}
            <div className="relative hidden lg:flex items-center justify-center w-72 h-56 rounded-full overflow-hidden border-4 border-gold-500/80 shadow-[0_0_20px_rgba(212,175,55,0.6)] bg-marble-black-900 group">
              <Image 
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=600&auto=format&fit=crop" 
                alt="Detalle de planta y tocador"
                fill
                sizes="288px"
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-marble-black-900 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 text-xs text-gold-200 font-bold tracking-widest uppercase z-10">Estilo & Sofisticación</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navegación rápida por categorías (Sticky) */}
      <div className="sticky top-20 z-40 bg-cream-50/90 backdrop-blur-md border-b border-cream-200 py-4 mb-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex gap-4 overflow-x-auto no-scrollbar justify-start md:justify-center">
          <a href="#floreria" className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-gold-500/30 text-wall-brown-700 font-bold uppercase tracking-widest text-xs hover:border-gold-500 hover:bg-gold-500 hover:text-white hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all">Florería</a>
          <a href="#desayunos" className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-gold-500/30 text-wall-brown-700 font-bold uppercase tracking-widest text-xs hover:border-gold-500 hover:bg-gold-500 hover:text-white hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all">Desayunos</a>
          <a href="#detalles" className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-gold-500/30 text-wall-brown-700 font-bold uppercase tracking-widest text-xs hover:border-gold-500 hover:bg-gold-500 hover:text-white hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all">Detalles</a>
          <a href="#boutique" className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-gold-500/30 text-wall-brown-700 font-bold uppercase tracking-widest text-xs hover:border-gold-500 hover:bg-gold-500 hover:text-white hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all">Boutique</a>
          <a href="#decoracion" className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-gold-500/30 text-wall-brown-700 font-bold uppercase tracking-widest text-xs hover:border-gold-500 hover:bg-gold-500 hover:text-white hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all">Decoración</a>
        </div>
      </div>

      <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* SECCIÓN FLORERÍA */}
        <section id="floreria" className="scroll-mt-32">
          <SectionHeader title="Florería" subtitle="Arreglos florales frescos y elegantes" icon="🌹" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            <ProductCard 
              image="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop"
              title="Ramo Buchón 50 Rosas"
              price="250.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1508611440019-1a511130d74b?q=80&w=600&auto=format&fit=crop"
              title="Caja de Girasoles"
              price="120.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=600&auto=format&fit=crop"
              title="Arreglo Tulipanes"
              price="180.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop"
              title="Ramo Primaveral"
              price="90.00"
            />
          </div>
        </section>

        {/* SECCIÓN DESAYUNOS */}
        <section id="desayunos" className="scroll-mt-32">
          <SectionHeader title="Desayunos" subtitle="Sorpresas deliciosas a primera hora" icon="🥐" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            <ProductCard 
              image="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=600&auto=format&fit=crop"
              title="Desayuno Premium"
              price="150.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1542276857-4b7112014163?q=80&w=600&auto=format&fit=crop"
              title="Caja Dulce Amanecer"
              price="95.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600&auto=format&fit=crop"
              title="Taza Frapé con Masitas"
              price="45.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=600&auto=format&fit=crop"
              title="Caja de Fresas c/ Chocolate"
              price="85.00"
            />
          </div>
        </section>

        {/* SECCIÓN DETALLES */}
        <section id="detalles" className="scroll-mt-32">
          <SectionHeader title="Detalles" subtitle="Cajas sorpresa y globos" icon="🎁" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            <ProductCard 
              image="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop"
              title="Caja Sorpresa Aniversario"
              price="110.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1577224855018-8f83060f64c6?q=80&w=600&auto=format&fit=crop"
              title="Peluches Variados"
              price="60.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1530103862676-de8892bc952f?q=80&w=600&auto=format&fit=crop"
              title="Arreglo de Globos"
              price="75.00"
            />
          </div>
        </section>

        {/* SECCIÓN BOUTIQUE */}
        <section id="boutique" className="scroll-mt-32">
          <SectionHeader title="Boutique" subtitle="Moda, accesorios y regalos exclusivos" icon="👜" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            <ProductCard 
              image="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop"
              title="Cartera Cuero Premium"
              price="320.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop"
              title="Perfume Signature"
              price="280.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop"
              title="Set de Joyería Fina"
              price="190.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=600&auto=format&fit=crop"
              title="Sombrero de Sol Elegante"
              price="85.00"
            />
          </div>
        </section>

        {/* SECCIÓN DECORACIÓN DE EVENTOS BY ANTIGRAVITY */}
        <section id="decoracion" className="scroll-mt-32">
          <SectionHeader title="Decoración de Eventos by Antigravity" subtitle="Diseño, flores y ambientación exclusiva para tus fechas especiales" icon="✨" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            <ProductCard 
              image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&auto=format&fit=crop"
              title="Decoración de Bodas Elegante"
              price="1500.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop"
              title="Ambientación de Cumpleaños Glam"
              price="850.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=600&auto=format&fit=crop"
              title="Centros de Mesa Premium"
              price="150.00"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=600&auto=format&fit=crop"
              title="Arco de Flores y Globos"
              price="450.00"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

// Componente de Título de Sección
function SectionHeader({ title, subtitle, icon }: { title: string, subtitle: string, icon: string }) {
  return (
    <div className="mb-8 flex flex-col items-start">
      <h2 className="text-2xl md:text-3xl font-black text-wall-brown-900 uppercase tracking-widest flex items-center gap-3">
        <span className="p-2 rounded-full bg-plant-green-100 text-plant-green-700 text-xl shadow-sm">{icon}</span> {title}
      </h2>
      <p className="text-wall-brown-500 font-medium mt-2 text-sm">{subtitle}</p>
      <div className="flex gap-1 mt-4">
        <div className="h-1 w-20 bg-gold-500 rounded-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"></div>
        <div className="h-1 w-6 bg-plant-green-500 rounded-full"></div>
      </div>
    </div>
  );
}

// Componente de Tarjeta de Producto
function ProductCard({ image, title, price }: { image: string, title: string, price: string }) {
  return (
    <div className="group bg-white rounded-xl border border-cream-200 overflow-hidden hover:shadow-xl hover:border-gold-500 hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all duration-300 flex flex-col cursor-pointer">
      <div className="relative w-full aspect-square overflow-hidden bg-cream-100/50">
        <Image 
          src={image} 
          alt={title} 
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />
        <button className="absolute bottom-2 right-2 bg-plant-green-700 text-white hover:bg-gold-500 p-2 rounded-full shadow-lg transition-colors cursor-pointer z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </button>
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-wall-brown-900 text-xs md:text-sm mb-1 leading-tight line-clamp-2 flex-grow">{title}</h3>
        <p className="text-gold-700 font-black text-sm md:text-base mt-2">Bs. {price}</p>
      </div>
    </div>
  );
}
