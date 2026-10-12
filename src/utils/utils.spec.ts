import { format, initEventsForElement } from './utils';
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

describe('element initialization and canplay', () => {
  const addContainer = (canplay: 'true' | 'false') => {
    const container = document.createElement('div');
    container.id = 'lido-container';
    container.setAttribute('canplay', canplay);
    container.setAttribute('objective', 'correct');
    document.body.appendChild(container);
    return container;
  };

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('keeps onEntry styling and click initialization in play mode', async () => {
    addContainer('true');
    const option = document.createElement('div');
    option.setAttribute('onEntry', "this.backgroundColor='#FFB366'; this.borderRadius='10px';");
    document.body.appendChild(option);

    await initEventsForElement(option, 'click');

    expect(option.style.backgroundColor).toBe('#FFB366');
    expect(option.style.borderRadius).toBe('10px');
    expect(option.style.cursor).toBe('pointer');
  });

  it('runs visual onEntry actions in edit mode without running gameplay actions', async () => {
    addContainer('false');
    const option = document.createElement('div');
    option.textContent = 'option';
    option.setAttribute('onEntry', "this.backgroundColor='#FFB366'; this.borderRadius='10px'; this.addText='should-not-run';");
    document.body.appendChild(option);

    await initEventsForElement(option, 'click');

    expect(option.style.backgroundColor).toBe('#FFB366');
    expect(option.style.borderRadius).toBe('10px');
    expect(option.textContent).toBe('option');
    expect(option.style.cursor).toBe('');
    expect(option.classList.contains('click-element')).toBe(true);
    expect(option.style.getPropertyValue('--btn-bg-color')).toBe('#FFB366');
    expect(option.style.getPropertyValue('--btn-shadow-px')).toBe('0px 0px 0px');
  });

  it('does not install click or touch gameplay handlers in edit mode', async () => {
    const container = addContainer('false');
    const option = document.createElement('div');
    option.setAttribute('type', 'click');
    option.setAttribute('value', 'correct');
    option.setAttribute('onTouch', "this.backgroundColor='red';");
    document.body.appendChild(option);

    await initEventsForElement(option, 'click');
    option.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    option.dispatchEvent(new Event('pointerup', { bubbles: true }));

    expect(container.getAttribute('lidoSelectedValues')).toBeNull();
    expect(option.style.backgroundColor).toBe('');
  });

  it('does not duplicate interaction handlers when initialized repeatedly', async () => {
    addContainer('true');
    const option = document.createElement('div');
    const addEventListener = jest.spyOn(option, 'addEventListener');
    document.body.appendChild(option);

    await initEventsForElement(option, 'click');
    const clickListenersAfterFirstInit = addEventListener.mock.calls.filter(([event]) => event === 'click').length;
    await initEventsForElement(option, 'click');

    expect(clickListenersAfterFirstInit).toBe(1);
    expect(addEventListener.mock.calls.filter(([event]) => event === 'click')).toHaveLength(1);
  });

  it('preserves questionBoard option styling in edit mode', async () => {
    addContainer('false');
    const option = document.createElement('div');
    option.setAttribute('bg-color', '#FFB366');
    option.setAttribute('height', '215px');
    option.setAttribute('width', 'auto');
    option.setAttribute('onEntry', "this.borderRadius='10px'; this.flexFlow='column-reverse';");
    option.style.backgroundColor = '#FFB366';
    option.style.height = '215px';
    option.style.width = 'auto';
    option.style.boxShadow = '0 4px 0 #E99500';
    document.body.appendChild(option);

    await initEventsForElement(option, 'click');

    expect(option.style.backgroundColor).toBe('#FFB366');
    expect(option.style.borderRadius).toBe('10px');
    expect(option.style.boxShadow).toBe('0 4px 0 #E99500');
    expect(option.style.height).toBe('215px');
    expect(option.style.width).toBe('auto');
    expect(option.style.flexFlow).toBe('column-reverse');
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
