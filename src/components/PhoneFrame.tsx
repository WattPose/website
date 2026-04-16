interface PhoneFrameProps {
  src: string
  alt?: string
  className?: string
}

export default function PhoneFrame({ src, alt = 'WattPose app screenshot', className = '' }: PhoneFrameProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain drop-shadow-2xl rounded-[2.5rem] ${className}`}
    />
  )
}
