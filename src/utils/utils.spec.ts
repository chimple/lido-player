import { format } from './utils';
import { isArrangeLettersComplete, updateArrangeLettersCorrectness } from './utilsHandlers/slideHandler';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(format('Joseph', undefined, undefined)).toEqual('Joseph');
  });

  it('formats first and last names', () => {
    expect(format('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
  });

  it('formats first, middle and last names', () => {
    expect(format('Joseph', 'Quincy', 'Publique')).toEqual('Joseph Quincy Publique');
  });
});

describe('Arrange Letters slide validation', () => {
  const createSlides = (values: string[]): HTMLElement[] => {
    const container = document.createElement('div');
    container.setAttribute('template-id', 'arrangeLetters');
    values.forEach(value => {
      const slide = document.createElement('div');
      slide.setAttribute('type', 'slide');
      slide.setAttribute('value', value);
      container.appendChild(slide);
    });
    document.body.appendChild(container);
    return Array.from(container.querySelectorAll('[type="slide"]')) as HTMLElement[];
  };

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('does not complete a partially correct CAT arrangement', () => {
    expect(isArrangeLettersComplete(['C', 'T', 'A'], 'C,A,T')).toBe(false);
  });

  it('completes only when the entire CAT arrangement is correct', () => {
    expect(isArrangeLettersComplete(['C', 'A', 'T'], 'C,A,T')).toBe(true);
  });

  it('validates duplicate letters by position', () => {
    expect(isArrangeLettersComplete(['A', 'B', 'A'], 'A,B,A')).toBe(true);
    expect(isArrangeLettersComplete(['B', 'A', 'A'], 'A,B,A')).toBe(false);
  });

  it('updates green correctness styling per position without locking slides', () => {
    const slides = createSlides(['C', 'T', 'A']);
    const container = slides[0].parentElement as HTMLElement;

    updateArrangeLettersCorrectness(container, ['C', 'T', 'A'], ['C', 'A', 'T']);
    expect(slides[0].style.boxShadow).toContain('#65BC46');
    expect(slides[1].style.boxShadow).not.toContain('#65BC46');
    expect(slides[2].style.boxShadow).not.toContain('#65BC46');

    updateArrangeLettersCorrectness(container, ['A', 'C', 'T'], ['C', 'A', 'T']);
    expect(slides[0].style.boxShadow).not.toContain('#65BC46');
    expect(slides[1].style.boxShadow).toContain('#65BC46');
    expect(slides[2].style.boxShadow).toContain('#65BC46');
    expect(slides.every(slide => !slide.hasAttribute('disabled'))).toBe(true);
  });
});
