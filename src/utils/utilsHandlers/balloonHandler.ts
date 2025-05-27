export async function generateBalloonData(letters: string[], svgPath: string) {
    const response = await fetch(svgPath);
    const svgText = await response.text();
    const color = getRandomColor();
    const coloredSVG = svgText
      .replace(/<svg([^>]*)>/, `<svg$1>`)
      .replace(/fill="[^"]*"/g, `fill="${color}"`)
      .replace(/(<(path|circle|ellipse|polygon|rect)\b(?![^>]*fill=))/g, `$1 fill="${color}"`);
    const dataUri = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(coloredSVG)));
  
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const left = Math.random() * (window.innerWidth - 300);
    const duration = 5 + Math.random() * 5;
    const delay = Math.random() * 3;
  
    return { dataUri, letter, left, duration, delay };
  }
  
  function getRandomColor(): string {
    const colors = ['#FF4C4C', '#4CFF4C', '#4C4CFF', '#FFAA00', '#AA00FF', '#00AAAA'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  