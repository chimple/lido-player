import { getGoodJobAudio, resetGoodJobAudioTracking, shouldPlayGoodJobAudio } from './utils';
import { resolveCommonAudioPath } from './constants';

describe('common audio resolution', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    delete (window as any).__LIDO_COMMON_AUDIO_PATH__;
  });

  it('uses the same path join for instruction and Good Job filenames', () => {
    expect(resolveCommonAudioPath('/Lido-CommonAudios/kn/', 'goodJob.mp3')).toBe('/Lido-CommonAudios/kn/goodJob.mp3');
  });

  it.each(['flashcardtemplate', 'writeCard', 'drawShape'])('limits Good Job resolution to %s', templateId => {
    document.body.innerHTML = `<lido-container template-id="${templateId}"><lido-cell id="arrow"></lido-cell></lido-container>`;
    (window as any).__LIDO_COMMON_AUDIO_PATH__ = '/Lido-CommonAudios/pt';
    expect(getGoodJobAudio(document.querySelector('#arrow') as HTMLElement)).toBe('/Lido-CommonAudios/pt/goodJob.mp3');
  });

  it('does not resolve Good Job for unrelated templates or missing paths', () => {
    document.body.innerHTML = '<lido-container template-id="other"><lido-cell id="arrow"></lido-cell></lido-container>';
    expect(getGoodJobAudio(document.querySelector('#arrow') as HTMLElement)).toBeUndefined();
  });

  it('tracks Good Job independently per template and resets with the lesson', () => {
    document.body.innerHTML = `<lido-home>
      <lido-container template-id="writeCard"><lido-cell id="write-arrow"></lido-cell></lido-container>
      <lido-container template-id="drawShape"><lido-cell id="draw-arrow"></lido-cell></lido-container>
    </lido-home>`;
    const home = document.querySelector('lido-home') as HTMLElement;
    const writeArrow = document.querySelector('#write-arrow') as HTMLElement;
    const drawArrow = document.querySelector('#draw-arrow') as HTMLElement;
    writeArrow.id = 'arrow';
    resetGoodJobAudioTracking(home);
    expect(shouldPlayGoodJobAudio(writeArrow)).toBe(true);
    expect(shouldPlayGoodJobAudio(writeArrow)).toBe(false);
    drawArrow.id = 'arrow';
    expect(shouldPlayGoodJobAudio(drawArrow)).toBe(true);
    resetGoodJobAudioTracking(home);
    expect(shouldPlayGoodJobAudio(writeArrow)).toBe(true);
  });
});
