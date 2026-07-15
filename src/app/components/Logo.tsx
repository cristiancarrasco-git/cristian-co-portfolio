import brandLogo from 'figma:asset/26a37e688debf5f4c63f0f085afeb78388c4b4d1.png';

export function Logo() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <img 
        src={brandLogo} 
        alt="Brand Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
