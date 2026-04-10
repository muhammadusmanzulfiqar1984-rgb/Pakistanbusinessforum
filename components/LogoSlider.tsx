import Image from 'next/image'
import './LogoSlider.css'

interface LogoSliderProps {
  variant?: 'light' | 'dark' | 'gold'
  label?: string
  logos: { src: string; alt: string }[]
}

export default function LogoSlider({ variant = 'light', label, logos }: LogoSliderProps) {
  const doubled = [...logos, ...logos]

  return (
    <div className="logo-slider-section">
      {label && <div className="logo-slider-label">{label}</div>}
      <div className={`logo-strip logo-strip--${variant}`}>
        <div className="logo-track">
          {doubled.map((logo, i) => (
            <div className="logo-item" key={i}>
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={120} 
                height={60} 
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
