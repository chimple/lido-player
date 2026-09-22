import { format } from './utils';
import { getSlideValuesForValidation, isArrangeLettersComplete, isReorderComplete, updateArrangeLettersCorrectness, updateReorderCorrectness } from './utilsHandlers/slideHandler';

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

describe('Reorder slide validation', () => {
  const createSlides = (ids: string[]): HTMLElement[] => {
    const container = document.createElement('div');
    container.setAttribute('template-id', 'reorder');
    ids.forEach(id => {
      const slide = document.createElement('div');
      slide.setAttribute('type', 'slide');
      slide.id = id;
      slide.setAttribute('value', id.replace('option_', 'displayed-value-'));
      container.appendChild(slide);
    });
    document.body.appendChild(container);
    return Array.from(container.querySelectorAll('[type="slide"]')) as HTMLElement[];
  };

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('validates the complete option ID order, not displayed values', () => {
    expect(isReorderComplete(['option_1', 'option_2', 'option_3', 'option_4'], 'option_1,option_2,option_3,option_4')).toBe(true);
    expect(isReorderComplete(['option_1', 'option_3', 'option_2', 'option_4'], 'option_1,option_2,option_3,option_4')).toBe(false);
  });

  it('uses option IDs for runtime validation instead of displayed values', () => {
    const slides = createSlides(['option_1', 'option_2', 'option_3', 'option_4']);
    const container = slides[0].parentElement as HTMLElement;

    expect(getSlideValuesForValidation(container, slides)).toEqual(['option_1', 'option_2', 'option_3', 'option_4']);
  });

  it('applies positional correctness feedback without locking reordered items', () => {
    const slides = createSlides(['option_1', 'option_3', 'option_2', 'option_4']);
    const container = slides[0].parentElement as HTMLElement;

    updateReorderCorrectness(container, ['option_1', 'option_3', 'option_2', 'option_4'], ['option_1', 'option_2', 'option_3', 'option_4']);
    expect(slides[0].style.boxShadow).toContain('#65BC46');
    expect(slides[1].style.boxShadow).not.toContain('#65BC46');
    expect(slides[2].style.boxShadow).not.toContain('#65BC46');
    expect(slides[3].style.boxShadow).toContain('#65BC46');
    expect(slides.every(slide => !slide.hasAttribute('disabled'))).toBe(true);
  });
});
