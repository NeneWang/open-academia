import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first letter and make all other letters lowercase', () => {
    expect(pipe.transform('angular')).toBe('Angular');
    expect(pipe.transform('NGRX')).toBe('Ngrx');
    expect(pipe.transform('rxjs')).toBe('Rxjs');
  });

  it('should handle empty strings', () => {
    expect(pipe.transform('')).toBe('');
  });

});