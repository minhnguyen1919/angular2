import { FirstKeyPipe } from './first-key.pipe';

describe('First key pipe:', () => {
  let pipe: FirstKeyPipe;
  let data = {};

  beforeEach(() => {
    pipe = new FirstKeyPipe;
    data = {
      one: '1',
      two: '2',
      three: '3'
    };
  })

  it('Should get the first property in object', () => {
    var result = pipe.transform(data);

    expect(result).toEqual('one');
  })
})
